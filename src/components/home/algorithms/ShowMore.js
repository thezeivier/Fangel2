export const ShowMore = (cardRef, textRef, buttonRef) => {
    if (cardRef.current) {
      if (cardRef.current.clientHeight < 530) {
        if (textRef.current.innerText.length > 65) {
          textRef.current.classList.add('showMore')
        }
      } else if(cardRef.current.clientHeight < 547) {
        if (textRef.current.innerText.length > 155) {
          textRef.current.classList.add('showMore')
        }
      }
    } 
    if (textRef.current) {
      if (textRef.current.innerText.length > 81) {
        textRef.current.classList.add('showMore')
      } else {
        buttonRef.current.classList.add('buttonNotMargin')
      }
    }
  }