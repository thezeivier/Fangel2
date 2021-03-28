export const RegisterWithEmail = async (data, auth) => {
  const {username, password, email, code} = data 
  let value = await auth
  .createUserWithEmailAndPassword(email, password)
  .then(result => {    
    result.user.updateProfile({
      displayName: `${username}`
    })
    result.user
    .sendEmailVerification()
    .then(()=>{
      auth.signOut()
    }).catch(error=>{
      console.log(error)
    })
    return true
  }).catch(error=>{
    console.log(error)
    return false
  })
  return value
}
const validationCode = (code, firestore) => {
  
}