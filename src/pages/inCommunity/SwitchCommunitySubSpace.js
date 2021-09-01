import React, { useState, useEffect, useContext } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import 'firebase/database'
import { AppContext } from '../../App'
import { GetCommunitySubspaceData } from './algorithms/GetCommunitySubspaceData'
import { GetCommunityVideoData } from './algorithms/GetCommunityVideoData'
import { GetAdminCommunity } from './algorithms/GetAdminCommunity'
import { useFirestore } from 'reactfire'

import VideoSpeaker from './VideoSpeaker'
import VideoListener from './VideoListener'

const SwitchVideoContext =  React.createContext()
const {Provider, Consumer} = SwitchVideoContext

export const SwitchCommunitySubSpace = () => {
    const routePath = useRouteMatch("/room/:idRoom/:idSubSpace")
    const { userFromDB, communityProvider }  = useContext(AppContext)
    const [activeCommunity, setActiveCommunity] = useState(false)
    const firestore = useFirestore()
    const idRoom = routePath.params.idRoom
    const idSubSpace = routePath.params.idSubSpace 
    const [loadingSubSpace, errorSubSpace, dataSubSpace] = GetCommunitySubspaceData(idRoom, idSubSpace)
    const [data, loading, error] = GetCommunityVideoData(idRoom)
    const activeCommunityRef = firestore.collection('activeCommunities')

    useEffect(async ()=>{
        let communityData = data[0]
        let communityDataSubSpace = dataSubSpace[0]
        if(communityData && communityDataSubSpace){
            activeCommunityRef.doc(communityData.creatorUid)
            .onSnapshot((doc) => {
                if(doc.data() !== activeCommunity) setActiveCommunity(doc.data());
            })
            communityProvider.setCommunityGlobalData({communityData, communityDataSubSpace})
        }
    },[data, dataSubSpace])

    if(loading || loadingSubSpace) return <p>Pending...</p>
    if(error || errorSubSpace) return null

    let communityData = data[0]
    let communityDataSubSpace = dataSubSpace[0]

    const isAdmin = GetAdminCommunity(communityData.creatorUid, userFromDB.uid)
    
    const activeCommunityValue = {
        activeCommunity,
        communityData
    }
    return (
        <>
            <Provider value={activeCommunityValue}>
                {
                    isAdmin ? 
                    <VideoSpeaker 
                        activeCommunity={activeCommunity} 
                        isAdmin={isAdmin} 
                        communityData={communityData} 
                        isSubSpace
                        communityDataSubSpace={communityDataSubSpace}/> : 
                    <VideoListener 
                        activeCommunity={activeCommunity} 
                        communityData={communityData} 
                        isSubSpace
                        communityDataSubSpace={communityDataSubSpace}/>
                }
            </Provider>
        </>
    )
}
