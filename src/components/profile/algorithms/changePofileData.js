export const changePofileData = async (uid, firestore, data, firebase) => {
    try {
        await updateDisplayName(data, firebase)
        await sendProfileData(uid, firestore, data)
    }catch(error){
        // await sendProfileData(uid, firestore, data)
        throw console.error(error)
    }
}

const updateDisplayName = async (data, firebase) => {
    const {firstname, lastname} = data
    const user = firebase.auth().currentUser;
    const actualDisplayName = user.displayName
    const name = capitalizeAllWords(`${firstname.split(" ")[0]} ${lastname.split(" ")[0]}`)
    if(name && (actualDisplayName !== name)){
        await user.updateProfile({
        displayName: name,
        // photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
        // Update successful
        // ...
        }).catch((error) => {
        // An error occurred
        // ...
        });  
    }
}


const sendProfileData = async (uid, firestore, data) => {
    const {firstname, lastname, professionalDescription, aboutMe, facebook, instagram, linkedin, twitter, youtube} = data
    const batch = firestore.batch();
    const usersRef = firestore.collection("users").doc(uid)
    const capilizedFirstName = capitalizeAllWords(firstname)
    const capilizedLastName = capitalizeAllWords(lastname)
    batch.set(
        usersRef,
        {
            name: {
                firstName: capilizedFirstName,
                lastName: capilizedLastName,
            },
            profileData: {
                professionalDescription : professionalDescription.length !== 0 ? professionalDescription: null,
                aboutMe: aboutMe.length !== 0 ? aboutMe: null,
                facebook: {
                    profile: facebook.length !== 0? facebook: null,
                },
                instagram: {
                    profile: instagram.length !== 0? instagram: null,
                },
                linkedin: {
                    profile: linkedin.length !== 0? linkedin: null,
                },
                twitter: {
                    profile: twitter.length !== 0? twitter: null,
                },
                youtube: {
                    profile: youtube.length !== 0? youtube: null,
                }
            }
        },
        {merge: true}
    )
    return await batch.commit().then().catch(error=>{
        // throw console.error(error)
    })
}


const capitalizeAllWords = (text) => {
    return text.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}