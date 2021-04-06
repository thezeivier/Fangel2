export const RecoverCommunities = (firestore) => {
  firestore
  .collection("activeCommunities")
  .orderBy("usersConnected.length", "desc")
  .limit(3)
  .get()
  .then((result)=>{
    result.forEach(doc => {
      console.log(doc.data())
    });
  })
}