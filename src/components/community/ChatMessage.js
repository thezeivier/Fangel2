import React from 'react'
import SelfComments from './SelfComments'
import OtherComments from './OtherComments'

export const ChatMessage = ({msg, myUid}) => {
    const isMyMessage = msg.userUid === myUid ? true : false
    const themeMode = localStorage.mode && localStorage.getItem("mode")
    const commentColor = themeMode === "light" ? msg.colorMessage.light : msg.colorMessage.dark
    
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
