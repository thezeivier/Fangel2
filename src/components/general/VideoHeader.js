import React from 'react';
import { ReactComponent as CommunitySVG } from './icons/community.svg'
import { ReactComponent as VideoSettingsSVG } from './icons/videoSettings.svg'
import { HeaderContainer, TitleCommunityStyled } from './styles/sVideoHeader'

const VideoHeader = () => {
  return (
    <HeaderContainer>
      <CommunitySVG />
      <TitleCommunityStyled as="h3">Creando Fangel desde el inicio del inicio</TitleCommunityStyled>
      <VideoSettingsSVG className="svgOnlyMobile" />
    </HeaderContainer>
  );
}

export default VideoHeader;
