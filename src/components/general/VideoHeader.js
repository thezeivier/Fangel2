import React from 'react';
import ModalSettingsAdmin from './../../pages/inCommunity/ModalSettingsAdmin'
import { HeaderContainer, TitleCommunityStyled, ContainerSVG } from './styles/sVideoHeader'
import { ReactComponent as CommunitySVG } from './icons/community.svg'
import { ReactComponent as VideoSettingsSVG } from './icons/videoSettings.svg'
import { ReactComponent as CloseSVG } from './icons/close.svg'

const VideoHeader = ({ displayNoAdmin, isSettings, open, closeModal, modalIsOpen, closeModalSA }) => {
  return (
    <>
      <HeaderContainer>
        <CommunitySVG />
        <TitleCommunityStyled as="h3">Creando Fangel en 3 días</TitleCommunityStyled>
        <ContainerSVG display={displayNoAdmin} isSettings={isSettings}>
            <VideoSettingsSVG className="svgOnlyMobile" onClick={open} />
            <CloseSVG className="svgCloseOnlyMobile" onClick={closeModalSA} />
        </ContainerSVG>
      </HeaderContainer>
      <ModalSettingsAdmin modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </>
  );
}

export default VideoHeader;
