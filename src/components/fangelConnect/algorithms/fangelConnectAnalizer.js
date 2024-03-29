export const fangelConnectAnalizer = async(firestore, userFromDB, fangelScore) =>{
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
            const spaceId = result.docs[0].data().spaceId //Id del documento (fangelConnect) al que se unirá el usuario
            if(result.docs[0].data().dataFromCreator.uid === userFromDB.uid){
                return spaceId
            }
            return await fangelConnectRef
            .doc(spaceId)
            .set(
                {
                    state: "closed",
                    joinnerPreferences: userFromDB.preferences,
                    dataFromJoinner: userFromDB
                },
                {merge: true}
            ).then(()=>{
                return spaceId
            })
        }else{//En caso contrario crear una espacio en espera
            return await fangelConnectCreator(firestore, userFromDB)
        }
    })
}

export const fangelConnectCreator = async(firestore, userFromDB) => {
    const spaceId = hashRoomGenerator();
    const fangelScore = userFromDB.score? userFromDB.score.fangelScore : 65
    return await firestore.collection("fangelConnect")
    .doc(spaceId)
    .set({
        fangelScoreFromCreator: fangelScore,
        state: "open",
        spaceId: spaceId,
        creatorPreferences: userFromDB.preferences,
        dataFromCreator: userFromDB
    }).then(()=>{
        return spaceId
    })
}

export const cancelFangelConnectRefactorized = async (firestore, userFromDB, existJoinner, existCreator, fangelConnectFromDB, idOfFangelConnect) =>{
    try {
        const fangelConnectRef = firestore.collection("fangelConnect")
        if(existJoinner && existCreator){
          if(existJoinner.uid === userFromDB.uid){ 
            //Si el joinner es el usuario que se saldrá, entoces borrará sus datos y actualizará el fangelScoreFromCreator a el del que se queda
    
            await fangelConnectRef.doc(idOfFangelConnect).set(
              {
                dataFromJoinner: firestore.app.firebase_.firestore.FieldValue.delete(),
                joinnerPreferences: firestore.app.firebase_.firestore.FieldValue.delete(),
                state: "open",
                fangelScoreFromCreator: existCreator.score? existCreator.score.fangelScore: 65,
              },
              {merge: true}
            )
          }else if(existCreator.uid === userFromDB.uid){
            //Si el creator es el usuario que se saldrá, entoces borrará sus datos y actualizará el fangelScoreFromCreator a el del que se queda
            await fangelConnectRef.doc(idOfFangelConnect).set(
              {
                dataFromCreator: existJoinner,
                creatorPreferences: fangelConnectFromDB.joinnerPreferences,
                state: "open",
                fangelScoreFromCreator:  existJoinner.score? existJoinner.score.fangelScore: 65,
                spaceId: idOfFangelConnect,
              }
            )
          }
        }else{
          fangelConnectRef.doc(idOfFangelConnect).delete()
        }
    }catch{
    throw console.log("Ya no existe")
    }
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