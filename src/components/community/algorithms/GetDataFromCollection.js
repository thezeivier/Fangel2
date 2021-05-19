import { useFirestore, useFirestoreCollectionData } from 'reactfire'

export const GetDataFromCollection = (room, firstCollectionName, collectionName, subMessages, idSubSpace, isSubSpace) => {
    const firestore = useFirestore()
    const messageRef = !isSubSpace ? firestore.collection(firstCollectionName).doc(room).collection(collectionName).orderBy('createdAt') : 
        firestore.collection(firstCollectionName).doc(room).collection(subMessages).doc(idSubSpace).collection(collectionName).orderBy('createdAt')
    const {data, status, error} = useFirestoreCollectionData(messageRef, { idField: 'id' })
    return {data, status, error}
}
