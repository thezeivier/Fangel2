import React, {useState, useEffect, useContext} from 'react';
import { AppContext } from '../../App';
import {useFirestore, useStorage} from 'reactfire'
import Wrapper from './../general/Wrapper'
import { PeopleContainer, TextBodyStyled, SearchPeopleContainer } from './styles/sSearchPeople'
import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'
import { fangelConnectAnalizer } from './algorithms/fangelConnectAnalizer'
import { ReactComponent as CloseSVG } from '../general/icons/close.svg'

const SearchPeople = ({ modalIsOpen }) => {
  const firestore = useFirestore()
  const storage =  useStorage()
  const [newUserConnected, setNewUserConnected] = useState(null)
  const [socialSpaceId, setSocialSpaceId] = useState(null)//Identificador especial del espacio social en el que estarán conectados
  const [joinnerProfileThumb, setjoinnerProfileThumb] = useState(null)
  const { userFromDB, authState, profileThumb } = useContext(AppContext)
  useEffect(async()=>{
    const result = await fangelConnectAnalizer(firestore, userFromDB) //Si retorna wait, este usuario es el creador
    var unsubscribe = null
    if(typeof result === "string"){
      setSocialSpaceId(result)
      unsubscribe = firestore.collection("fangelConnect").doc(userFromDB.uid).onSnapshot(querySnapshot=>{
        setNewUserConnected(querySnapshot.data())
      })
    }else{//Si retorna el usuario del creador, entonces este usuario es el joinner
      setNewUserConnected(result)
    }

    return () =>{
      if(unsubscribe){
        unsubscribe()
      }
    } ;
  },[])

  const cancelFangelConnect = () => {
    firestore.collection("fangelConnect").doc(userFromDB.uid).delete()
  }

  if(newUserConnected){
    if(newUserConnected.dataFromJoinner && newUserConnected.dataFromJoinner.bucket && newUserConnected.dataFromJoinner.route){
      const profileImageReference = storage.refFromURL(`gs://${newUserConnected.dataFromJoinner.bucket}/${newUserConnected.dataFromJoinner.route}`)
        profileImageReference.getDownloadURL().then(url => {//Recuperar foto de perfil del usuario que se unirá a la llamada.
          setjoinnerProfileThumb(url)
        })
    }
  }

  return (
    <main>
      <CloseSVG onClick={()=>{
            modalIsOpen();
            cancelFangelConnect();
      }}/>
      <Wrapper>
        <SearchPeopleContainer>
          <TextBodyStyled>Buscando personas con tus mismos intereses</TextBodyStyled>
          <PeopleContainer>
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
            {newUserConnected?
              <span>Conectando</span>:
              <span>Estableciendo conexión</span>
            }
            {joinnerProfileThumb?
              <img src={joinnerProfileThumb}/>:
              <ProfileSVG />
            }
            {(newUserConnected && newUserConnected.dataFromJoinner) &&
              <p>
                {newUserConnected.dataFromJoinner.name? 
                  `${newUserConnected.dataFromJoinner.name.firstName} ${newUserConnected.dataFromJoinner.name.lastName? newUserConnected.dataFromJoinner.name.lastName: ""}`:
                   newUserConnected.dataFromJoinner.username
                }
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
