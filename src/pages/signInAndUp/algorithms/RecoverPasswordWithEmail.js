export const RecoverPasswordWithEmail = async (auth, email) => {
    return await auth.sendPasswordResetEmail(email)
    .then(() =>{
        // console.log("Correcto")
        return email
    }).catch((error) =>{
        // console.log(error)
        return false
    })
}