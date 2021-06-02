import React, {useState, useEffect, useContext} from 'react';
import { useStateIfMounted } from 'use-state-if-mounted'
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
  const [fangelConnectFromDB, setFangelConnectFromDB] = useStateIfMounted(null)
  const [idOfFangelConnect, setIdOfFangelConnect] = useStateIfMounted(null)
  const [joinnerProfileThumb, setjoinnerProfileThumb] = useStateIfMounted(null)
  const { userFromDB, authState, profileThumb } = useContext(AppContext)
  useEffect(async()=>{
    const idOfConnect = await fangelConnectAnalizer(firestore, userFromDB) //Si retorna wait, este usuario es el creador
    setIdOfFangelConnect(idOfConnect)
    var unsubscribe = null
    if(idOfConnect){
      unsubscribe = firestore.collection("fangelConnect").doc(idOfConnect).onSnapshot(querySnapshot=>{
        setFangelConnectFromDB(querySnapshot.data())
        if(!querySnapshot.exists){
          setjoinnerProfileThumb(null)
        }
      }, (error) => {
        console.log(error)
      })
    }

    return () =>{
      if(unsubscribe){
        unsubscribe()
      }
    } ;
  },[firestore, storage])

  const cancelFangelConnect = async() => {
    try {
      const fangelConnectRef = firestore.collection("fangelConnect")
      if(fangelConnectFromDB && fangelConnectFromDB.dataFromJoinner && fangelConnectFromDB.dataFromJoinner.uid === userFromDB.uid){
        await fangelConnectRef.doc(idOfFangelConnect).set(
          {
            dataFromJoinner: firestore.app.firebase_.firestore.FieldValue.delete(),
            joinnerPreferences: firestore.app.firebase_.firestore.FieldValue.delete(),
            state: "open"
          },
          {merge: true}
        )
      }else{
        await fangelConnectRef.doc(userFromDB.uid).delete()
      }
    }catch{
      throw console.log("Ya no existe")
    }
  }

  if(fangelConnectFromDB && fangelConnectFromDB.dataFromJoinner){
    var dataFromUser = null
    if(fangelConnectFromDB.dataFromJoinner.uid === userFromDB.uid){
      dataFromUser = fangelConnectFromDB.dataFromCreator
    }else{
      dataFromUser = fangelConnectFromDB.dataFromJoinner
    }
    if(dataFromUser && dataFromUser.bucket && dataFromUser.route){
      const profileImageReference = storage.refFromURL(`gs://${dataFromUser.bucket}/${dataFromUser.route}`)
      profileImageReference.getDownloadURL().then(url => {//Recuperar foto de perfil del usuario que se unirá a la llamada.
        setjoinnerProfileThumb(url)
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
            {fangelConnectFromDB?
              <span>Conectando</span>:
              <span>Estableciendo conexión</span>
            }
            {joinnerProfileThumb?
              <img src={joinnerProfileThumb}/>:
              <ProfileSVG />
            }
            {(fangelConnectFromDB && fangelConnectFromDB.dataFromCreator && (fangelConnectFromDB.dataFromCreator.uid === userFromDB.uid))?
              <p>
                {(fangelConnectFromDB && fangelConnectFromDB.dataFromJoinner)&& (
                  fangelConnectFromDB.dataFromJoinner.name? 
                  `${fangelConnectFromDB.dataFromJoinner.name.firstName} ${fangelConnectFromDB.dataFromJoinner.name.lastName? fangelConnectFromDB.dataFromJoinner.name.lastName: ""}`:
                   fangelConnectFromDB.dataFromJoinner.username
                )}
              </p>:
              <p>
                {(fangelConnectFromDB && fangelConnectFromDB.dataFromCreator)&& (
                  fangelConnectFromDB.dataFromCreator.name? 
                  `${fangelConnectFromDB.dataFromCreator.name.firstName} ${fangelConnectFromDB.dataFromCreator.name.lastName? fangelConnectFromDB.dataFromCreator.name.lastName: ""}`:
                  fangelConnectFromDB.dataFromCreator.username
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
