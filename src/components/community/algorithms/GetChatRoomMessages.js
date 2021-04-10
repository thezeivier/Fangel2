import { useFirestore, useFirestoreCollectionData } from 'reactfire'

export const GetChatRoomMessages = () => {
    const firestore = useFirestore()
    let { room } = JSON.parse(localStorage.getItem('communityData'))
    const messageRef = firestore.collection('chatroom').doc(room).collection('messages').orderBy('createdAt')
    const {data, status, error} = useFirestoreCollectionData(messageRef, { idField: 'id' })
    return {data, status, error}
}
