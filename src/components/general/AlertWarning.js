import React from 'react';
import { AlertContainer } from './styles/sAlertWarning'

import { ReactComponent as WarningSVG } from './../community/icons/warning.svg'
import { ReactComponent as CloseSVG } from './icons/close.svg'


const AlertWarning = ({ closeModal }) => {
  return (
    <AlertContainer>
      <WarningSVG onClick={closeModal} />
      <div className="alertDescriptionContainer">
        <p>Quedan 5 minutos para que se cierre tu comunidad</p>
        <a>Extender una hora más</a>
      </div>
      <CloseSVG className="closeAlertWarning" />
    </AlertContainer>
  );
}

export default AlertWarning;
