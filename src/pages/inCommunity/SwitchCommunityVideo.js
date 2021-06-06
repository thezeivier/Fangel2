import React, { useState, useEffect, useContext } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import 'firebase/database'
import { AppContext } from '../../App'
import { GetCommunityVideoData } from './algorithms/GetCommunityVideoData'
import { GetAdminCommunity } from './algorithms/GetAdminCommunity'
import { useFirestore } from 'reactfire'

import VideoAdmin from './VideoAdmin'
import VideoUser from './VideoUser'
import ContractFangelConnect from '../../components/fangelConnect/ContractFangelConnect'
import ModalGeneral from '../../components/modal/ModalGeneral'

const SwitchVideoContext =  React.createContext()
const {Provider, Consumer} = SwitchVideoContext

const SwitchCommunityVideo = () => {
    const firestore = useFirestore()
    const { userFromDB, communityProvider }  = useContext(AppContext)
    const [activeCommunity, setActiveCommunity] = useState(false)
    const match = useRouteMatch("/room/:idRoom")
    const idRoomRoute = match.params.idRoom
    const [data, status, error] = GetCommunityVideoData(idRoomRoute)
    const activeCommunityRef = firestore.collection('activeCommunities')

    useEffect(async ()=>{
        let communityData = data[0]
        if(communityData){
            activeCommunityRef.doc(communityData.creatorUid)
            .onSnapshot((doc) => {
                if(doc.data() !== activeCommunity) setActiveCommunity(doc.data());
            })
            communityProvider.setCommunityGlobalData(communityData)
        }
    },[data])
    
    if(status) return <p>Pending...</p>
    if(error) return null
    
    let communityData = data[0]
    const isAdmin = GetAdminCommunity(communityData.creatorUid, userFromDB.uid)

    const activeCommunityValue = {
        activeCommunity,
        communityData
    }

    return (
        <>
            <Provider value={activeCommunityValue}>
                <ModalGeneral needRender={"n"}>
                    <ContractFangelConnect/>
                </ModalGeneral>                
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