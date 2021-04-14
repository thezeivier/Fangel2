import React, { useState, useEffect, useContext } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import {useFirestore} from 'reactfire'

import { AppContext } from '../../App'
import { GetCommunityVideoData } from './algorithms/GetCommunityVideoData'
import { GetAdminCommunity } from './algorithms/GetAdminCommunity'

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
    const history = useHistory()
    const [data, status, error] = GetCommunityVideoData(idRoomRoute)
    
    useEffect(()=>{
        if(!status){
            let communityData = data[0]
            firestore
            .collection('activeCommunities')
            .doc(communityData.creatorUid)
            .onSnapshot((doc) => {
                setActiveCommunity(doc.data());
            })
        }
    },[])

    if(status) return <p>Pending...</p>
    if(error) return null
    let communityData = data[0]
    const isAdmin = GetAdminCommunity(communityData.creatorUid, userFromDB.uid)


    const activeCommunityValue = {
        activeCommunity,
    }
    
    return (
        <>
            <Provider value={activeCommunityValue}>
                {
                    isAdmin ? <VideoAdmin communityData={communityData}/> : <VideoUser communityData={communityData}/>
                }
            </Provider>
        </>
    )
}

export {SwitchCommunityVideo, Consumer as SwitchVideoConsumer, SwitchVideoContext}