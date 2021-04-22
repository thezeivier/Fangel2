export const AddHour = async (firestore, roomName) => {
    let batch = firestore.batch()
    let activeCommunitiesRef = firestore.collection("activeCommunities").doc(roomName)
    let result = await activeCommunitiesRef.get()
    .then(result =>{
        return result.data()
    }).catch(err =>{
        return false
    })
    if(result){
        batch.set(
            activeCommunitiesRef,
            {
                duration: result.duration + 60
            },
            {merge: true}
        )

        batch.commit()
    }
    return result
}