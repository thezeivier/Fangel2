export const AddHour = async (firestore, uid) => {
    let batch = firestore.batch()
    let activeCommunitiesRef = firestore.collection("activeCommunities").doc(uid)
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