export const VerifyIsBusinessProfile = async (firestore, idCreator) => {
    const isBusinessProfileQuery =  await firestore.collection('users').where("uid","==", idCreator).get()
    const resultIsBusinessProfile = await isBusinessProfileQuery.docs.map(doc => doc.data())[0]
    return resultIsBusinessProfile
}