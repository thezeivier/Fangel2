import React, {useState, useEffect, useContext} from 'react';
import { useStateIfMounted } from 'use-state-if-mounted'
import { AppContext } from '../../App';
import {useFirestore, useStorage} from 'reactfire'
import Wrapper from './../general/Wrapper'
import { PeopleContainer, TextBodyStyled, SearchPeopleContainer, ButtonAccionStyled } from './styles/sSearchPeople'
import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'
import { fangelConnectAnalizer, cancelFangelConnectRefactorized} from './algorithms/fangelConnectAnalizer'
import { ReactComponent as CloseSVG } from '../general/icons/close.svg'

const SearchPeople = ({ modalIsOpen }) => {
  const firestore = useFirestore()
  const storage =  useStorage()
  const [fangelConnectFromDB, setFangelConnectFromDB] = useStateIfMounted(null)
  const [idOfFangelConnect, setIdOfFangelConnect] = useStateIfMounted(null)
  const [existJoinner, setExistJoinner] = useStateIfMounted(null)
  const [existCreator, setExistCreator] = useStateIfMounted(null)
  const [joinnerProfileThumb, setJoinnerProfileThumb] = useStateIfMounted(null)
  const { userFromDB, authState, profileThumb } = useContext(AppContext)

  useEffect(async()=>{
    const idOfConnect = !fangelConnectFromDB ? await fangelConnectAnalizer(firestore, userFromDB): idOfFangelConnect//Siempre retorna el id del documento de fangelConnect
    setIdOfFangelConnect(idOfConnect)
    if(idOfConnect){
      var unsubscribe = firestore.collection("fangelConnect").doc(idOfConnect).onSnapshot(querySnapshot=>{
        setFangelConnectFromDB(querySnapshot.data())
        setExistJoinner(querySnapshot.data()?.dataFromJoinner) //Corroboración de la existencia del joinner unido.
        setExistCreator(querySnapshot.data()?.dataFromCreator) //Corroboración de la existencia del creator unido.
      })
    }

    return () =>{
      if(unsubscribe) unsubscribe()
    } ;


  },[firestore, storage])

  const cancelFangelConnect = async() => { //Cancelar búsqueda en fangelConnect
    await cancelFangelConnectRefactorized(firestore, userFromDB, existJoinner, existCreator, fangelConnectFromDB, idOfFangelConnect)
  }

  if(existCreator && existJoinner){
    var dataFromOtherUser = null
    if(existCreator.uid === userFromDB.uid){
      dataFromOtherUser = existJoinner
    }else{
      dataFromOtherUser = existCreator
    }
    if(dataFromOtherUser.bucket && dataFromOtherUser.route){
      const profileImageReference = storage.refFromURL(`gs://${dataFromOtherUser.bucket}/${dataFromOtherUser.route}`)
      profileImageReference.getDownloadURL().then(url => {//Recuperar foto de perfil del usuario que se unirá a la llamada.
        setJoinnerProfileThumb(url)
      })
    }
  }

  return (
    <main>
      <Wrapper>
        <SearchPeopleContainer>
          <CloseSVG className="closeSVGSearchPeople" onClick={()=>{
                modalIsOpen();
                cancelFangelConnect();
          }}/>
          <TextBodyStyled>Buscando personas con tus mismos intereses</TextBodyStyled>
          <PeopleContainer>
            <div>
              {profileThumb? //Foto de perfil de usuario local
                <img src={profileThumb}/>:
                <ProfileSVG />
              }
              <p>
                {userFromDB.name? //Nombre completo de usuario local
                  `${userFromDB.name.firstName} ${userFromDB.name.lastName? userFromDB.name.lastName: ""}`: 
                  userFromDB.username
                }
              </p>
            </div>
            {existJoinner && existCreator?
              (<section className="buttonsAccionContainer">
                {/* <span>Encontraste una conexión</span> */}
                <ButtonAccionStyled>Conectar</ButtonAccionStyled>
                <ButtonAccionStyled>Ignorar</ButtonAccionStyled>
              </section>):
              <span>Buscando...</span>
            }
            <div>
              {joinnerProfileThumb && existJoinner? //Foto de perfil de usuario encontrado
                <img src={joinnerProfileThumb}/>:
                <ProfileSVG />
              }
              <p>
                {(existCreator && (existCreator.uid === userFromDB.uid))? //Nombre completo de usuario encontrado
                    (existJoinner && (
                      existJoinner.name? 
                      `${existJoinner.name.firstName} ${existJoinner.name.lastName && existJoinner.name.lastName}`:
                      existJoinner.username
                    )):
                    (existCreator && (
                      existCreator.name? 
                      `${existCreator.name.firstName} ${existCreator.name.lastName && existCreator.name.lastName}`:
                      existCreator.username
                    ))
                }
              </p>
            </div>
          </PeopleContainer>
          <a onClick={()=>{
            modalIsOpen();
            cancelFangelConnect();
          }}>Cancelar busqueda</a>
        </SearchPeopleContainer>
      </Wrapper>
    </main>
  );
}

export default SearchPeople;
