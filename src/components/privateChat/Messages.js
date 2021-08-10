import React from 'react';
import MainIndividualChat from './MainIndividualChat'
import { GetDataFromInbox } from '../../components/privateChat/algorithms/GetDataFromInbox'

const Messages = ({getRouteInbox, data, userFromDB, authState}) => {
    const getInboxDoc = GetDataFromInbox('inbox', authState.uid)
    if(getInboxDoc.status === "loading") return <p>Pending...</p>
    if(getInboxDoc.error) return <p>Error</p>
    return ( 
        <>
            {getInboxDoc.data.map(usr => (
              getRouteInbox == usr.idInbox &&
              <MainIndividualChat key={usr.idInbox} message={data} {...usr} userFromDB={userFromDB} authState={authState} inGridDesktop="block" />
            ))}
        </>
    );
}
 
export default Messages;