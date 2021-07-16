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
    const profileScore = profilePointsCounter(data) 
    const batch = firestore.batch();
    const usersRef = firestore.collection("users").doc(uid)
    const capilizedFirstName = capitalizeAllWords(firstname)
    const capilizedLastName = capitalizeAllWords(lastname)
    batch.set(
        usersRef,
        {
            score: {
                profileScore,
            },
            name: {
                firstName: capilizedFirstName,
                lastName: capilizedLastName,
            },
            profileData: {
                professionalDescription : professionalDescription.length !== 0 ? professionalDescription: null,
                aboutMe: aboutMe.length !== 0 ? aboutMe: null,
                facebook: {
                    profile: facebook.startsWith("https://www.facebook.com/") || facebook.startsWith("https://web.facebook.com/")? facebook: null,
                },
                instagram: {
                    profile: instagram.startsWith("https://www.instagram.com/")? instagram: null,
                },
                linkedin: {
                    profile: linkedin.startsWith("https://www.linkedin.com/in/")? linkedin: null,
                },
                twitter: {
                    profile: twitter.startsWith("https://www.twitter.com/") || twitter.startsWith("https://twitter.com/")? twitter: null,
                },
                youtube: {
                    profile: youtube.startsWith("https://www.youtube.com/channel")? youtube: null,
                }
            }
        },
        {merge: true}
    )
    return await batch.commit().then(()=>{
        window.location.reload()
    }).catch(error=>{
        // throw console.error(error)
    })
}


const capitalizeAllWords = (text) => {
    return text.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}


const profilePointsCounter = (data) => {
    const {firstname, lastname, professionalDescription, aboutMe, facebook, instagram, linkedin, twitter, youtube} = data
    var scoreFromProfile = 0
    if(firstname){
        scoreFromProfile += 5
    }
    if(lastname){
        if(lastname.includes(' ')){
            scoreFromProfile += 10
        }else{
            scoreFromProfile += 5
        }
    }
    if(professionalDescription){
        scoreFromProfile += Math.ceil(professionalDescription.length * 0.25)
    }
    if(aboutMe){
        scoreFromProfile += Math.ceil(aboutMe.split(' ').length * 0.5)
    }
    if(facebook.startsWith("https://www.facebook.com/") || facebook.startsWith("https://web.facebook.com/")){
        scoreFromProfile += 20
    }
    if(instagram.startsWith("https://www.instagram.com/")){
        scoreFromProfile += 30
    }
    if(linkedin.startsWith("https://www.linkedin.com/in/")){
        scoreFromProfile += 50
    }
    if(twitter.startsWith("https://www.twitter.com/") || twitter.startsWith("https://twitter.com/")){
        scoreFromProfile += 30
    }
    if(youtube.startsWith("https://www.youtube.com/channel")){
        scoreFromProfile += 100
    }

    return scoreFromProfile
}