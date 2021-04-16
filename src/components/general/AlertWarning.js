import React from 'react';
import { AlertContainer } from './styles/sAlertWarning'

import { ReactComponent as WarningSVG } from './../community/icons/warning.svg'
import { ReactComponent as CloseSVG } from './icons/close.svg'


const AlertWarning = ({ closeModal, extendTime }) => {
  return (
    <AlertContainer>
      <WarningSVG/>
      <div className="alertDescriptionContainer">
        <p>Quedan menos de 10 min. para que se cierre tu comunidad</p>
        <a onClick={extendTime}>Extender una hora más</a>
      </div>
      <CloseSVG onClick={closeModal} className="closeAlertWarning" />
    </AlertContainer>
  );
}

export default AlertWarning;
