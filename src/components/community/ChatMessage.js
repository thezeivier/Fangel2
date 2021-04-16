import React from 'react'
import SelfComments from './SelfComments'
import OtherComments from './OtherComments'
import { getColorDarkMode } from './algorithms/GetRandomColor'
import { getColorLightMode } from './algorithms/GetRandomColor'

export const ChatMessage = ({msg, myUid}) => {
    const isMyMessage = msg.userUid === myUid ? true : false
    const themeMode = localStorage.mode && localStorage.getItem("mode")
    const commentColor = themeMode == "light" ? msg.colors.dark : msg.colors.light
    
    return (
        <>
            {isMyMessage ?
                <SelfComments color={commentColor} {...msg}/>
                : 
                <OtherComments color={commentColor} {...msg}/>
            }
        </>
    )
}
