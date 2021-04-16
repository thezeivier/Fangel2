import React from 'react'
import SelfComments from './SelfComments'
import OtherComments from './OtherComments'
import { getColorDarkMode } from './algorithms/GetRandomColor'
import { getColorLightMode } from './algorithms/GetRandomColor'

export const ChatMessage = ({msg, myUid, colorsUser}) => {
    const isMyMessage = msg.userUid === myUid ? true : false
    const themeMode = localStorage.mode && localStorage.getItem("mode")
    const commentColor = themeMode == "light" ? colorsUser.light : colorsUser.dark
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
