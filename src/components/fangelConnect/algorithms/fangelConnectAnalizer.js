export const fangelConnectAnalizer = async(firestore, userFromDB) =>{
    const fangelScore = userFromDB.score? userFromDB.score.fangelScore : 65
    const fangelConnectRef = firestore.collection("fangelConnect")
    return await fangelConnectRef
    .where("fangelScoreFromCreator", "<=", fangelScore + 30) //Consulta para emparejar con el más cercano, modificar aquí si es premium.
    .where("state", "==", "open")
    .where("creatorPreferences", "array-contains-any", userFromDB.preferences)
    .orderBy("fangelScoreFromCreator", "desc")
    .limit(1)
    .get()
    .then(async result =>{
        if(!result.empty){ //Si hay espacios en espera, entonces traer las 5 mejores opciones
            const docName = result.docs[0].data().docName //Id del documento (fangelConnect) al que se unirá el usuario
            return await fangelConnectRef
            .doc(docName)
            .set(
                {
                    state: "closed",
                    joinnerPreferences: userFromDB.preferences,
                    dataFromJoinner: userFromDB
                },
                {merge: true}
            ).then(()=>{
                return docName
            })
        }else{//En caso contrario crear una espacio en espera
            const spaceId = hashRoomGenerator();
            return await fangelConnectRef
            .doc(userFromDB.uid)
            .set({
                fangelScoreFromCreator: fangelScore,
                state: "open",
                socialSpaceId: spaceId,
                docName: userFromDB.uid,
                creatorPreferences: userFromDB.preferences,
                dataFromCreator: userFromDB
            }).then(()=>{
                return userFromDB.uid
            })
        }
    })
}

const hashRoomGenerator  = () => { //Generador de ids de espacios para fangelConnect
    const model = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let code = "";
    while (code.length < 15) {
        if(code.length === 5 || code.length === 9){
            code = code.concat("-");
        }else{
            code = code.concat(model.charAt(Math.round(Math.random()*model.length)));
        }
    }
    return code;
  }