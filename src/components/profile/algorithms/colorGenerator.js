export const colorGenerator = () => {
    let hexadecimal = "0123456789ABCDEF"
    let color = "#"
  
    for(let i = 1; i <= 6; i++) {
      color = color + hexadecimal[Math.floor(Math.random() * 16)]
      
      if (color.length > 6) return color
    }
}
