import React, { useContext } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'

import { AppContext } from '../../App'
import { GetCommunityVideoData } from './algorithms/GetCommunityVideoData'
import { GetAdminCommunity } from './algorithms/GetAdminCommunity'

import VideoAdmin from './VideoAdmin'
import VideoUser from './VideoUser'


const SwitchCommunityVideo = () => {
    const { userFromDB }  = useContext(AppContext)
    const match = useRouteMatch("/room/:idRoom")
    const idRoomRoute = match.params.idRoom
    const history = useHistory()
    const [data, status, error] = GetCommunityVideoData(idRoomRoute)
    if(status) return <p>Pending...</p>
    if(error) return null
    
    let communityData = data[0]
    const isAdmin = GetAdminCommunity(communityData.creatorUid, userFromDB.uid)
    
    return (
        <>
            {
                isAdmin ? <VideoAdmin communityData={communityData}/> : <VideoUser communityData={communityData}/>
            }
        </>
    )
}

export default SwitchCommunityVideo