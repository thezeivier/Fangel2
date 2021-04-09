import React from 'react'
import Jitsi from 'react-jitsi'
import spinner from '../spinner/MainSpinner'

const interfaceConfig = {
  LANG_DETECTION: false,
  lang: "es",
  APP_NAME: "fangel",
  CONNECTION_INDICATOR_DISABLED: true,
  DEFAULT_BACKGROUND: '#252525',
  DEFAULT_LOCAL_DISPLAY_NAME: '',
  DISABLE_PRESENCE_STATUS: true,
  DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
  HIDE_INVITE_MORE_HEADER: true,
  MOBILE_APP_PROMO: false,
  SHOW_CHROME_EXTENSION_BANNER: false,
  TOOLBAR_BUTTONS: [
    "microphone",
    "camera",
    "fullscreen",
    // "fodeviceselection",
    // "hangup",
    // "profile",
    // "chat",
    // "settings",
    "videoquality",
    "tileview",
    // "download",
    // "help",
    "mute-everyone",
    'mute-video-everyone',
    // 'security'
  ]
};

const config = {
  defaultLanguage: "es",
  prejoinPageEnabled: false,
  enableWelcomePage: false,
  disableProfile: true,
  enableInsecureRoomNameWarning: false,
};

const VideoCall = ({dataUser}) => {
  const handleAPI = JitsiMeetAPI => {
    JitsiMeetAPI.executeCommand("toggleVideo");
    JitsiMeetAPI.executeCommand("toggleAudio");
  };

  return (
    <>
      <Jitsi
        domain="meet.jit.si"
        onAPILoad={handleAPI}
        roomName={"Fangel"}
        displayName={dataUser.username}
        loadingComponent={spinner} //Crear un nuevo spinner para la pantalla de video.
        interfaceConfig={interfaceConfig}
        config={config}
      />
    </>
  );
};

export default VideoCall