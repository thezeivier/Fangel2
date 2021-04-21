export const codeValidator = async (code, firestore) => {

  if(code.startsWith("admin")){
    let ref = firestore.collection("adminCodes")
    let validate = await ref
    .where("disponibleCodes", "array-contains", code)
    .get()
    .then((result)=>{
      if(!result.empty){
        return {confirm: true, type: "admin"}
      }else{
        return false
      }
    }).catch((error)=>{
      console.error(error)
      return false
    })

    return validate
  }else{
    let ref = firestore.collection("userCodes")
    let validate = await ref
    .doc(code)
    .get()
    .then(result => {
      if(result.exists){
        if(result.data().users.length < 20){
          return {confirm: true, type: "user"}
        }else{
          return false
        }
      }else{
        return false
      }
    }).catch((error)=>{
      console.error(error)
      return false
    })
    return validate
  }
}


export const RegisterWithEmail = async (data, auth, type, firestore, firebase) => {
  const {firstName, lastName, password, email} = data
  const emailRepaired = email.replace(" ", "") 
  let value = await auth
  .createUserWithEmailAndPassword(emailRepaired, password)
  .then(async result => {
    result.user.updateProfile({
      displayName: `${firstName.split(" ")[0]}${(lastName.length !== 0) ? " ".concat(lastName.split(" ")[0]): ""}`
    })

    const finalConfirmation = await sendDataUser(data, result.user.uid, type, firestore, firebase, emailRepaired)

    result.user
    .sendEmailVerification()
    .then(()=>{
      auth.signOut()
    }).catch(error=>{
      console.log(error)
    })

    return finalConfirmation
  }).catch(error=>{
    console.log(error)
    return false
  })
  return value
}


export const sendDataUser = async (data, uid, type, firestore, firebase, email) => {
  const {firstName, lastName, code} = data
  let batch = firestore.batch()

  firestore
  .collection('users')
  .doc(uid)
  .set({
      uid: uid,
      name: {
        firstName,
        lastName
      },
      email: email,
      type: type,
      registerDate: Date.now(),
      quizComplete: false,
  }).then(()=>{
    // console.log("Send Success")
  }).catch(error =>{
    console.error('Error de envío', error)
  })

  if(type === "admin"){
    let codeDBRef = firestore.collection("adminCodes").doc("listOfCodes")
    batch.set(
      codeDBRef,
      {
        disponibleCodes: firebase.firebase_.firestore.FieldValue.arrayRemove(code),
        usedCodes: firebase.firebase_.firestore.FieldValue.arrayUnion(code),
      },
      {merge: true}
    )
    const updateACodes = await batch.commit().then(()=>{
      // console.log("éxito")
      return true
    }).catch(error =>{
      console.error(error)
      return false
    })
    return updateACodes
  }else if (type === "user"){
    let codeDBRef = firestore.collection("userCodes").doc(code)
    batch.set(
      codeDBRef,
      {
        users: firebase.firebase_.firestore.FieldValue.arrayUnion(uid),
      }, 
      {merge: true}
    )
    const updateUCodes = await batch.commit().then(()=>{
      // console.log("éxito")
      return true
    }).catch(error =>{
      console.error(error)
      return false
    })
    return updateUCodes
  }
}