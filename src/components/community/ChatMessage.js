import React from 'react'
import SelfComments from './SelfComments'
import OtherComments from './OtherComments'

export const ChatMessage = ({msg, myUid}) => {
    const isMyMessage = msg.userUid === myUid ? true : false
    return (
        <>
            {isMyMessage ?
                <SelfComments {...msg}/>
                : 
                <OtherComments {...msg}/>
            }
        </>
    )
}
