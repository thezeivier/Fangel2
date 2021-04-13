export const SetUserOnlineState = (uid, database) => {
    const ref = database.ref(`users/${uid}`)
    ref.set({online: true, uid})
    console.log('document created')
}