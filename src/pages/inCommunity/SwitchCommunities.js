import React from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { SwitchCommunityVideo } from './SwitchCommunityVideo'
import { SwitchCommunitySubSpace } from './SwitchCommunitySubSpace'

export const SwitchCommunities = () => {
    const matchSubSpace = useRouteMatch("/room/:idRoom/:idSubSpace")
    // const idRoom = matchSubSpace.params.idRoom
    // const idSubSpace = matchSubSpace.params.idSubSpace
    
    return <SwitchCommunitySubSpace/>  
}
