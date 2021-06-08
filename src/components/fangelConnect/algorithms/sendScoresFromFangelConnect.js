export const sendScoresFromFangelConnect = (firestore, uidOfOtherUser, validatorUid, scores) => {
    const {tolerance, empathy, enthusiasm, respect, communication} = scores
    const batch = firestore.batch()
    const scoresOfFangelConnectRef =  firestore.collection("scores").doc(uidOfOtherUser)
                                                .collection("fangelConnect").doc()
    try{
        batch.set(
            scoresOfFangelConnectRef,
            {
                tolerance,
                empathy,
                enthusiasm,
                respect,
                communication,
                validatorUid,
                date: Date.now(),
            }
        )
        batch.commit()
    }catch{
        batch.commit()
    }

}
