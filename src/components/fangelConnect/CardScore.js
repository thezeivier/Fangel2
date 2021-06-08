import React from 'react';
import { CardContainer } from './styles/sCardScore'
import { ReactComponent as FaceAnnoyedSVG } from './icons/faceAnnoyed.svg'
import { ReactComponent as FaceHappySVG } from './icons/faceHappy.svg'
import { ReactComponent as FaceSadSVG} from './icons/faceSad.svg'
import { ReactComponent as FaceSceptic } from './icons/faceSceptic.svg'

const CardScore = ({ hability }) => {
  return (
    <CardContainer>
      <p>{hability}</p>
      <form>
        <label htmlFor="faceAnnoyed">
          <input type="radio" id="faceAnnoyed" name={hability} value="annoyed" />
          <FaceAnnoyedSVG onClick={()=>{console.log(`${hability} faceAnnoyed`)}} className="annoyed" />
        </label>
        <label htmlFor="faceSad">
          <input type="radio" id="faceSad" name={hability} value="sad" />
          <FaceSadSVG onClick={()=>{console.log(`${hability} faceSad`)}} className="sad" />
        </label>
        <label htmlFor="faceSceptic">
          <input type="radio" id="faceSceptic" name={hability} value="sceptic" />
          <FaceSceptic onClick={()=>{console.log(`${hability} faceSceptic`)}} className="sceptic" />
        </label>
        <label htmlFor="faceHappy">
          <input type="radio" id="faceHappy" name={hability} value="happy" />
          <FaceHappySVG onClick={()=>{console.log(`${hability} faceHappy`)}} className="happy" />
        </label>
      </form>
    </CardContainer>
  );
}

export default CardScore;
