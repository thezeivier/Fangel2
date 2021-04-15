import React from 'react'
import Jitsi from 'react-jitsi'
import VideoSpinner from '../spinner/VideoSpinner'

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
  TOOLBAR_TIMEOUT: 2000,

  /* SHOW_JITSI_WATERMARK: false,
  HIDE_DEEP_LINKING_LOGO: true,
  SHOW_BRAND_WATERMARK: false,
  SHOW_WATERMARK_FOR_GUESTS: false, */
  TOOLBAR_BUTTONS: [
    "microphone",
    "camera",
    "fullscreen",
    'desktop',
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
    'raisehand'
    // 'etherpad'
    // 'livestreaming'
    // 'closedcaptions'
    // 'feedback'
    // 'sharedvideo'
    // 'security'
  ]
};

const config = {
  defaultLanguage: "es",
  prejoinPageEnabled: false,
  enableWelcomePage: false,
  disableProfile: true,
  enableInsecureRoomNameWarning: false,

/*   configOverwrite: { startWithAudioMuted: true },
  interfaceConfigOverwrite: { DISABLE_DOMINANT_SPEAKER_INDICATOR: true }, */
};

const VideoCall = ({dataUser, communityData}) => {
  const handleAPI = JitsiMeetAPI => {
    JitsiMeetAPI.executeCommand("toggleVideo");
    JitsiMeetAPI.executeCommand("toggleAudio");

  };

  return (
    <>
      <Jitsi
        domain="meet.jit.si"
        onAPILoad={handleAPI}
        roomName={communityData.roomName}
        displayName={dataUser.username}
        loadingComponent={VideoSpinner}
        interfaceConfig={interfaceConfig}
        config={config}
      />
    </>
  );
};

export default VideoCall