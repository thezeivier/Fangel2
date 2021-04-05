const functions = require('firebase-functions');
const admin = require('firebase-admin');
const db = admin.firestore();
const storage = admin.storage();
const spawn = require('child-process-promise').spawn;
const path = require('path');
const os = require('os');
const fs = require('fs');
// [END import]

// [START imageModifier]
exports.imageModifier = functions.storage.object().onFinalize(async (object) => {
// [END imageModifier]
  // [START eventAttributes]
  const fileBucket = object.bucket; // The Storage bucket that contains the file.
  const filePath = object.name; // File path in the bucket.
  const contentType = object.contentType; // File content type.
  // [END eventAttributes]

  // [START stopConditions]
  // Exit if this is triggered on a file that is not an image.
  if (!contentType.startsWith('image/')) {
    return console.log('This is not an image.');
  }

  // Get the file name.
  const fileName = path.basename(filePath);
  // Exit if the image is already a thumbnail.
  if (fileName.startsWith('thumb_')) {
    return console.log('Already a Thumbnail.');
  }
  // [END stopConditions]
  const uid = fileName.substr(0, 28);//Recover uid from file name
  
  // [START thumbnailGeneration]
  // Download file from bucket.
  const bucket = admin.storage().bucket(fileBucket);
  const tempFilePath = path.join(os.tmpdir(), fileName);
  // Create new file path after test
  const newFilePath = path.dirname(filePath).replace('beforeEvaluation', 'afterEvaluation');
  const metadata = {
    contentType: contentType,
  };
  await bucket.file(filePath).download({destination: tempFilePath});
  console.log('Image downloaded locally to', tempFilePath);
  // Generate a thumbnail using ImageMagick.
  await spawn('convert', [tempFilePath, '-thumbnail', '400>x400', tempFilePath]);
  console.log('Thumbnail created at', tempFilePath);
  // We add a 'thumb_' prefix to thumbnails file name. That's where we'll upload the thumbnail.
  const thumbFileName = `thumb_${fileName}`;
  const newThumbFilePath = path.join(newFilePath, thumbFileName); //New destination for thumb.
  const lastFilePath = path.join(path.dirname(filePath), fileName)
  // Uploading the thumbnail.
  await bucket.upload(tempFilePath, {
    destination: newThumbFilePath,
    metadata: metadata,
  });

  //Send information from thumb to communities.
  const batch = db.batch();
  batch.set(
    db.collection("communities").doc(uid),
    {
      route: newThumbFilePath,
    },
    {merge: true}
  )
  batch.commit();//Sending information to firestore.


  //The problem is here. Help me please Khevin.
  console.log("Este es el storage", storage)
  const storageRef = storage.ref();
  const removeImageRef = storageRef.child(lastFilePath); //Create a reference of the image to delete.
  console.log("Ruta a borrar", lastFilePath)
  removeImageRef.delete()//Delete image from beforeEvaluation folder.
  .then(()=>{
    console.log("se borró")
  }).catch((error)=>{
    console.error("Este es mi error", error)
  })
  
  // Delete temp file.
  return fs.unlinkSync(tempFilePath);
  // [END thumbnailGeneration]
});