export const UploadSubSpaces = async (data, firestore, communityData) => {
    const {numberOfSubSpaces} = data
    const batch = firestore.batch()
    const communityRef = firestore.collection("communities").doc(communityData.roomName)
    const existentSubSpaces =  await communityRef.collection("subSpace").get().then(result =>{
        return result.docs.length
    })

    for(let i = existentSubSpaces + 1; i <= existentSubSpaces + parseInt(numberOfSubSpaces); i++){
        const subSpaceRef = communityRef.collection("subSpace")
        let id = idGenerator()
        batch
        .set(
            subSpaceRef.doc(id),
            {
                nameOfSpace: `Subespacio ${i}`,
                id,
                numberOfSpace: i,
            },
            {merge: true}
        )
    }

    return await batch.commit()
                    .then(() =>{
                        return true;
                    }).catch(() =>{
                        return false;
                    })
}


const idGenerator = () =>{
    let id=""
    let charaters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    while (id.length < 10){
        id = id.concat(charaters.charAt(Math.round(Math.random()*charaters.length)))
    }
    return id
}