export const newProfilePhoto = (storage, profilePhoto, uid) => {
    let storageRef = storage.ref()
    let initialType = profilePhoto.type.substr(0, 5)
    if(profilePhoto && (initialType === "image" )){
        let imageRenamed = new File([profilePhoto], `profile_${uid}.jpeg`, {type: 'image/jpeg'})
        let routePath = `profiles/${imageRenamed.name}`
        let uploadTask  = storageRef.child(routePath).put(imageRenamed)
        uploadTask.on('state_changed', (result)=>{
            let progress = (result.bytesTransferred/result.totalBytes) * 100
            // console.log('Subido' + progress + '%')
        })
        uploadTask.then(async ()=>{
            // console.log("upload success")
            // window.location.reload()
        })
    }
}