export const newProfilePhoto = async (storage, uid, profilePhoto) => {
    let storageRef = storage.ref()
    let initialType = profilePhoto.type.substr(0, 5)
    if(profilePhoto && (initialType === "image" )){
        let imageRenamed = new File([profilePhoto], `profile_enteprise_${uid}.jpeg`, {type: 'image/jpeg'})
        let routePath = `profiles/enterprise/${imageRenamed.name}`
        let uploadTask  = storageRef.child(routePath).put(imageRenamed)
        uploadTask.on('state_changed', console.log, console.error, (snapshot) =>{
            
        })
        return await uploadTask.then(async (result) => {
            if(result.state === 'success') {
                let storageNewRef = storage.ref()
                return await storageNewRef.child(result.metadata.fullPath)
                .getDownloadURL()
                .then(url => {
                    return {bucket: result.metadata.bucket, route: result.metadata.fullPath , url}
                })
            }
        })
    }
}