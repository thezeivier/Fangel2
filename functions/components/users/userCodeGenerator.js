const functions = require("firebase-functions");
const admin = require("firebase-admin");
const db = admin.firestore();
exports.userCodeGenerator = functions.firestore.document("/users/{documentId}").onCreate((snap) =>{
  if (snap.data().type === "admin") {
    const batch = db.batch();
    const uid = snap.data().uid;
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
        userCodesRef: db.doc(`userCodes/${code}`)
      },
      {merge: true}
    );
    batch.commit()
    .then(console.log("Generado de código exitoso"))
    .catch(error => console.error("Error al generar código", error));
  } else {
    return false;
  }
});

