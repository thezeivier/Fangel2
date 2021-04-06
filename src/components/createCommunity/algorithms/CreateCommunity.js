export const CreateCommunity = async (data, firestore, userApp, communityImage, storage) => {
  const {nameCommunity, descriptionCommunity} = data
  let uid = userApp.authState.uid
  let batch = firestore.batch()
  let activeCommunitiesRef = firestore.collection('activeCommunities').doc(uid)
  let communitiesRef = firestore.collection('communities').doc(uid)

  batch.set(
    activeCommunitiesRef,
    {
      uid,
      duration: 60,
      transcurred: 0,
      userCodesRef: firestore.doc(`communities/${uid}`)
    },
    {merge:true}
    )
    
    batch.set(
      communitiesRef,
    {
      username: userApp.authState.displayName,
      title: nameCommunity,
      description: descriptionCommunity,
      creatorUid: uid,
      numberOfUsersConnected: 1,
      usersConnected: [
        {
          uid: uid,
          username: userApp.authState.displayName
        },
      ],
    },
    {merge:true}
  )
  let result = await batch.commit()
    .then(async()=>{
      if(communityImage){
        await communityImageSender(communityImage, storage, uid)
      }
      return true
    }).catch(error => {
      console.error(error)
      return false
    })
  return result
}

const communityImageSender = async (communityImage, storage, uid) => {

  let nameOfImage = uid.concat(new Date().getTime())
  let imageRenamed = new File([communityImage], `${nameOfImage}.jpeg`, {type: 'image/jpeg'})
  let initialType = communityImage.type.substr(0, 5)
  let storageRef = storage.ref()
  if(communityImage && (initialType === "image" )){
    let routePath = `communities/beforeEvaluation/${imageRenamed.name}`
    let uploadTask  = storageRef.child(routePath).put(imageRenamed)
    uploadTask.on('state_changed', (result)=>{
      let progress = (result.bytesTransferred/result.totalBytes) * 100
      // console.log('Subido' + progress + '%')
    })
    return await uploadTask.then(async ()=>{
      // console.log("upload success")
    })
  }else{
    return false
  }
}