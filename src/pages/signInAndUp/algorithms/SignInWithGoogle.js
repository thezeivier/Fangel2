import {wordsCapitalizer} from './RegisterWithEmail'

export const sendDataUserFromGoogle = async (data, uid, type, firestore, firebase, email, photoUrl, nextRoute, history) => {
  try {
    const {firstName, lastName, code} = data
    let batch = firestore.batch()
    let usersRef = firestore.collection("users").doc(uid)

    await firebase
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
            score: {
              fangelScore: 65,
            },
            photoUrl,
            bucket: "fangelv2-300300.appspot.com",
          },
          {merge: true}
        )
        return batch.commit()
        .then(()=>{
          return nextRoute ? history.push(nextRoute) : window.location.reload()
        })
        .catch(err => {
          console.error(err.message)
          return false
        })
      }
    })
  } catch (err) {
    console.error(err.message)
    return false
  } 
}

export const SignInWithGoogle = async (auth, firebase, firestore, nextRoute, history) => {
  await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  .then(async result => {  
    const user = await result.user
    const data = await {firstName: user.displayName, lastName: ''}
    await sendDataUserFromGoogle(data, user.uid, "admin", firestore, firebase, user.email, user.photoURL, nextRoute, history)
    console.log("Logged Successfully")
    return history.push(nextRoute ? nextRoute : '/')
  })
  .catch(err => console.error(err.message))
};