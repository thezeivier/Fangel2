import React from 'react';
import { ReactComponent as CameraVideoDisableSVG } from './../community/icons/cameraVideoDisable.svg'
import { ReactComponent as MicrophoneDisableSVG } from './../community/icons/microphoneDisable.svg'
import { ReactComponent as BanUserSVG } from './icons/banUser.svg'
import { User, Container, VideoSvgsContainer } from './styles/sUserConnect'

const UserConnect = () => {
  return (
    <Container>
      <User>
        <img />
        <h6>Useryang</h6>
      </User>
      <VideoSvgsContainer>
        <CameraVideoDisableSVG className="cameraSVG" />
        <MicrophoneDisableSVG className="microphoneSVG" />
      </VideoSvgsContainer>
      <BanUserSVG className="banUserSVG" />
    </Container>
  );
}

export default UserConnect;
