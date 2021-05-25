const functions = require("firebase-functions");
const admin = require("firebase-admin");
const db = admin.firestore();
exports.colorAndUsernameGenerator = functions.firestore.document("/users/{documentId}").onCreate((snap) =>{
  const data = snap.data()
  const hashtagNumber = Math.floor(Math.random() * 99999)
  const dark = getColorDarkMode()
  const light = getColorLightMode()
  const batch = db.batch();
  const uid = data.uid;

  try{
    userAndCodeGenerator(data, uid, hashtagNumber, batch, dark, light)
    return console.log("Primera ejecución")
  } catch{
    setTimeout(() =>{
      db
      .collection("users")
      .uid(uid)
      .get()
      .then(result => {
        data = result.data()
        userAndCodeGenerator(data, uid, hashtagNumber, batch, dark, light)
      })
    }, 4000)
  } 

});

const userAndCodeGenerator = (data, uid, hashtagNumber, batch, dark, light) => {
  const username = `${(data.name.firstName.split(" ")[0].concat(data.name.lastName.split(" ")[0])).toLowerCase()}#${hashtagNumber}`

  batch.set(
    db.collection("users").doc(uid),
    {
      username,
      colorsUser: { dark, light},
    },
    {merge: true}
  );

  batch.commit()
  .then(console.log("Generación de color y username exitosa"))
  .catch(error => console.error("Error al generar color y username", error));
}

const getColorDarkMode = () => {
  let letters = '0123456789ABCDEF'.split('')
  let color = '#'

  for (let i = 0; i < 3; i++ ) {
    if (i==2){
      let lastcolor = letters[Math.floor(Math.random() * 16)]

      if ( color.search(lastcolor) >= 0 ){
        color += letters[Math.floor(Math.random() * 16)]
        color += color[i + 3]
      } else{
        i--;
      }
    } else{
      color += letters[Math.floor(Math.random() * 16)]

      if (i == 0) color += color[i + 1]
      else color += color[ i + 2]
    }
  }
  
  return color;
}

const getColorLightMode = () => {
  let letters = '0123456789ABCDEF'.split('')
  let digits = ''
  let colorInitial = '000000'
  let color = '#'

  for (let i = 0; i < 2; i++) {
    digits += letters[Math.floor(Math.random() * 16)]
  }

  let randomNumber = Math.floor((Math.random() * (4 - 1 + 1)) + 1)
  let newColorInitial = colorInitial.slice(- randomNumber)
  newColorInitial += digits

  while (newColorInitial.length < 6) {
    newColorInitial += '0'
  }

  color += newColorInitial
  return color
}