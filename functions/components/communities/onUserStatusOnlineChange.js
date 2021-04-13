const functions = require('firebase-functions')
const admin = require('firebase-admin')

const firestore = admin.firestore()

exports.onUserStatusOnlineChange = functions.database
    .ref(`/users/o0dUmKl2NYPPGvzHPl7ORFbdNho1`)
    .onUpdate(snapshot => {
        // const userRef = firestore.collection('users')
        const userData = snapshot._data.online
        console.log(userData)
        return true
        // return event.data.ref.once('value')
        //     .then(snap => snap.val())
        //     .then(statusOnline => {
        //         console.log(statusOnline)
        //     })

    })