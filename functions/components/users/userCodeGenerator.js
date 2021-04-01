const functions = require("firebase-functions");
const admin = require("firebase-admin");
exports.userCodeGenerator = functions.firestore.document("/users/{documentId}").onCreate((snap) =>{
  if (snap.data().type === "admin") {
    const db = admin.firestore();
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
        codeRef: db.doc(`userCodes/${code}`)
      },
      {merge: true}
    );
    batch.commit();
  } else {
    return false;
  }
});

