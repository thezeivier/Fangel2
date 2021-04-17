import React, { useState, useEffect, useContext } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import 'firebase/database'
import { AppContext } from '../../App'
import { GetCommunityVideoData } from './algorithms/GetCommunityVideoData'
import { GetAdminCommunity } from './algorithms/GetAdminCommunity'
import { useDatabase, useFirestore } from 'reactfire'
import { OnDisconnectUser } from './algorithms/OnDisconnectUser'

import VideoAdmin from './VideoAdmin'
import VideoUser from './VideoUser'

const SwitchVideoContext =  React.createContext()
const {Provider, Consumer} = SwitchVideoContext

const SwitchCommunityVideo = () => {
    const firestore = useFirestore()
    const { userFromDB }  = useContext(AppContext)
    const [activeCommunity, setActiveCommunity] = useState(false)
    const match = useRouteMatch("/room/:idRoom")
    const idRoomRoute = match.params.idRoom
    const [data, status, error] = GetCommunityVideoData(idRoomRoute)
    const database = useDatabase()
    const activeCommunityRef = firestore.collection('activeCommunities')

    useEffect(async ()=>{
        let communityData = data[0]
        if(communityData){
            activeCommunityRef.doc(communityData.creatorUid)
            .onSnapshot((doc) => {
                if(doc.data() !== activeCommunity) setActiveCommunity(doc.data());
            })
        }
    },[data])

    if(status) return <p>Pending...</p>
    if(error) return null
    let communityData = data[0]
    const isAdmin = GetAdminCommunity(communityData.creatorUid, userFromDB.uid)

    const activeCommunityValue = {
        activeCommunity,
    }
    
    // Update to user offline
    OnDisconnectUser(userFromDB.uid, database, firestore, idRoomRoute, communityData.roomName)

    return (
        <>
            <Provider value={activeCommunityValue}>
                {
                    isAdmin ? 
                    <VideoAdmin activeCommunity={activeCommunity} isAdmin={isAdmin} communityData={communityData}/> : 
                    <VideoUser activeCommunity={activeCommunity} communityData={communityData}/>
                }
            </Provider>
        </>
    )
}

export {SwitchCommunityVideo, Consumer as SwitchVideoConsumer, SwitchVideoContext}