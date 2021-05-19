import { useState, useEffect } from 'react'
import { useFirestore } from 'reactfire'
import { /* useRouteMatch, */ useHistory }  from 'react-router-dom'

export const GetCommunitySubspaceData = (roomId, idSubSpace) => {
  const [ loadingSubSpace, setLoading ] = useState(true)
  const [ errorSubSpace, setError ] = useState(false)
  const [ dataSubSpace, setUserData] = useState([])

  const history = useHistory()
  const firestore = useFirestore()
  
  useEffect(() => {
    const unsubscribe = firestore.collection("communities").doc(roomId).collection("subSpace").where("id", "==", idSubSpace).onSnapshot(userInfo => {
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

  return [loadingSubSpace, errorSubSpace, dataSubSpace]
}

