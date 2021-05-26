const firebase_tools = require("firebase-tools");
const functions = require("firebase-functions");

exports.deleteSocialSpaces = functions
  .runWith({
    timeoutSeconds: 540,
    memory: '2GB'
  })
  .https.onCall(async (data, context) => {
    // Only allow admin users to execute this function.
    
    if (!(data.creatorUid === context.auth.uid)) {
      throw new functions.https.HttpsError(
        'permission-denied',
        'Must be an administrative user to initiate delete.'
      );
    }

    const spacePath = data.path.space;
    const chatRoomPath = data.path.chatRoom;

    // Run a recursive delete on the given document or collection path.
    await firebase_tools.firestore
      .delete(spacePath, {
        project: process.env.GCLOUD_PROJECT,
        recursive: true,
        yes: true,
      });

    await firebase_tools.firestore
    .delete(chatRoomPath, {
      project: process.env.GCLOUD_PROJECT,
      recursive: true,
      yes: true,
    });

    return {
      chatRoomPath,
      spacePath
    };
  });