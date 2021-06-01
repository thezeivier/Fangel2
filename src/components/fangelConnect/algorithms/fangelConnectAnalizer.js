export const fangelConnectAnalizer = (firestore, userFromDB) =>{
    const fangelScore = userFromDB.score? userFromDB.score.fangelScore : 65
    const fangelConnectRef = firestore.collection("fangelConnect")
    return fangelConnectRef
    .where("fangelScoreFromCreator", "<=", fangelScore + 30) //Consulta para emparejar con el más cercano, modificar aquí si es premium.
    .where("state", "==", "open")
    .orderBy("fangelScoreFromCreator", "desc")
    .limit(1)
    .get()
    .then(result =>{
        if(!result.empty){ //Si hay espacios en espera, entonces traer las 5 mejores opciones
            const docName = result.docs[0].data().docName
            return fangelConnectRef
            .doc(docName)
            .set({
                state: "closed",
            },
            {merge: true}
            ).then(()=>{
                return "connected"
            })
        }else{//En caso contrario crear una espacio en espera
            const spaceId = hashRoomGenerator();
            return fangelConnectRef
            .doc(userFromDB.uid)
            .set({
                fangelScoreFromCreator: fangelScore,
                state: "open",
                socialSpaceId: spaceId,
                dataFromCreator: userFromDB
            }).then(()=>{
                return "wait"
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