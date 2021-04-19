import { useFirestore, useFirestoreCollectionData } from 'reactfire'

export const GetDataFromUsers = (collectionName, uid) => {
    const firestore = useFirestore()
    const messageRef = firestore.collection(collectionName).where('uid', '==',  uid)
    const {data, status, error} = useFirestoreCollectionData(messageRef)
    return {data, status, error}
}