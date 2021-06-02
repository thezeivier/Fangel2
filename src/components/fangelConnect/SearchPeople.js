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
  const [fangelConnectFromDB, setFangelConnectFromDB] = useStateIfMounted(null)
  const [reRenderComponent, setReRenderComponet] = useStateIfMounted(0)
  const [idOfFangelConnect, setIdOfFangelConnect] = useStateIfMounted(null)
  const [joinnerProfileThumb, setjoinnerProfileThumb] = useStateIfMounted(null)
  const { userFromDB, authState, profileThumb } = useContext(AppContext)

  useEffect(async()=>{
    var unsubscribe = null
    const idOfConnect = await fangelConnectAnalizer(firestore, userFromDB) //Si retorna wait, este usuario es el creador
    setIdOfFangelConnect(idOfConnect)
    var unsubscribe = null
    if(idOfConnect){
      unsubscribe = firestore.collection("fangelConnect").doc(idOfConnect).onSnapshot(querySnapshot=>{
        setFangelConnectFromDB(querySnapshot.data())
        if(!querySnapshot.exists){
          setjoinnerProfileThumb(null)
        }
        if(querySnapshot.exists && querySnapshot.data() && !querySnapshot.data().fangelScoreFromCreator){
          setReRenderComponet(reRenderComponent + 1)
        }
      })
    }

    return () =>{
      if(unsubscribe){
        unsubscribe()
      }
    } ;
  },[firestore, storage, reRenderComponent])
  
  const existAnUserMatchingWithMe = fangelConnectFromDB?.dataFromJoinner //Corroboración de la existencia de un usuario unido.

  const cancelFangelConnect = async() => {
    try {
      const fangelConnectRef = firestore.collection("fangelConnect")
      if(fangelConnectFromDB && existAnUserMatchingWithMe && existAnUserMatchingWithMe.uid === userFromDB.uid){
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

  if(fangelConnectFromDB && existAnUserMatchingWithMe){
    var dataFromUser = null
    if(existAnUserMatchingWithMe.uid === userFromDB.uid){
      dataFromUser = fangelConnectFromDB.dataFromCreator
    }else{
      dataFromUser = existAnUserMatchingWithMe
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
            {existAnUserMatchingWithMe?
              (<section>
                <span>Encontraste una conexión</span>
                <ButtonAccion>Conectar</ButtonAccion>
                <ButtonAccion>Ignorar</ButtonAccion>
              </section>):
              <span>Conectando</span>
            }
            {joinnerProfileThumb?
              <img src={joinnerProfileThumb}/>:
              <ProfileSVG />
            }
            {(fangelConnectFromDB && fangelConnectFromDB.dataFromCreator && (fangelConnectFromDB.dataFromCreator.uid === userFromDB.uid))?
              <p>
                {(fangelConnectFromDB && existAnUserMatchingWithMe)&& (
                  existAnUserMatchingWithMe.name? 
                  `${existAnUserMatchingWithMe.name.firstName} ${existAnUserMatchingWithMe.name.lastName? existAnUserMatchingWithMe.name.lastName: ""}`:
                   existAnUserMatchingWithMe.username
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
