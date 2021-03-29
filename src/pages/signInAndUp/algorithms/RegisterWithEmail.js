export const RegisterWithEmail = async (data, auth) => {
  const {username, password, email} = data 
  let value = await auth
  .createUserWithEmailAndPassword(email, password)
  .then(result => {    
    result.user.updateProfile({
      displayName: `${username}`
    })
    result.user
    .sendEmailVerification()
    .then(()=>{
      auth.signOut()
    }).catch(error=>{
      console.log(error)
    })
    return true
  }).catch(error=>{
    console.log(error)
    return false
  })
  return value
}

export const codeValidator = async (code, firestore) => {

  if(code.substr(0, 5) === "admin"){
    let ref = firestore.collection("adminCodes")
    let validate = await ref
    .where("disponibleCodes", "array-contains", code)
    .get()
    .then((result)=>{
      if(!result.empty){
        return true
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
    .where("code", "==", code)
    .get()
    .then(result => {
      if(!result.empty){ 
        result.forEach(doc => {
          if(doc.data().users.length <= 50){
            return true
          }else{
            return false
          }
        });
      }else{
        return false
      }
    }).catch((error)=>{
      console.error(error)
      return false
    })
    console.log(validate)
    return validate
  }
}