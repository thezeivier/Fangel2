import React, { useContext, useEffect } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import 'firebase/database'
import { AppContext } from '../../App'
import { GetCommunityVideoData } from './algorithms/GetCommunityVideoData'
import { GetAdminCommunity } from './algorithms/GetAdminCommunity'
import { useDatabase, useDatabaseObjectData, useFirestore } from 'reactfire'
import { OnDisconnectUser } from './algorithms/OnDisconnectUser'

import VideoAdmin from './VideoAdmin'
import VideoUser from './VideoUser'

const SwitchCommunityVideo = () => {
    const { userFromDB }  = useContext(AppContext)
    const match = useRouteMatch("/room/:idRoom")
    const idRoomRoute = match.params.idRoom
    const [data, status, error] = GetCommunityVideoData(idRoomRoute)
    const firestore = useFirestore()
    const database = useDatabase()
    const refData = database.ref(`/users/${userFromDB.uid}`)
    const userData = useDatabaseObjectData(refData) 

    if(status) return <p>Pending...</p>
    if(error) return null
    
    let communityData = data[0]
    const isAdmin = GetAdminCommunity(communityData.creatorUid, userFromDB.uid)
    
    // Update to user offline
    OnDisconnectUser(userFromDB.uid, database, firestore, idRoomRoute, communityData.roomName)
    console.count("render")

    return (
        <>
            {
                isAdmin ? <VideoAdmin communityData={communityData}/> : <VideoUser communityData={communityData}/>
            }
        </>
    )
}

export default SwitchCommunityVideo