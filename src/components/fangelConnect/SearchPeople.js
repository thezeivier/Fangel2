import React, {useState, useEffect, useContext} from 'react';
import {Redirect} from 'react-router-dom'
import { useStateIfMounted } from 'use-state-if-mounted'
import { AppContext } from '../../App';
import {useFirestore, useStorage} from 'reactfire'
import Wrapper from './../general/Wrapper'
import { PeopleContainer, TextBodyStyled, SearchPeopleContainer, ButtonAccionStyled } from './styles/sSearchPeople'
import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'
import { fangelConnectAnalizer, cancelFangelConnectRefactorized, fangelConnectCreator} from './algorithms/fangelConnectAnalizer'
import { createFangelConnectSpace } from './algorithms/createFangelConnectSpace'
import { ReactComponent as CloseSVG } from '../general/icons/close.svg'

const SearchPeople = ({ modalIsOpen }) => {
  const firestore = useFirestore()
  const storage =  useStorage()
  const [fangelConnectFromDB, setFangelConnectFromDB] = useStateIfMounted(null)
  const [idOfFangelConnect, setIdOfFangelConnect] = useStateIfMounted(null)
  const [existJoinner, setExistJoinner] = useStateIfMounted(null)
  const [existCreator, setExistCreator] = useStateIfMounted(null)
  const [roomOfConnectionActive, setRoomOfConnectionActive] = useStateIfMounted(false)
  const [joinnerProfileThumb, setJoinnerProfileThumb] = useStateIfMounted(null)
  const { userFromDB, setFangelConnectProvider, profileThumb, fangelScore } = useContext(AppContext)

  useEffect(async()=>{
    const idOfConnect = !fangelConnectFromDB ? await fangelConnectAnalizer(firestore, userFromDB, fangelScore): idOfFangelConnect//Siempre retorna el id del documento de fangelConnect
    setIdOfFangelConnect(idOfConnect)
    if(idOfConnect){
      var unsubscribeFangelConnect = firestore.collection("fangelConnect").doc(idOfConnect).onSnapshot(querySnapshot=>{
        setFangelConnectFromDB(querySnapshot.data())
        setFangelConnectProvider(querySnapshot.data())//Envío de datos al AppContext para después recuperarlos en la videollamada.
        setExistJoinner(querySnapshot.data()?.dataFromJoinner) //Corroboración de la existencia del joinner unido.
        setExistCreator(querySnapshot.data()?.dataFromCreator) //Corroboración de la existencia del creator unido.
      })
      var unsubscribeRoomFangelConnect = firestore.collection("communities").doc(idOfConnect).onSnapshot(querySnapshot =>{
        if(querySnapshot.exists){
          setRoomOfConnectionActive(true)
        }
      })
    }


    return () =>{
      if(unsubscribeFangelConnect) unsubscribeFangelConnect()
      if(unsubscribeRoomFangelConnect) unsubscribeRoomFangelConnect()
    } ;


  },[firestore, storage])

  const cancelFangelConnect = async() => { //Cancelar búsqueda en fangelConnect
    await cancelFangelConnectRefactorized(firestore, userFromDB, existJoinner, existCreator, fangelConnectFromDB, idOfFangelConnect)
  }

  // const ignoreConnection = async() =>{
  //   await cancelFangelConnect();
  //   setIdOfFangelConnect(await fangelConnectCreator(firestore, userFromDB))
  //   setExistJoinner(null)
  //   setFangelConnectFromDB(null)
  //   setExistCreator(null)
  //   setForceRender(forceRender + 1)
  // }

  if(existCreator && existJoinner){
    var dataFromOtherUser = null
    if(existCreator.uid === userFromDB.uid){
      dataFromOtherUser = existJoinner
      createFangelConnectSpace(firestore, existCreator, existJoinner, idOfFangelConnect)    
    }else{
      dataFromOtherUser = existCreator
    }
    if(!dataFromOtherUser.photoUrl){
      if(dataFromOtherUser.bucket && dataFromOtherUser.route){
        const profileImageReference = storage.refFromURL(`gs://${dataFromOtherUser.bucket}/${dataFromOtherUser.route}`)
        profileImageReference.getDownloadURL().then(url => {//Recuperar foto de perfil del usuario que se unirá a la llamada.
          setJoinnerProfileThumb(url)
        })
      }
    }else{
      setJoinnerProfileThumb(dataFromOtherUser.photoUrl)
    }
  }

  return (
    <main>
      <Wrapper>
        <SearchPeopleContainer>
          {!(existJoinner && existCreator)&&
            <CloseSVG className="closeSVGSearchPeople" onClick={()=>{
                  modalIsOpen();
                  cancelFangelConnect();
            }}/>
          
          }
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
            {/* {existJoinner && existCreator?
              (<section className="buttonsAccionContainer">
                <ButtonAccionStyled>Conectar</ButtonAccionStyled>
                <ButtonAccionStyled onClick={ignoreConnection}>Ignorar</ButtonAccionStyled>
              </section>):
              <span>Buscando...</span>
            } */}

            {existJoinner && existCreator?
              (<section className="buttonsAccionContainer">
                {roomOfConnectionActive?
                  <Redirect to={{pathname: `/room/${idOfFangelConnect}`, 
                  state: 
                  {
                    origin: "searchPeople"
                  }
                }}/>:
                  "Creando un contexto amistoso..."
                }
              </section>):
              <span>Buscando...</span>
            }
            <div>
              {joinnerProfileThumb && existJoinner? //Foto de perfil de usuario encontrado
                <img src={joinnerProfileThumb}/>:
                <ProfileSVG />
              }
              <p>
                {(existCreator &&(existCreator.uid === userFromDB.uid))? //Nombre completo de usuario encontrado
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
          {!(existJoinner && existCreator)&&
            <a onClick={()=>{
              modalIsOpen();
              cancelFangelConnect();
            }}>Cancelar busqueda</a>
          }
        </SearchPeopleContainer>
      </Wrapper>
    </main>
  );
}

export default SearchPeople;
