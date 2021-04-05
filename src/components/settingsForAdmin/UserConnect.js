import React from 'react';
import useHover from './../../hook/use-hover'
import { ReactComponent as CameraVideoDisableSVG } from './../community/icons/cameraVideoDisable.svg'
import { ReactComponent as MicrophoneDisableSVG } from './../community/icons/microphoneDisable.svg'
import { ReactComponent as BanUserSVG } from './icons/banUser.svg'
import { User, Container, VideoSvgsContainer, CommentStyled } from './styles/sUserConnect'

const UserConnect = () => {
  const [hoverRef, isHovered] = useHover();

  return (
    <Container>
      <User>
        <img alt="foto de perfil" />
        <h6>Useryang</h6>
      </User>
      <VideoSvgsContainer>
        <CameraVideoDisableSVG className="cameraSVG" />
        <MicrophoneDisableSVG className="microphoneSVG" />
      </VideoSvgsContainer>
      <div className="containerBanUserSVG" ref={hoverRef}>
        <BanUserSVG className="banUserSVG" />
        {isHovered
          ? <CommentStyled>Sacar de la sala al usuario</CommentStyled>
          : <></>
        }
      </div>
    </Container>
  );
}

export default UserConnect;
