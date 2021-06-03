import React, {useState, useEffect, useContext} from 'react';
import { useStateIfMounted } from 'use-state-if-mounted'
import { AppContext } from '../../App';
import {useFirestore, useStorage} from 'reactfire'
import Wrapper from './../general/Wrapper'
import { PeopleContainer, TextBodyStyled, SearchPeopleContainer } from './styles/sSearchPeople'
import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'
import { fangelConnectAnalizer, fangelConnectCreator} from './algorithms/fangelConnectAnalizer'
import { ReactComponent as CloseSVG } from '../general/icons/close.svg'
import { ButtonAccion } from '../../components/profile/styles/sMainProfile'

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

  const cancelFangelConnect = async() => {
    try {
      const fangelConnectRef = firestore.collection("fangelConnect")
      if(existJoinner && existCreator){
        if(existJoinner.uid === userFromDB.uid){ 
          //Si el joinner es el usuario que se saldrá, entoces borrará sus datos y actualizará el fangelScoreFromCreator a el del que se queda
  
          await fangelConnectRef.doc(idOfFangelConnect).set(
            {
              dataFromJoinner: firestore.app.firebase_.firestore.FieldValue.delete(),
              joinnerPreferences: firestore.app.firebase_.firestore.FieldValue.delete(),
              state: "open",
              fangelScoreFromCreator: existCreator.score? existCreator.score.fangelScore: 65,
            },
            {merge: true}
          )
        }else if(existCreator.uid === userFromDB.uid){
          //Si el creator es el usuario que se saldrá, entoces borrará sus datos y actualizará el fangelScoreFromCreator a el del que se queda
          await fangelConnectRef.doc(idOfFangelConnect).set(
            {
              dataFromCreator: existJoinner,
              creatorPreferences: fangelConnectFromDB.joinnerPreferences,
              dataFromJoinner: firestore.app.firebase_.firestore.FieldValue.delete(),
              joinnerPreferences: firestore.app.firebase_.firestore.FieldValue.delete(),
              state: "open",
              fangelScoreFromCreator:  existJoinner.score? existJoinner.score.fangelScore: 65,
            },
            {merge: true}
          )
        }
      }else{
        fangelConnectRef.doc(idOfFangelConnect).delete()
      }
    }catch{
      throw console.log("Ya no existe")
    }
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
            {existJoinner && existCreator?
              (<section>
                <span>Encontraste una conexión</span>
                <ButtonAccion>Conectar</ButtonAccion>
                <ButtonAccion>Ignorar</ButtonAccion>
              </section>):
              <span>Conectando</span>
            }
            {joinnerProfileThumb && existJoinner?
              <img src={joinnerProfileThumb}/>:
              <ProfileSVG />
            }
            {(existCreator && (existCreator.uid === userFromDB.uid))?
              <p>
                {existJoinner && (
                  existJoinner.name? 
                  `${existJoinner.name.firstName} ${existJoinner.name.lastName? existJoinner.name.lastName: ""}`:
                  existJoinner.username
                )}
              </p>:
              <p>
                {existCreator && (
                  existCreator.name? 
                  `${existCreator.name.firstName} ${existCreator.name.lastName? existCreator.name.lastName: ""}`:
                   existCreator.username
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
