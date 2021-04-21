import firebase from 'firebase/app'
import { checkIfTheDocumentExist } from '../../../components/profile/algorithms/checkIfTheDocumentExist'

export const createDocInbox = async (idTransmitter, idReceiver, firestore, setActiveButton, history) => {
    try {
        setActiveButton(true)
        const createIdInbox = await firestore.collection('inbox').doc()
        const newRefDocInbox = await createIdInbox.get()
        
        const initialCollectionInbox = {
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            idInbox: newRefDocInbox.id,
            idReceiver,
            idTransmitter,
            ownersInbox: [idReceiver, idTransmitter]
        }

        // const updateCollectionInbox = {
        //     idReceiver,
        //     idTransmitter,
        // }
        console.log("myIdid", idTransmitter)
        const listOfInboxDocNormal =  await firestore.collection('inbox').where("idReceiver","==",idReceiver).where("idTransmitter","==", idTransmitter).get()
        const listOfInboxDocReverse =  await firestore.collection('inbox').where("idReceiver","==",idTransmitter).where("idTransmitter","==", idReceiver).get()
        const resultNormal = listOfInboxDocNormal.docs.map(doc => doc.id)
        const resultReverse = listOfInboxDocReverse.docs.map(doc => doc.id)
        const result = resultNormal.concat(resultReverse)
        const idInbox = result[0]
        if(idInbox) {
            // const existInbox = await checkIfTheDocumentExist(idInbox, firestore)
            return history.push(`/inbox/t/${idInbox}`)
        } else {
            console.info("Inbox Creado")
            await firestore.collection('inbox').doc(newRefDocInbox.id).set(initialCollectionInbox, {merge: true})
            return history.push(`/inbox/t/${newRefDocInbox.id}`)
        }
    } catch (err) {
        console.error("Error al crear el Inbox", err)
    }
}
