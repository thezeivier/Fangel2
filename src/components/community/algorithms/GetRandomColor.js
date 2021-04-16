export const getColorDarkMode = () => {
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

export const getColorLightMode = () => {
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
