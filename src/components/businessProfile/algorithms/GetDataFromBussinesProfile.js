import { useFirestore, useFirestoreCollectionData } from 'reactfire'

export const GetDataFromBussinesProfile = (idProfile, firstCollectionName, collectionName) => {
    const firestore = useFirestore()
    const messageRef = idProfile ? firestore.collection(firstCollectionName).doc(idProfile).collection(collectionName) : null
    const {data, status, error} = useFirestoreCollectionData(messageRef, { idField: 'id' })
    return {data, status, error}
}