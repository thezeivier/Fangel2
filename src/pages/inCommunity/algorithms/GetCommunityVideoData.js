import { useState, useEffect, useContext } from 'react'
import { useFirestore } from 'reactfire'
import { useRouteMatch, useHistory }  from 'react-router-dom'
import { AppContext } from '../../../App'

export const GetCommunityVideoData = (roomId) => {
  const route = useRouteMatch()
  const { routeProviderRoom } =  useContext(AppContext)
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(false)
  const [ data, setUserData] = useState([])

  const history = useHistory()
  const firestore = useFirestore()
  
  const location = {
    pathname: "/register"
  }

  
  useEffect(() => {
    routeProviderRoom.setRouteShareRoom(route.url)
  }, [])
  
  useEffect(() => {
    const unsubscribe = firestore.collection("communities").where("roomName", "==", roomId).onSnapshot(userInfo => {
      if(userInfo.empty) {
        console.error("Tiempo finalizado - Comunidad Cerrada")
        history.push("/")
          return null 
        } else {
          const collectionData = userInfo.docs.map(doc => {
            return {
              id: doc.id,
              ...doc.data()
            }
          })
          setUserData(collectionData)
          setLoading(false)
        }
      }, err => {
        setError(true)
        console.error("Error", err.message)
        history.push(location)
    })
      
    return () => unsubscribe()
  }, [])

  return [data, loading, error]
}

