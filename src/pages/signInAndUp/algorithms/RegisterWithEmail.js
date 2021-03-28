export const RegisterWithEmail = async (data, auth) => {
  const {username, password, email, code} = data
  auth
  .createUserWithEmailAndPassword(email, password)
  .then(result => {
    console.log(result.user)
    
    result.user.updateProfile({
      displayName: `${username}`
    })
    result.user.sendEmailVerification()
    .then(()=>{
      auth.signOut()
      return(true)
    })
  })
}