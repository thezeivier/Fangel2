import React from 'react'
import SelfComments from './SelfComments'
import OtherComments from './OtherComments'
import { getColorDarkMode } from './algorithms/GetRandomColor'
import { getColorLightMode } from './algorithms/GetRandomColor'

export const ChatMessage = ({msg, myUid}) => {
    const isMyMessage = msg.userUid === myUid ? true : false

    return (
        <>
            {isMyMessage ?
                <SelfComments /* color={getColorDarkMode()} */ {...msg}/>
                : 
                <OtherComments /* color={getColorDarkMode()} */ {...msg}/>
            }
        </>
    )
}
