import { useFirestore, useFirestoreCollectionData } from 'reactfire'

export const GetDataFromMessagesInbox = (idMessageInbox, firstCollectionName, collectionName) => {
    const firestore = useFirestore()
    const messageRef = idMessageInbox ? firestore.collection(firstCollectionName).doc(idMessageInbox).collection(collectionName).orderBy('createdAt') : null
    const {data, status, error} = useFirestoreCollectionData(messageRef, { idField: 'id' })
    return {data, status, error}
}
