import { useFirestore, useFirestoreCollectionData } from 'reactfire'

export const GetChatRoomMessages = () => {
    const firestore = useFirestore()
    const messageRef = firestore.collection('chatroom').doc('o0dUmKl2NYPPGvzHPl7ORFbdNho1').collection('messages').orderBy('createdAt')
    const {data, status, error} = useFirestoreCollectionData(messageRef, { idField: 'id' })
    return {data, status, error}
}
