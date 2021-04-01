export const RecoverUser = async(firestore, uid) => {
  return await firestore
  .collection("users")
  .doc(uid)
  .get()
  .then(user => {
    return user.data()
  })
}