const functions = require("firebase-functions");
const admin = require("firebase-admin");
const db = admin.firestore();
exports.userCodeGenerator = functions.firestore.document("/users/{documentId}").onCreate((snap) =>{
  const data = snap.data()
  const hashtagNumber = Math.floor(Math.random() * 99999)
  const username = `${(data.name.firstName.split(" ")[0].concat(data.name.lastName.split(" ")[0])).toLowerCase()}#${hashtagNumber}`

  if (data.type === "admin") {
    const batch = db.batch();
    const uid = data.uid;
    const model = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let code = "";
    while (code.length < 12) {
      code = code.concat(model.charAt(Math.round(Math.random()*model.length)));
    }
    batch.set(
        db.collection("userCodes").doc(code),
        {
          code,
          uid,
          users: [],
        }
    );
    batch.set(
      db.collection("users").doc(uid),
      {
        userCodesRef: db.doc(`userCodes/${code}`),
        username,
      },
      {merge: true}
    );
  } else if(data.type === "user") {
    batch.set(
      db.collection("users").doc(uid),
      {
        username,
      },
      {merge: true}
    );
  }else{
    return false
  }

  batch.commit()
  .then(console.log("Generado de código exitoso"))
  .catch(error => console.error("Error al generar código", error));
});

