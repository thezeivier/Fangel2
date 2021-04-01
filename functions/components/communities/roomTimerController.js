const functions = require("firebase-functions");
const admin = require("firebase-admin");
exports.roomTimeController = functions.firestore.document("communities/{documentId}").onWrite((change)=>{
  const document = change.after.exists ? change.after.data() : null;
  const oldDocument = change.before.data();
  if(document){
    let duration = document.duration;
    let transcurred = document.transcurred;
    let oldTranscurred = oldDocument.transcurred;
    let uid = document.after.data().uid
    if(oldTranscurred !== transcurred){
      const db = admin.firestore();
      const batch = db.batch();
      var time = 479700
      if(transcurred < duration){
        let leftTime = duration - transcurred
        var addTime = 8
        if(leftTime < 8){
          time = leftTime * 60 * 1000
          addTime = Math.ceil(8 - leftTime)
        }
        setTimeout(()=>{
          batch.set(
            db.collection("communities").doc(uid),
            {
              transcurred: transcurred + addTime
            },
            {merge: true}
          )
        }, time) //479700 time
      }else{
        db.collection("communities").doc(uid).delete()
      }
    }else{
      return false
    }
  }else{
    return false
  }
});