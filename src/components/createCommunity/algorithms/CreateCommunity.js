export const CreateCommunity = async (data, firestore, userApp, communityImage, storage, roomPrivacy) => {
  const {nameCommunity} = data
  let uid = userApp.authState.uid
  let displayName = userApp.authState.displayName
  let batch = firestore.batch()
  const hashName = hashRoomGenerator();
  let communitiesRef = firestore.collection('communities').doc(hashName)
  let chatroomRef = firestore.collection('chatroom').doc(hashName)
  
  if ( roomPrivacy === "public") {
    const {descriptionCommunity} = data
    let activeCommunitiesRef = firestore.collection('activeCommunities').doc(hashName)
    let profileRoute = userApp.userFromDB.route ? userApp.userFromDB.route : false
    setChatRoom(batch, firestore, chatroomRef, hashName, uid)
    setActiveCommunity(batch, firestore, activeCommunitiesRef, hashName, uid)

    batch.set(
      communitiesRef,
    {
      username: userApp.userFromDB.username,
      privacy: roomPrivacy,
      name: displayName,
      title: nameCommunity,
      roomName: hashName,
      description: descriptionCommunity? descriptionCommunity: "",
      creatorUid: uid,
      numberOfUsersConnected: 1,
      usersConnected: [
        {
          uid: uid,
          username: userApp.userFromDB.username
        },
      ],
      profileRoute,
    },
    {merge:true}
    )

  }else if (roomPrivacy === "private"){
    setChatRoom(batch, firestore, chatroomRef, hashName, uid)
    batch.set(
      communitiesRef,
    {
      title: nameCommunity,
      roomName: hashName,
      privacy: roomPrivacy,
      creatorUid: uid,
      numberOfUsersConnected: 1,
      usersConnected: [
        {
          uid: uid,
          username: userApp.userFromDB.username
        },
      ]
    },
    {merge:true}
    )
  }

  //Envío de comunidad creada a DB
  let result = await batch.commit()
    .then(async()=>{
      if(communityImage && roomPrivacy === "public"){
        await communityImageSender(communityImage, storage, uid, hashName)
      }
      return true
    }).catch(error => {
      console.error(error)
      return false
    })
  return {result, hashName}
}

const communityImageSender = async (communityImage, storage, uid, hashName) => {

  let imageRenamed = new File([communityImage], `${hashName}.jpeg`, {type: 'image/jpeg'})
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

//Preenvío de chatRoom
const setChatRoom = (batch, firestore, chatroomRef, hashName, uid) => {
   return batch.set(
    chatroomRef,
    { 
      roomName: hashName,
      creatorUid: uid,
      communitiesRef: firestore.doc(`communities/${uid}`)
    },
    {merge:true}
  )
}

//Preenvío de activeCommunity
const setActiveCommunity = (batch, firestore, activeCommunitiesRef, hashName, uid) => {
  return batch.set(
    activeCommunitiesRef,
    {
      uid,
      duration: 60,
      transcurred: 0,
      communitiesRef: firestore.doc(`communities/${uid}`),
      roomName: hashName,
    },
    {merge:true}
  )
}

//Generador de hash para roomName
const hashRoomGenerator  = () => {
  const model = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let code = "";
  while (code.length < 128) {
    code = code.concat(model.charAt(Math.round(Math.random()*model.length)));
  }
  return code;
}
