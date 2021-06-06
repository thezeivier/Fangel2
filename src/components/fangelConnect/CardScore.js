import React from 'react';
import { ReactComponent as FaceAnnoyedSVG } from './icons/faceAnnoyed.svg'
import { ReactComponent as FaceHappySVG } from './icons/faceHappy.svg'
import { ReactComponent as FaceSadSVG} from './icons/faceSad.svg'
import { ReactComponent as FaceSceptic } from './icons/faceSceptic.svg'

const CardScore = ({ hability }) => {
  return (
    <li>
      <p>{hability}</p>
      <div>
        <FaceAnnoyedSVG />
        <FaceSadSVG />
        <FaceSceptic />
        <FaceHappySVG />
      </div>
    </li>
  );
}

export default CardScore;
