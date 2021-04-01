export const CreateCommunity = async (data, firestore, userApp) => {
  const {nameCommunity, descriptionCommunity} = data
  let uid = userApp.authState.uid
  let communitiesRef = firestore.collection('communities')
  let result = await communitiesRef.doc(uid)
  .set({
      uid,
      username: userApp.authState.displayName,
      title: nameCommunity,
      description: descriptionCommunity,
      duration: 60,
      transcurred: 0,
  }).then(()=>{
    return true
  }).catch(error => {
    console.error(error)
    return false
  })
  return result
}