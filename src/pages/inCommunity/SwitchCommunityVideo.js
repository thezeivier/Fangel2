import React, { useState, useEffect, useContext } from 'react'
import { useRouteMatch, useHistory, useLocation } from 'react-router-dom'
import 'firebase/database'
import { AppContext } from '../../App'
import { GetCommunityVideoData } from './algorithms/GetCommunityVideoData'
import { GetAdminCommunity } from './algorithms/GetAdminCommunity'
import { useFirestore } from 'reactfire'

import VideoSpeaker from './VideoSpeaker'
import VideoListener from './VideoListener'
import ContractFangelConnect from '../../components/fangelConnect/ContractFangelConnect'
import ModalGeneral from '../../components/modal/ModalGeneral'
import ScoreFangelConnect from '../../components/fangelConnect/ScoreFangelConnect'
import MainSpinner from '../../components/spinner/MainSpinner'

const SwitchVideoContext =  React.createContext()
const {Provider, Consumer} = SwitchVideoContext

const SwitchCommunityVideo = () => {
    const location = useLocation()
    const history = useHistory()
    const firestore = useFirestore()
    const { userFromDB, communityProvider, fangelConnectProvider, fangelConnectGlobalDataProvider, setCommunityGlobalData }  = useContext(AppContext)
    const [activeCommunity, setActiveCommunity] = useState(false)
    const match = useRouteMatch("/room/:idRoom")
    const idRoomRoute = match.params.idRoom
    const [data, status, error] = GetCommunityVideoData(idRoomRoute)
    const activeCommunityRef = firestore.collection('activeCommunities')
    const [stateLocation, setStateLocation] = useState()
    const [stateContract, setStateContract] = useState(false)
    const [stateScore, setStateScore] = useState(null)
    const [fangelConnectData, setFangelConnectData] = useState(null)
    
    useEffect(async ()=>{
        let communityData = data[0]
        if(location.state && location.state.origin){
            setStateScore(false)
            setStateLocation(location.state.origin)
            setStateContract(true)
            setFangelConnectData(fangelConnectProvider? fangelConnectProvider: await firestore.collection("fangelConnect")
            .doc(window.location.pathname.substr(-15))
            .get().then(result => result.data())
            )
        }
        if(communityData){
            activeCommunityRef.doc(communityData.creatorUid)
            .onSnapshot((doc) => {
                if(doc.data() !== activeCommunity) setActiveCommunity(doc.data());
            })
            communityProvider.setCommunityGlobalData(communityData)
        }
    },[data])
    
    if(status) return <MainSpinner/>
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
        if(history.location.pathname.includes("-")){
            setStateScore(false)
        }else{
            setCommunityGlobalData(false)
            history.push(`/`)
        }
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
                        <ScoreFangelConnect userFromDB={userFromDB} setCommunityGlobalData={setCommunityGlobalData} fangelConnectProvider={fangelConnectData} setStateScore={setStateScore}/>
                    </ModalGeneral>
                }

                {
                    isAdmin ? 
                    <VideoSpeaker activeCommunity={activeCommunity} isAdmin={isAdmin} communityData={communityData} setStateScore={setStateScore} fangelConnectData={fangelConnectData}/> : 
                    <VideoListener activeCommunity={activeCommunity} communityData={communityData} fangelConnectData={fangelConnectData}/>
                }
            </Provider>
        </>
    )
}

export {SwitchCommunityVideo, Consumer as SwitchVideoConsumer, SwitchVideoContext}