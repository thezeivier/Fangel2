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
          <input type="radio" id="faceAnnoyed" name="scores" value="annoyed" />
          <FaceAnnoyedSVG />
        </label>
        <label for="faceSad">
          <input type="radio" id="faceSad" name="scores" value="sad" />
          <FaceSadSVG />
        </label>
        <label for="faceSceptic">
          <input type="radio" id="faceSceptic" name="scores" value="sceptic" />
          <FaceSceptic />
        </label>
        <label for="faceHappy">
          <input type="radio" id="faceHappy" name="scores" value="happy" />
          <FaceHappySVG />
        </label>
      </form>
    </CardContainer>
  );
}

export default CardScore;
