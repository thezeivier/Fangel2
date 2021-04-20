import { useState, useEffect } from 'react'
import { useFirestore } from 'reactfire'
import { /* useRouteMatch, */ useHistory }  from 'react-router-dom'

export const GetCommunityVideoData = (roomId) => {
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(false)
  const [ data, setUserData] = useState([])

  const history = useHistory()
  const firestore = useFirestore()
  
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
      history.push("/register")
    })
      
    return () => unsubscribe()
  }, [])

  return [data, loading, error]
}

