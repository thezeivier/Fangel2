import React, { useState, useEffect, useContext } from 'react'
import { useRouteMatch, useHistory, useLocation } from 'react-router-dom'
import 'firebase/database'
import { AppContext } from '../../App'
import { GetCommunityVideoData } from './algorithms/GetCommunityVideoData'
import { GetAdminCommunity } from './algorithms/GetAdminCommunity'
import { useFirestore } from 'reactfire'

import VideoAdmin from './VideoAdmin'
import VideoUser from './VideoUser'
import ContractFangelConnect from '../../components/fangelConnect/ContractFangelConnect'
import ModalGeneral from '../../components/modal/ModalGeneral'
import ScoreFangelConnect from '../../components/fangelConnect/ScoreFangelConnect'

const SwitchVideoContext =  React.createContext()
const {Provider, Consumer} = SwitchVideoContext

const SwitchCommunityVideo = () => {
    const location = useLocation()
    const history = useHistory()
    const firestore = useFirestore()
    const { userFromDB, communityProvider }  = useContext(AppContext)
    const [activeCommunity, setActiveCommunity] = useState(false)
    const match = useRouteMatch("/room/:idRoom")
    const idRoomRoute = match.params.idRoom
    const [data, status, error] = GetCommunityVideoData(idRoomRoute)
    const activeCommunityRef = firestore.collection('activeCommunities')
    const [stateLocation, setStateLocation] = useState()
    const [stateContract, setStateContract] = useState(false)
    const [stateScore, setStateScore] = useState(false)

    useEffect(async ()=>{
        let communityData = data[0]
        setStateLocation(location.state && location.state.origin)
        setStateContract(location.state && location.state.origin && true)
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
        communityData,
        stateScore,
        setStateScore
    }

    const handleModalClose = () => {
        history.push(`/`)
        window.location.reload()
    }
    return (
        <>
            <Provider value={activeCommunityValue}>
                {
                    (stateLocation === "searchPeople") &&
                    <ModalGeneral needRender={"n"} modalOpen={stateContract}>
                        <ContractFangelConnect setStateContract={setStateContract}/>
                    </ModalGeneral>                
                }
                {stateScore &&
                    <ModalGeneral modalOpen={stateScore} modalIsOpen={handleModalClose}>
                        <ScoreFangelConnect setStateScore={setStateScore}/>
                    </ModalGeneral>
                }

                {
                    isAdmin ? 
                    <VideoAdmin activeCommunity={activeCommunity} isAdmin={isAdmin} communityData={communityData} setStateScore={setStateScore}/> : 
                    <VideoUser activeCommunity={activeCommunity} communityData={communityData}/>
                }
            </Provider>
        </>
    )
}

export {SwitchCommunityVideo, Consumer as SwitchVideoConsumer, SwitchVideoContext}