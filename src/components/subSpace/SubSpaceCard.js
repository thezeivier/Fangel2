import React, { useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import { SubSpaceCardContainer, MenuCardContainer, SaveContainer, SubspaceDescriptionContainer } from './styles/sSubSpace'
import { ReactComponent as NumberPeopleSVG } from './../community/icons/numberPeople.svg'
import { ReactComponent as MenuCardSVG } from './../community/icons/menuCard.svg'

const SubSpaceCard = ({nameOfSpace, id, communityData}) => {
  const history = useHistory()
  const [openCardMenu, setOpenCardMenu] = useState(false);
  const [subSpaceData, setSubSpaceData] = useState(null)
  const OpenMenu = () => setOpenCardMenu(!openCardMenu)
  useEffect(()=>{
    setSubSpaceData({
      ...communityData,
      subSpaceId: communityData.roomName.concat(id),
    })
  },[])

  const enterToSubSpace = () => {
    history.push(`/room/${communityData.roomName}/${id}`)
    // history.push(`/room/${subSpaceData.subSpaceId}`)
    window.location.reload()
  }
  return (
    <SubSpaceCardContainer>
      <SubspaceDescriptionContainer onClick={enterToSubSpace}>
        <h4>
          {nameOfSpace}
        </h4>
        <div>
          <NumberPeopleSVG className="numberPeopleSVG" />
          <span>3</span>
        </div>
      </SubspaceDescriptionContainer>
      <div>
        <MenuCardSVG className="menuCardSVG" onClick={OpenMenu} />
        {
          openCardMenu &&
            <MenuCardContainer>
              <p>Cambiar nombre</p>
              <MenuCardSVG className="menuCardSVG activeMenuCard" onClick={OpenMenu} />
            </MenuCardContainer>
        }
        {/* Solo se activa cuando le da en cambiar */}
        {/* <SaveContainer>
          <p>Guardar</p>
        </SaveContainer> */}
      </div>
    </SubSpaceCardContainer>
  );
}

export default SubSpaceCard;
