import { useFirestore, useFirestoreCollectionData } from 'reactfire'

export const GetDataFromInbox = (collectionName, uid, idInbox) => {
    const firestore = useFirestore()
    const messageRef = idInbox ? firestore.collection(collectionName).where('ownersInbox', 'array-contains',  uid).where("idInbox", "==", idInbox) : firestore.collection(collectionName).where('ownersInbox', 'array-contains',  uid)
    const {data, status, error} = useFirestoreCollectionData(messageRef, { idField: 'id' })
    return {data, status, error}
}