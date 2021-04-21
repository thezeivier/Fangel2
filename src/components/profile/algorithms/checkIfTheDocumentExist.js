import firebase from 'firebase/app'

export const checkIfTheDocumentExist = async (idInbox, firestore) => {
    try {
        const setInbox = await firestore.collection('inbox').where("idInbox", "==", idInbox).get()
        return setInbox
    } catch (err) {
        console.error("Error :", err)
    }
}