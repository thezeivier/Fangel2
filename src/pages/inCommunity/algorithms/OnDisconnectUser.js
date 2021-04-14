import 'firebase/database'

export const OnDisconnectUser = (uid, database, firestore, idRoomRoute, idRoom) => {
  const onlineRef = database.ref('.info/connected')
    onlineRef.on('value', snap => {
      database
      .ref(`/users/${uid}`)
      .onDisconnect()
      .update({online: false})
      .then(() => {
        // console.info("User disconnected") 
        firestore.collection("users").doc(uid)
        .update({online: true})
        .then(() => {
          return true
        })
        .catch(error => {
          console.error(error)
        })
        database.ref(`/users/${uid}`).set({online: true, uid})
      })
      .catch(err => {
          console.error(err)
      })
  })
}
