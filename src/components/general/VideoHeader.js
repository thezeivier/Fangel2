import React from 'react';
import ButtonLeaveCom from './ButtonLeaveCom'
import ModalSettingsAdmin from './../../pages/inCommunity/ModalSettingsAdmin'
import { HeaderContainer, TitleCommunityStyled, ContainerSVG, OnlyUsersContainer } from './styles/sVideoHeader'
import { ReactComponent as CommunitySVG } from './icons/community.svg'
import { ReactComponent as VideoSettingsSVG } from './icons/videoSettings.svg'
import { ReactComponent as CloseSVG } from './icons/close.svg'

const VideoHeader = ({ displayNoAdmin, isSettings, modalIsOpen, communityData, closeModal, closeModalSA, onlyUsers, communityDataSubSpace, isSubSpace }) => {
  return (
    <>
      <HeaderContainer>
        <CommunitySVG />
        <TitleCommunityStyled as="h3">{!isSubSpace ? communityData.title : communityDataSubSpace.nameOfSpace}</TitleCommunityStyled>
        <OnlyUsersContainer onlyUsers={onlyUsers}>
          <ButtonLeaveCom className="buttonOnlyMobile"/>
        </OnlyUsersContainer>
        <ContainerSVG display={displayNoAdmin} isSettings={isSettings} communityData={communityData}>
          <div className="svgOnlyMobile">
            <ButtonLeaveCom className="buttonOnlyMobile"/>
          </div>
          <CloseSVG className="svgCloseOnlyMobile" onClick={closeModalSA} />
        </ContainerSVG>
      </HeaderContainer>
      <ModalSettingsAdmin communityData={communityData} modalIsOpen={modalIsOpen} isSubSpace={isSubSpace} closeModal={closeModal} communityDataSubSpace={communityDataSubSpace}/>
    </>
  );
}

export default VideoHeader;
