import React from 'react';
import RegHeader from './RegHeader'
import HeaderLP from './HeaderLP'
import MainPrivateChat from '../../components/privateChat/MainPrivateChat'

const InboxLayout = ({children, authState, userFromDB}) => {
    return ( 
        <>  
            {
                authState?
                <RegHeader/>:
                <HeaderLP/>
            }
            <MainPrivateChat authState={authState} userFromDB={userFromDB}>
                {children}
            </MainPrivateChat>
        </>
    );
}
 
export default InboxLayout;