const functions = require('firebase-functions');
const admin = require('firebase-admin');
const db = admin.firestore();
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
  //Exit if the image is from report.
  if (fileName.startsWith('report_')) {
    return console.log('This is a repot image.');
  }

  // [END stopConditions]
  var uid = fileName.substr(0, 28);//Recover uid from file name
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
  await spawn('convert', [tempFilePath, '-thumbnail', '400x400>', tempFilePath]);
  console.log('Thumbnail created at', tempFilePath);
  // We add a 'thumb_' prefix to thumbnails file name. That's where we'll upload the thumbnail.
  const thumbFileName = `thumb_${fileName}`;
  const newThumbFilePath = path.join(newFilePath, thumbFileName); //New destination for thumb.
  // Uploading the thumbnail.
  await bucket.upload(tempFilePath, {
    destination: newThumbFilePath,
    metadata: metadata,
  });

  //Object repeated.
  const routAndBucket = {
    route: newThumbFilePath,
    bucket: fileBucket,
  }

  //Send information from thumb to communities.
  const batch = db.batch();
  if(fileName.startsWith('profile_')){
    //Information from profile
    uid = fileName.substr(8, 28)
    batch.set(
      db.collection("users").doc(uid),
      routAndBucket,
      {merge: true}
    )
  }else{
    //Information from communities
    batch.set(
      db.collection("communities").doc(uid),
      routAndBucket,
      {merge: true}
    )
    
    batch.set(
      db.collection("activeCommunities").doc(uid),
      routAndBucket,
      {merge: true}
    )
  }

  batch.commit();//Sending information to firestore.

  await bucket.file(filePath).delete(); //Delete image from beforeEvaluation folder.
  console.log("Residual file delete")
  
  // Delete temp file.
  return fs.unlinkSync(tempFilePath);
  // [END imageModifier]
});