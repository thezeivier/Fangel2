import React from 'react';
import { CardContainer } from './styles/sCardScore'
import { ReactComponent as FaceAnnoyedSVG } from './icons/faceAnnoyed.svg'
import { ReactComponent as FaceHappySVG } from './icons/faceHappy.svg'
import { ReactComponent as FaceSadSVG} from './icons/faceSad.svg'
import { ReactComponent as FaceSceptic } from './icons/faceSceptic.svg'

const CardScore = ({ hability }) => {
  return (
    <li>
      <CardContainer id={hability}>
        <leyend>{hability}</leyend>
          <div>
            <label for={`faceAnnoyed-${hability}`} >
              <input type="radio" id={`faceAnnoyed-${hability}`} name={hability} value="annoyed" />
              <FaceAnnoyedSVG className="annoyed" />
            </label>
            <label for={`faceSad-${hability}`}>
              <input type="radio" id={`faceSad-${hability}`} name={hability} value="sad" />
              <FaceSadSVG className="sad" />
            </label>
            <label for={`faceSceptic-${hability}`}>
              <input type="radio" id={`faceSceptic-${hability}`} name={hability} value="sceptic" />
              <FaceSceptic className="sceptic" />
            </label>
            <label for={`faceHappy-${hability}`}>
              <input type="radio" id={`faceHappy-${hability}`} name={hability} value="happy" />
              <FaceHappySVG className="happy" />
            </label>
          </div>
      </CardContainer>
    </li>
  );
}

export default CardScore;
