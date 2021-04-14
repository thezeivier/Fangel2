const functions = require('firebase-functions')
const admin = require('firebase-admin')

const firestore = admin.firestore()

/*  [Update] : update the user online state in firestore if the online state change to offline in RTDB */
exports.onUserStatusOnlineChange = functions.database
    .ref(`/users/{userId}`)
    .onUpdate(snapshot => {
        const userRef = firestore.collection('users')
        return  snapshot.after.ref.once('value')
                .then(snap => snap.val())
                .then(statusOnline => {
                    console.log("My data: ", statusOnline)
                    if(!statusOnline.online) {
                        userRef.doc(statusOnline.uid)
                        .update({
                            online: false, 
                            lastActive: Date.now()
                        }, {merge: true})
                    }
                })
                .catch(error => {
                    console.error(error)
                })
    })