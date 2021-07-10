import React from 'react'
import Jitsi from 'react-jitsi'
import VideoSpinner from '../spinner/VideoSpinner'
import { GetAdminCommunity } from '../../pages/inCommunity/algorithms/GetAdminCommunity'

const interfaceConfig = {
  LANG_DETECTION: false,
  lang: "es",
  APP_NAME: "fangel",
  CONNECTION_INDICATOR_DISABLED: true,
  DEFAULT_REMOTE_DISPLAY_NAME: 'Fangeller',
  DEFAULT_BACKGROUND: '#252525',
  DEFAULT_LOCAL_DISPLAY_NAME: '',
  DISABLE_PRESENCE_STATUS: true,
  DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
  HIDE_INVITE_MORE_HEADER: true,
  MOBILE_APP_PROMO: false,
  DISABLE_RINGING: true,
  ENABLE_DIAL_OUT: false,
  SHOW_CHROME_EXTENSION_BANNER: false,
  TOOLBAR_TIMEOUT: 2000,
  TOOLBAR_BUTTONS: [
    "microphone",
    "camera",
    "fullscreen",
    'desktop',
    "videoquality",
    "tileview",
    "mute-everyone",
    'mute-video-everyone',
    'raisehand',
    'sharedvideo',
    'select-background',
    'shortcuts'
  ],
};

const userToolBarButtons = [
  "microphone",
  "camera",
  "fullscreen",
  'desktop',
  "videoquality",
  "tileview",
  'raisehand',
  'sharedvideo',
  'select-background',
  'shortcuts',
]
const config = {
  defaultLanguage: "es",
  prejoinPageEnabled: false,
  enableWelcomePage: false,
  disableProfile: true,
  enableInsecureRoomNameWarning: false,
  disableDeepLinking: true,
  enableNoAudioDetection: true,
  enableNoisyMicDetection: true,
};

const VideoCall = ({dataUser, authState, communityDataRoom}) => {

  const isAdmin = communityDataRoom.creatorUid ? GetAdminCommunity(communityDataRoom.creatorUid, dataUser.uid) : false
  const handleAPI = JitsiMeetAPI => {
    JitsiMeetAPI.executeCommand("toggleVideo");
    JitsiMeetAPI.executeCommand('avatarUrl', dataUser.photoUrl? dataUser.photoUrl: null);
    JitsiMeetAPI.executeCommand('subject', communityDataRoom.privacy === "public"? "Espacio social público": "Espacio social privado");
  };
  
  const {TOOLBAR_BUTTONS, ...restConf} = interfaceConfig
  const interfaceUserConf = {...restConf, TOOLBAR_BUTTONS: userToolBarButtons}
  return (
    <>
      <Jitsi
        domain="meet.jit.si"
        onAPILoad={handleAPI}
        roomName={ !communityDataRoom.communityDataSubSpace ? communityDataRoom.roomName : `${communityDataRoom.communityData.roomName}${communityDataRoom.communityDataSubSpace.id}`}
        // roomName="7L2gEnvzAqYsQNVUdyvyhMbD1BW4gCXodDWczaufrbL2dNKFr73cOUMN5WuHuNtypmX8zjKpqNuV1DpNs7nuWXbgv3PSnBxiZ7uZiSfvGPc0ibI8smUAVvBaYsCiINJh"
        displayName={authState.displayName}
        // password={!communityDataRoom.communityDataSubSpace ? communityDataRoom.roomName : `fangel_${communityDataRoom.communityData.roomName}%&@&%${communityDataRoom.communityDataSubSpace.id}_fangel`}
        loadingComponent={VideoSpinner}
        interfaceConfig={isAdmin ? interfaceConfig : interfaceUserConf}
        config={config}
      />
    </>
  );
};

export default VideoCall