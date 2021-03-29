export const LoginWithEmail = async (data, auth) =>{
  const {email, password} = data
  let confirmToLogin = await auth
  .signInWithEmailAndPassword(email, password)
  .then(result=>{
    console.log(result)
    if(!result.user.emailVerified){
      result.user
      .sendEmailVerification()
      .then(()=>{
        auth.signOut()
      }).catch(error=>{
        console.log(error)
      })
    }
    return {verified: result.user.emailVerified, username: result.user.displayName, email, uid: result.user.uid}
  }).catch(error=>{
    console.error(error)
    return false
  })
  return confirmToLogin
}