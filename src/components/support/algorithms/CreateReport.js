export const CreateReport = async (data, firestore, imageRecovered, storage, userFromDB) => {
    const batch = firestore.batch()
    const uid = userFromDB.uid
    const type = userFromDB.type
    const reportRef = firestore.collection("reports").doc(uid)
    if(data.reportDescription){
        var resultOfImage = false
        if(imageRecovered){
            var resultOfImage = await reportImageSender(storage, uid, imageRecovered, type)
        }
        batch.set(
            reportRef,
            {
                email: userFromDB.email,
                message: data.reportDescription,
                uid,
                user: userFromDB.username,
                type: userFromDB.type,
                capture: resultOfImage? resultOfImage: "",
            },
            {merge: true}
        )
        return await batch.commit()
        .then(() =>{
            return true
        }).catch(()=>{
            return false
        })
    }else{
        return false
    }
}

const reportImageSender = async (storage, uid, reportImage, type) => {
    let storageRef = storage.ref()
    let nameOfImage = `report_${uid.concat(new Date().getTime())}`
    let imageRenamed = new File([reportImage], `${nameOfImage}.jpeg`, {type: 'image/jpeg'})
    let initialType = reportImage.type.substr(0, 5)
    if(reportImage && (initialType === "image" )){
        let routePath = `reports/${type}/${imageRenamed.name}`
        let uploadTask  = storageRef.child(routePath).put(imageRenamed)
        uploadTask.on('state_changed', (snapshot)=>{
        let progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100
        // console.log('Subido' + progress + '%')
        })
        return await uploadTask.then(async (result)=>{
            if(result.state === 'success'){
                let storageNewRef = storage.ref()
                return await storageNewRef.child(result.metadata.fullPath)
                .getDownloadURL()
                .then((url)=>{
                    return url
                })
            }
        })
    }else{
        return false
    }
}