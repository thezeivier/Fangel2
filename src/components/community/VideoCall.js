import React, {useEffect} from 'react'
import Jitsi from 'react-jitsi'
import VideoSpinner from '../spinner/VideoSpinner'
import {useFirestore} from 'reactfire'
import { GetAdminCommunity } from '../../pages/inCommunity/algorithms/GetAdminCommunity'
import { SendParticipants } from './algorithms/SendParticipants'
import { VerifyIsBusinessProfile } from './algorithms/VerifyIsBusinessProfile'
import { IsSpeaker } from './algorithms/IsSpeaker'

const interfaceConfig = {
  LANG_DETECTION: true,
  lang: "es",
  APP_NAME: "fangel",
  CONNECTION_INDICATOR_DISABLED: true,
  DEFAULT_REMOTE_DISPLAY_NAME: 'Fangel User',
  DEFAULT_BACKGROUND: "#e1812a",
  DEFAULT_LOCAL_DISPLAY_NAME: '',
  DISABLE_PRESENCE_STATUS: true,
  DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
  HIDE_INVITE_MORE_HEADER: true,
  MOBILE_APP_PROMO: false,
  DISABLE_RINGING: true,
  ENABLE_DIAL_OUT: false,
  SHOW_CHROME_EXTENSION_BANNER: false,
  TOOLBAR_TIMEOUT: 2000,
};

const ownerUserToolBarButtons = [
  'camera',
  'chat',
  'closedcaptions',
  'desktop',
  // 'download',
  // 'embedmeeting',
  // 'etherpad',
  // 'feedback',
  'filmstrip',
  'fullscreen',
  // 'hangup',
  // 'help',
  // 'invite',
  // 'livestreaming',
  'microphone',
  'mute-everyone',
  'mute-video-everyone',
  'participants-pane',
  'profile',
  'raisehand',
  // 'recording',
  'security',
  'select-background',
  'settings',
  'shareaudio',
  'sharedvideo',
  'shortcuts',
  // 'stats',
  'tileview',
  'toggle-camera',
  'videoquality',
  // '__end'
]

const listenersUserToolBarButtons = [
  "fullscreen",
  "tileview",
  "microphone",
  "raisehand",
  "videoquality",
  'shortcuts',
]

const speakersUserToolBarButtons = [
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
  defaultLanguage: "esUS",
  prejoinPageEnabled: false,
  enableWelcomePage: false,
  disableProfile: true,
  enableInsecureRoomNameWarning: false,
  disableDeepLinking: true,
  enableNoAudioDetection: true,
  enableNoisyMicDetection: true,
};

const VideoCall = ({dataUser, authState, communityDataRoom, SetNumberOfParticipants}) => {
  const firestore = useFirestore()
  const isAdmin = communityDataRoom.creatorUid ? GetAdminCommunity(communityDataRoom.creatorUid, dataUser.uid) : false
  const isSpeaker = communityDataRoom.speakers && IsSpeaker(communityDataRoom.speakers, dataUser.email) 
  
  const userInfoData = {
    name: dataUser.name,
    email: dataUser.email
  }

  const handleAPI = async JitsiMeetAPI => {

    JitsiMeetAPI.executeCommands({
      toggleAudio: [],
      toggleVideo: [],
      avatarUrl: [dataUser.photoUrl? dataUser.photoUrl: null],
      email: [dataUser.email? dataUser.email: null],
      toggleVirtualBackgroundDialog: [],
      subject: [communityDataRoom.privacy === "public"? `${communityDataRoom.title} - Público`:  `${communityDataRoom.title}`],
    });
    
    JitsiMeetAPI.on('passwordRequired', function (){
      JitsiMeetAPI.executeCommand('password', !communityDataRoom.communityDataSubSpace ? `fangel_${communityDataRoom.roomName}_fangel` : `fangel_${communityDataRoom.communityData.roomName}&@&${communityDataRoom.communityDataSubSpace.id}_fangel`);
    });
    
    JitsiMeetAPI.addEventListener('videoConferenceJoined', async () => {
      await SendParticipants(firestore, userInfoData, communityDataRoom.roomName, communityDataRoom.creatorUid)
      // const number = JitsiMeetAPI.getNumberOfParticipants()
      // SetNumberOfParticipants(firestore, number, communityDataRoom.roomName)
      // JitsiMeetAPI.executeCommand('startShareVideo', "2jmZeLlaCDc")
    })

    // JitsiMeetAPI.addEventListener('videoConferenceLeft', () => {
    //   console.log(JitsiMeetAPI.getParticipantsInfo())
    //   const number = JitsiMeetAPI.getNumberOfParticipants() - 1
    //   SetNumberOfParticipants(firestore, number, communityDataRoom.roomName)
    // JitsiMeetAPI.executeCommand('startShareVideo', "2jmZeLlaCDc")
    // })
    // JitsiMeetAPI.addEventListener('participantRoleChanged', (event) => {
    //   console.log(event)
    // })
  };

  
  const {...restConf} = interfaceConfig
  const interfaceOwnerUserConf = {...restConf, TOOLBAR_BUTTONS: ownerUserToolBarButtons}
  const interfaceListenerUserConf = {...restConf, TOOLBAR_BUTTONS: listenersUserToolBarButtons}
  const interfaceSpeakerUserConf = {...restConf, TOOLBAR_BUTTONS: speakersUserToolBarButtons}
  
  // const typeOfInterfaceUser = isAdmin ? interfaceOwnerUserConf : (isSpeaker ? interfaceSpeakerUserConf : interfaceListenerUserConf)
  const typeOfInterfaceUser = interfaceOwnerUserConf 
  
  return(
    <Jitsi
      domain="talk.fangelweb.com"
      onAPILoad={handleAPI}
      password={!communityDataRoom.communityDataSubSpace ? `fangel_${communityDataRoom.roomName}_fangel` : `fangel_${communityDataRoom.communityData.roomName}&@&${communityDataRoom.communityDataSubSpace.id}_fangel`}
      roomName={ !communityDataRoom.communityDataSubSpace ? communityDataRoom.roomName : `${communityDataRoom.communityData.roomName}${communityDataRoom.communityDataSubSpace.id}`}
      displayName={authState.displayName}
      loadingComponent={VideoSpinner}
      interfaceConfig={typeOfInterfaceUser}
      containerStyle={{ width: '110vw', height: '45em' }}
      config={config}
    />
  )
};

export default VideoCall