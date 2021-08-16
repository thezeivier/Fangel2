import firebase from 'firebase/app'
import { VerifyIsBusinessProfile } from './VerifyIsBusinessProfile'

export const SendParticipants = async (firestore, userData, roomId, creatorUid) => {
    const batch = firestore.batch()
    const isBusinessAccount = await VerifyIsBusinessProfile(firestore, creatorUid)
    if(isBusinessAccount.profileType != "business_beta") {
        return null
    } else {
        batch.set(
            firestore.collection("communities").doc(roomId),
            {
                allUsersDataConnected: firebase.firestore.FieldValue.arrayUnion(userData)
            },
            {merge: true}
        )
        return await batch.commit()
    }
}