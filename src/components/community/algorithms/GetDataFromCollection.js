import { useFirestore, useFirestoreCollectionData } from 'reactfire'

export const GetDataFromCollection = (room, firstCollectionName, collectionName) => {
    const firestore = useFirestore()
    const messageRef = firestore.collection(firstCollectionName).doc(room).collection(collectionName).orderBy('createdAt')
    const {data, status, error} = useFirestoreCollectionData(messageRef, { idField: 'id' })
    return {data, status, error}
}
