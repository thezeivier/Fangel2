export const createAdminCodes = (firestore, firebase) => {
  const model = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let code = "admin";
  while (code.length < 12) {
    code = code.concat(model.charAt(Math.round(Math.random()*model.length)));
  }
  try{
    firestore
    .collection("adminCodes")
    .doc("listOfCodes")
    .update({ 
        disponibleCodes: firebase.firebase_.firestore.FieldValue.arrayUnion(code),
    })
    return code
  }catch{
    createAdminCodes(firestore, firebase)
  }
}