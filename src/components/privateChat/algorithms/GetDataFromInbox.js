import { useFirestore, useFirestoreCollectionData } from 'reactfire'

export const GetDataFromInbox = (collectionName, uid) => {
    const firestore = useFirestore()
    const messageRef = firestore.collection(collectionName).where('ownersInbox', 'array-contains',  uid)
    const {data, status, error} = useFirestoreCollectionData(messageRef, { idField: 'id' })
    return {data, status, error}
}