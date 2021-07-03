import {wordsCapitalizer} from './RegisterWithEmail'

export const SignInWithGoogle = async (auth, firebase, firestore) => {
  await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  .then(async result => {  
    const user = await result.user
    const data = {firstName: user.displayName, lastName: ''}
    sendDataUserFromGoogle(data, user.uid, "admin", firestore, firebase, user.email)
    return {verified: user.emailVerified, username: user.displayName, email: user.email, uid: user.uid}
    console.log("Logged Successfully")
  })
  .catch(err => console.error(err.message))
  };


export const sendDataUserFromGoogle = async (data, uid, type, firestore, firebase, email) => {
  const {firstName, lastName, code} = data
  let batch = firestore.batch()
  let usersRef = firestore.collection("users").doc(uid)

  firebase
  .firestore()
  .collection('users')
  .where("uid", "==", uid).get().then(async docs => {
    if(docs.empty) {
      batch
      .set(
        usersRef,
        {
          uid: uid,
          name: {
            firstName: await wordsCapitalizer(firstName),
            lastName: await wordsCapitalizer(lastName),
          },
          email: email,
          type: type,
          registerDate: Date.now(),
          quizComplete: false,
        },
        {merge: true}
      )
      
      if(type === "admin"){
        // let codeDBRef = firestore.collection("adminCodes").doc("listOfCodes")
        // batch.set(
        //   codeDBRef,
        //   {
        //     disponibleCodes: firebase.firebase_.firestore.FieldValue.arrayRemove(code),
        //     usedCodes: firebase.firebase_.firestore.FieldValue.arrayUnion(code),
        //   },
        //   {merge: true}
        // )
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
  })
}