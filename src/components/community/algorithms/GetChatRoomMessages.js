import { useFirestore, useFirestoreCollectionData } from 'reactfire'

export const GetChatRoomMessages = (room) => {
    const firestore = useFirestore()
    const messageRef = firestore.collection('chatroom').doc(room).collection('messages').orderBy('createdAt')
    const {data, status, error} = useFirestoreCollectionData(messageRef, { idField: 'id' })
    return {data, status, error}
}
