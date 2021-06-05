export const createFangelConnectSpace = (firestore, existCreator, existJoinner, idOfFangelConnect) => {
    const batch = firestore.batch()
    try {
        batch.set(
            firestore.collection("communities").doc(idOfFangelConnect),
            {
                creatorUid:  existCreator.uid,
                creator: existCreator,
                joinner: existJoinner,
                roomName: idOfFangelConnect,
                privacy: "private",
                title: "Fangel Connect"
            }
        )
        batch.commit();
    }catch{
        batch.commit();
    }
}