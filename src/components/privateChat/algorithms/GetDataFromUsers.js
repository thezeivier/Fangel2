import { useFirestore, useFirestoreCollectionData } from 'reactfire'

export const GetDataFromUsers = (collectionName, idTransmitter, idReceiver, uidCurrentUser) => {
    const firestore = useFirestore()
    const uid = (uidCurrentUser == idReceiver) ? idTransmitter : idReceiver
    const messageRef = firestore.collection(collectionName).where('uid', '==',  uid)
    const {data, status, error} = useFirestoreCollectionData(messageRef)
    return {data, status, error}
}