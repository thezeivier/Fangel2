import React, { useState, useEffect} from 'react';
import { SubSpaceCardContainer, MenuCardContainer, SaveContainer } from './styles/sSubSpace'
import { ReactComponent as NumberPeopleSVG } from './../community/icons/numberPeople.svg'
import { ReactComponent as MenuCardSVG } from './../community/icons/menuCard.svg'

const SubSpaceCard = ({nameOfSpace, id, communityData}) => {
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

    console.log(subSpaceData)
    
  }
  return (
    <SubSpaceCardContainer  onClick={enterToSubSpace}>
      <h4>
        {nameOfSpace}
      </h4>
      <div>
        <NumberPeopleSVG className="numberPeopleSVG" />
        <span>3</span>
      </div>
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
    </SubSpaceCardContainer>
  );
}

export default SubSpaceCard;
