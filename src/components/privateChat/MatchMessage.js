import React, { useContext } from 'react';
import { useRouteMatch, useParams } from 'react-router-dom'
import Messages from './Messages'
import {GetDataFromMessagesInbox} from './algorithms/GetDataFromMessagesInbox'
import { OthersContainer } from './styles/sMainPrivateChat'
import { ReactComponent as SocialInteractionSVG } from './images/socialInteraction.svg'

const MatchMessage = ({authState, userFromDB, getRouteInbox}) => {
    const getInboxMessage = getRouteInbox ? GetDataFromMessagesInbox(getRouteInbox, 'inbox', 'messagesInbox') : null
  
    if(getInboxMessage?.status === "loading") return <p>Pending...</p>
    if(getInboxMessage?.error) return <p>Error</p>
    
    return (
        <>
            {!getRouteInbox ?
                <OthersContainer>
                    <SocialInteractionSVG />
                    <p>Envia y recibe mensajes. Ingresa al perfil de un persona para iniciar una conversación.</p>
                </OthersContainer>
                :
                <Messages getRouteInbox={getRouteInbox} data={getInboxMessage.data} authState={authState} userFromDB={userFromDB}/>
            }
        </>
    );
}
 
export default MatchMessage;