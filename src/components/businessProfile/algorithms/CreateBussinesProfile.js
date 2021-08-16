import { newProfilePhoto } from './newProfilePhoto'

export const CreateBussinesProfile = async (data, firestore, imageRecovered, storage, userFromDB) => {
    const batch = firestore.batch()
    const uid = userFromDB.uid
    const type = userFromDB.type
    const {name, businessDescription, companyAddress, companySector, facebook, instagram, linkedin, twitter, youtube, web } = data
    const createIdUserRef = await firestore.collection("users").doc(uid).collection("profileEnterprise").doc()
    const newRefDocUser = await createIdUserRef.get() 
    
    if(data){
        var resultOfImage = false
        if(imageRecovered){
            var resultOfImage = await newProfilePhoto(storage, newRefDocUser.id, imageRecovered)
        }
        
        batch.set(
            createIdUserRef,
            {
                name,
                businessDescription,
                companyAddress,
                web,
                socials: {
                    facebook,
                    instagram,
                    linkedin,
                    twitter,
                    youtube
                },
                email: userFromDB.email,
                uid: newRefDocUser.id,
                type: userFromDB.type,
                profileImage: resultOfImage? resultOfImage: "",
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
