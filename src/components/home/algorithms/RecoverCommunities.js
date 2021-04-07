export const RecoverCommunities = async (firestore) => {
  return await firestore
  .collection("communities")
  .orderBy("numberOfUsersConnected", "desc")
  .limit(10)
  .get()
  .then((result)=> {
    if(result.empty){
      console.log("No hay comunidades disponibles.")
      return null
    }else{
      return {
        community: result.docs.map(doc => {
          return {data: doc.data()}
        })
      }
    }
  })
}