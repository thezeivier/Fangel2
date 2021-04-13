import 'firebase/database'

export const OnDisconnectUser = (uid, database, firestore) => {
    const onlineRef = database.ref('.info/connected')
    onlineRef.on('value', snap => {
        database
        .ref(`/users/${uid}`)
        .onDisconnect()
        .update({online: false, uid: uid})
        .then(() => {
          console.info("User disconnected")  
          firestore.collection("users").doc(uid)
          .update({online: true})
          .then(() => {
            return true
          })
          .catch(error => {
              console.error(error)
          })
        })
        .catch(err => {
            console.error(err)
        })
    })
}
