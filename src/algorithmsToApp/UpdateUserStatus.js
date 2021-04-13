export const UpdateUserStatus = async (firestore, uid) => {
    return await firestore
        .collection("users")
        .doc(uid)
        .update({
            online: true
        })
        .then(() => {
            console.info("User is Online")
            return true
        })
        .catch(err => {
            console.error(err)
        })
}