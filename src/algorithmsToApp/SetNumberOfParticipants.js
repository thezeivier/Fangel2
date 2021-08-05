export const SetNumberOfParticipants = async (firestore, number, roomId) => {
    const batch = firestore.batch()
    console.log("hola")
    batch.set(
        firestore.collection("communities").doc(roomId),
        {
            numberOfUsersConnected: parseInt(number)
        },
        {merge: true}
    )
    await batch.commit()
}