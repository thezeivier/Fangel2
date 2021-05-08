import React, { useState } from 'react';
import { SubSpaceCardContainer, MenuCardContainer, SaveContainer } from './styles/sSubSpace'
import { ReactComponent as NumberPeopleSVG } from './../community/icons/numberPeople.svg'
import { ReactComponent as MenuCardSVG } from './../community/icons/menuCard.svg'

const SubSpaceCard = () => {
  const [openCardMenu, setOpenCardMenu] = useState(false);

  const OpenMenu = () => setOpenCardMenu(!openCardMenu)

  return (
    <SubSpaceCardContainer>
      <h4>
        Space in space One
      </h4>
      <div>
        <NumberPeopleSVG className="numberPeopleSVG" />
        <span>3</span>
      </div>
      <MenuCardSVG className="menuCardSVG" onClick={OpenMenu} />
      {
        openCardMenu ?
          <MenuCardContainer>
            <p>Cambiar nombre</p>
            <MenuCardSVG className="menuCardSVG activeMenuCard" onClick={OpenMenu} />
          </MenuCardContainer> :
          <></>
      }
      {/* Solo se activa cuando le da en cambiar */}
{/*       <SaveContainer>
        <p>Guardar</p>
      </SaveContainer> */}
    </SubSpaceCardContainer>
  );
}

export default SubSpaceCard;
