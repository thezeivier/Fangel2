import React from 'react';
import { CardContainer } from './styles/sCardScore'
import { ReactComponent as FaceAnnoyedSVG } from './icons/faceAnnoyed.svg'
import { ReactComponent as FaceHappySVG } from './icons/faceHappy.svg'
import { ReactComponent as FaceSadSVG} from './icons/faceSad.svg'
import { ReactComponent as FaceSceptic } from './icons/faceSceptic.svg'

const CardScore = ({ hability, scores, setScores }) => {

  const changeScore = async (value)=>{
    const localScores = await scores
    switch(hability){
      case "Tolerancia":
        localScores.tolerance = value
        await setScores(localScores)
        break;
      case "Empatía":
        localScores.empathy = value
        await setScores(localScores)
        break;
      case "Entusiasmo":
        localScores.enthusiasm = value
        await setScores(localScores)
        break;
      case "Comunicación":
        localScores.communication = value
        await setScores(localScores)
        break;
      case "Respeto":
        localScores.respect = value
        await setScores(localScores)
        break;
      default:
        console.log("Caso no listado");
    }
  } 

  return (
    <li>
      <CardContainer id={hability}>
        <leyend>{hability}</leyend>
          <div>
            <label htmlFor={`faceAnnoyed-${hability}`} >
              <input type="radio" id={`faceAnnoyed-${hability}`} name={hability} value="annoyed" />
              <FaceAnnoyedSVG onClick={()=>changeScore(1)} className="annoyed" />
            </label>
            <label htmlFor={`faceSad-${hability}`}>
              <input type="radio" id={`faceSad-${hability}`} name={hability} value="sad" />
              <FaceSadSVG onClick={()=>changeScore(2)} className="sad" />
            </label>
            <label htmlFor={`faceSceptic-${hability}`}>
              <input type="radio" id={`faceSceptic-${hability}`} name={hability} value="sceptic" />
              <FaceSceptic onClick={()=>changeScore(3)} className="sceptic" />
            </label>
            <label htmlFor={`faceHappy-${hability}`}>
              <input type="radio" id={`faceHappy-${hability}`} name={hability} value="happy" />
              <FaceHappySVG onClick={()=>changeScore(4)} className="happy" />
            </label>
          </div>
      </CardContainer>
    </li>
  );
}

export default CardScore;
