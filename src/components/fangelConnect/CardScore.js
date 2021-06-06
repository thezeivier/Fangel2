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
        <label for="faceAnnoyed">
          <input type="radio" id="faceAnnoyed" name={hability} value="annoyed" />
          <FaceAnnoyedSVG className="annoyed" />
        </label>
        <label for="faceSad">
          <input type="radio" id="faceSad" name={hability} value="sad" />
          <FaceSadSVG className="sad" />
        </label>
        <label for="faceSceptic">
          <input type="radio" id="faceSceptic" name={hability} value="sceptic" />
          <FaceSceptic className="sceptic" />
        </label>
        <label for="faceHappy">
          <input type="radio" id="faceHappy" name={hability} value="happy" />
          <FaceHappySVG className="happy" />
        </label>
      </form>
    </CardContainer>
  );
}

export default CardScore;
