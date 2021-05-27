import React, { useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import { useFirestore } from 'reactfire'
import { useForm } from 'react-hook-form';
import { otherTextValidator } from '../../pages/signInAndUp/objects/formValidators'
import { InputStyled } from '../../pages/signInAndUp/styles/sGlobalForm'
import { SubSpaceCardContainer, MenuCardContainer, SaveContainer, SubspaceDescriptionContainer } from './styles/sSubSpace'
import { ReactComponent as NumberPeopleSVG } from './../community/icons/numberPeople.svg'
import { ReactComponent as MenuCardSVG } from './../community/icons/menuCard.svg'

const SubSpaceCard = ({nameOfSpace, id, communityData}) => {
  const history = useHistory()
  const firestore = useFirestore()
  const { register } = useForm()
  const subSpaceId = id //Identificador de subespacio
  const [openCardMenu, setOpenCardMenu] = useState(false);
  const [subSpaceNewName, setSubSpaceNewName] = useState(null)
  const [saveSubSpaceChangeButton, setSaveSubSpaceChangeButton] = useState(false)
  const OpenMenu = () => setOpenCardMenu(!openCardMenu)
  useEffect(()=>{
    setSubSpaceNewName(nameOfSpace)
  },[])

  const enterToSubSpace = () => {
    history.push(`/room/${communityData.roomName}/${subSpaceId}`)
    window.location.reload()
  }

  const ChangeName = () => {
    OpenMenu(); //Cierra el menú de subespacio.
    setSaveSubSpaceChangeButton(true);
  }

  const handleChangeSubSpace = () => {
    setSaveSubSpaceChangeButton(false);
    if(nameOfSpace !== subSpaceNewName){
      const batch = firestore.batch();
      batch.set(
      firestore.collection("communities").doc(communityData.roomName).collection("subSpace").doc(subSpaceId),
      {
        nameOfSpace: subSpaceNewName,
      },
      {merge: true}
      );

      batch.commit();
    }
  }

  return (
    <SubSpaceCardContainer>
      <SubspaceDescriptionContainer onClick={enterToSubSpace}>
        {
          !saveSubSpaceChangeButton &&
            <h4>{nameOfSpace}</h4>
        }
        {/* <div>
          <NumberPeopleSVG className="numberPeopleSVG" />
          <span>3</span>
        </div> */}
      </SubspaceDescriptionContainer>
      <div>
        <MenuCardSVG className="menuCardSVG" onClick={OpenMenu} />
        {
          openCardMenu &&
          <MenuCardContainer>
              <p onClick={ChangeName}>Cambiar nombre</p>
              <MenuCardSVG className="menuCardSVG activeMenuCard" onClick={OpenMenu} />
            </MenuCardContainer>
        }
        {/* Solo se activa cuando le da en cambiar */}
        {
          saveSubSpaceChangeButton &&
          <SaveContainer onClick={handleChangeSubSpace}>
              <p>Guardar</p>
            </SaveContainer>
        }
      </div>
      {
        saveSubSpaceChangeButton &&
        <form center>
          <InputStyled 
            type="text" 
            onChange={(e)=>{
              setSubSpaceNewName(e.target.value)
            }} 
            placeholder={subSpaceNewName} 
            name="subSpaceName" 
            ref={register(otherTextValidator)}
          />
        </form>
      }
    </SubSpaceCardContainer>
  );
}

export default SubSpaceCard;
