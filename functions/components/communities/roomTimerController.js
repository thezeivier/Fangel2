const functions = require("firebase-functions");
const admin = require("firebase-admin");
const db = admin.firestore();
exports.roomTimerController = functions.firestore.document("activeCommunities/{documentId}")
.onWrite(async(change)=>{
  const document = change.after.exists? change.after.data() : null;
  const oldDocument = change.before.exists? change.before.data(): null;
  if(document){
    let duration = document.duration;
    let transcurred = document.transcurred;
    let route = document.route;
    let roomName = document.roomName
    let fileBucket = document.bucket;
    let oldTranscurred = oldDocument? oldDocument.transcurred : oldDocument;
    let uid = document.uid
    if(oldTranscurred !== transcurred){
      const batch = db.batch();
      var time = 470000
      if(transcurred < duration){
        let leftTime = duration - transcurred
        var addTime = 8
        if(leftTime < 8){
          time = leftTime * 60 * 1000
          addTime = Math.ceil(8 - leftTime)
        }
        setTimeout(()=>{
          batch.set(
            db.collection("activeCommunities").doc(uid),
            {
              transcurred: transcurred + addTime
            },
            {merge: true}
          )

          batch.commit();
        }, time) //476000 time
      }else{
        await admin.storage().bucket(fileBucket).file(route).delete(); //Delete community thumb.
        console.log("Thumbnail deleted");
        await db.collection("activeCommunities").doc(uid).delete();//Delete acitveCommunity document from firestore.
        console.log("activeCommunity deleted");
        await db.collection("chatroom").doc(roomName).delete();
        console.log("chatroom deleted");
        await db.collection("communities").doc(uid).delete();//Delete community document from firestore.
        console.log("Community deleted");
      }
    }else{
      return false
    }
  }else{
    return false
  }
});