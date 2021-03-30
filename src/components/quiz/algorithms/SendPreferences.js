export const sendPreferences = async (id, firestore, dataCategory, redirect) => {
    const refUser = await firestore.collection("users").doc(id)
    return refUser.update({
      preferences: dataCategory
    })
    .then(() => {
      console.log("Document successfully created")
      redirect()
    })
    .catch(error => {
      console.error("Error updating document", error)
    })
  }