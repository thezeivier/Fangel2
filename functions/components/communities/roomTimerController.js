const functions = require("firebase-functions");
const admin = require("firebase-admin");
const db = admin.firestore();
exports.roomTimerController = functions.firestore.document("communities/{documentId}")
.onWrite((change)=>{
  const document = change.after.exists? change.after.data() : null;
  const oldDocument = change.before.exists? change.before.data(): null;
  if(document){
    let duration = document.duration;
    let transcurred = document.transcurred;
    let oldTranscurred = oldDocument? oldDocument.transcurred : oldDocument;
    let uid = document.uid
    if(oldTranscurred !== transcurred){
      const batch = db.batch();
      var time = 476000
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

          batch.commit();
        }, time) //476000 time
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