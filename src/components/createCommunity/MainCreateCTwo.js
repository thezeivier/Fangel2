import React, {useContext, useState, useEffect} from 'react';
import {Redirect, useHistory} from 'react-router-dom'
import useHover from './../../hook/use-hover'
import {AppContext} from '../../App'
import Wrapper from './../general/Wrapper'
import { TitleStyled, TextStyled, ButtonStyled,
         OnlyDesktop, SubtitleStyled } from './../../themes/internalRecyclableStyles'
import { InputStyled } from './../../pages/signInAndUp/styles/sGlobalForm'
import { Form, CommentSVGContainer, CommentStyled } from './styles/sMainCreateCommunity'

import {CopyCode} from './algorithms/CopyCode'

import { ReactComponent as CopySVG } from './icons/copy.svg'

const MainCreateCTwo = () => {
  const [hoverRef, isHovered] = useHover();
  const history = useHistory()
  const [end, setEnd] = useState(false)

  const contextFromApp = useContext(AppContext)
  const [code, setCode] = useState()
  useEffect(()=> {
    if(contextFromApp.userFromDB.type === "admin" && contextFromApp.userFromDB.userCodesRef){
      contextFromApp.userFromDB.userCodesRef
      .get()
      .then(result =>{
        if(result.data().users.length < 20){
          setCode(result.data().code)
        }else{
          setEnd(true)
        }
  
      })
    }else{
      history.push("/")
    }
  },[])

  return (
    end?
    <Redirect to={{
      pathname: "/"
    }}/>:
    <main>
      <Wrapper>
        <TitleStyled bottom>Crear una comunidad</TitleStyled>
        <OnlyDesktop>
          <SubtitleStyled>Código de invitación</SubtitleStyled>
          <TextStyled bottom20>
            Puedes compartir este código con 20 personas para que puedan unirse a tu comunidad.
          </TextStyled>
            <Form>
              <InputStyled id="copyCode" special invitationCode type="text" value={code? code: "Cargando..."} placeholder="Código de invitación" readOnly/>
              <CommentSVGContainer ref={hoverRef}>
                <CopySVG onClick={CopyCode}/>
                {isHovered
                  ? <CommentStyled>Copiar código</CommentStyled>
                  : <></>
                }
              </CommentSVGContainer>
            </Form>
            <TextStyled>
              Despues que las personas se registren con una invitacion, podrán entrar a otras comunidades.
            </TextStyled>
            <ButtonStyled primary onClick={()=>{setEnd(true)}}>¡Ya acabé!</ButtonStyled>
        </OnlyDesktop>
      </Wrapper>
    </main>
  );
}

export default MainCreateCTwo;
