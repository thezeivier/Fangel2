import React, {useState, useEffect, useContext} from 'react';
import { useStateIfMounted } from 'use-state-if-mounted'
import { AppContext } from '../../App';
import {useFirestore, useStorage} from 'reactfire'
import Wrapper from './../general/Wrapper'
import { PeopleContainer, TextBodyStyled, SearchPeopleContainer } from './styles/sSearchPeople'
import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'
import { fangelConnectAnalizer } from './algorithms/fangelConnectAnalizer'
import { ReactComponent as CloseSVG } from '../general/icons/close.svg'
import { ButtonAccion } from '../../components/profile/styles/sMainProfile'

const SearchPeople = ({ modalIsOpen }) => {
  const firestore = useFirestore()
  const storage =  useStorage()
  const [newUserConnected, setNewUserConnected] = useStateIfMounted(null)
  const [joinnerProfileThumb, setjoinnerProfileThumb] = useStateIfMounted(null)
  const { userFromDB, authState, profileThumb } = useContext(AppContext)
  useEffect(async()=>{
    const idOfSpace = await fangelConnectAnalizer(firestore, userFromDB) //Si retorna wait, este usuario es el creador
    var unsubscribe = null
    if(idOfSpace){
      unsubscribe = firestore.collection("fangelConnect").doc(idOfSpace).onSnapshot(querySnapshot=>{
        setNewUserConnected(querySnapshot.data())
      })
    }

    return () =>{
      if(unsubscribe){
        unsubscribe()
      }
    } ;
  },[])

  const cancelFangelConnect = () => {
    try {
      firestore.collection("fangelConnect").doc(userFromDB.uid).delete()
    }catch{
      throw console.log("Ya no existe")
    }
  }

  if(newUserConnected && newUserConnected.dataFromJoinner){
    var dataFromUser = null
    if(newUserConnected.dataFromJoinner.uid === userFromDB.uid){
      dataFromUser = newUserConnected.dataFromCreator
    }else{
      dataFromUser = newUserConnected.dataFromJoinner
    }
    if(dataFromUser && dataFromUser.bucket && dataFromUser.route){
      const profileImageReference = storage.refFromURL(`gs://${dataFromUser.bucket}/${dataFromUser.route}`)
      profileImageReference.getDownloadURL().then(url => {//Recuperar foto de perfil del usuario que se unirá a la llamada.
        setjoinnerProfileThumb(url)
      })
    }
  } 

  const existAnUserMatchingWithMe = newUserConnected?.dataFromJoinner 

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
              {profileThumb?
                <img src={profileThumb}/>:
                <ProfileSVG />
              }
              {userFromDB &&
                <p>
                  {userFromDB.name? 
                    `${userFromDB.name.firstName} ${userFromDB.name.lastName? userFromDB.name.lastName: ""}`: 
                    userFromDB.username
                  }
                </p>
              }
            </div>
            {existAnUserMatchingWithMe?
              (<main>
                <span>Encontraste una conexión</span>
                <ButtonAccion>Conectar</ButtonAccion>
                <ButtonAccion>Ignorar</ButtonAccion>
              </main>):
              <span>Estableciendo conexión</span>
            }
            {joinnerProfileThumb?
              <img src={joinnerProfileThumb}/>:
              <ProfileSVG />
            }
            {(newUserConnected && newUserConnected.dataFromCreator && (newUserConnected.dataFromCreator.uid === userFromDB.uid))?
              <p>
                {(newUserConnected && newUserConnected.dataFromJoinner)&& (
                  newUserConnected.dataFromJoinner.name? 
                  `${newUserConnected.dataFromJoinner.name.firstName} ${newUserConnected.dataFromJoinner.name.lastName? newUserConnected.dataFromJoinner.name.lastName: ""}`:
                   newUserConnected.dataFromJoinner.username
                )}
              </p>:
              <p>
                {(newUserConnected && newUserConnected.dataFromCreator)&& (
                newUserConnected.dataFromCreator.name? 
                  `${newUserConnected.dataFromCreator.name.firstName} ${newUserConnected.dataFromCreator.name.lastName? newUserConnected.dataFromCreator.name.lastName: ""}`:
                  newUserConnected.dataFromCreator.username
                )}
              </p>
            }
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
