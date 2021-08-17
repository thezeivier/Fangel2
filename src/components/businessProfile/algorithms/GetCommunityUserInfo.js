import { useState, useEffect } from 'react'
import { useFirestore } from 'reactfire'
import { /* useRouteMatch, */ useHistory }  from 'react-router-dom'

export const GetCommunityUserInfo = (collection, creatorUid) => {
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(false)
  const [ communityData, setCommunityData] = useState([])

  const history = useHistory()
  const firestore = useFirestore()
  
  useEffect(() => {
    const unsubscribe = firestore.collection(collection).where("creatorUid", "==", creatorUid).onSnapshot(userInfo => {
        if(userInfo.empty) {
          console.error("No existen datos")
          history.push("/")
          return null 
        } else {
          const collectionData = userInfo.docs.map(doc => {
            return {
              id: doc.id,
              ...doc.data()
            }
          })
          setCommunityData(collectionData)
          setLoading(false)
        }
    }, err => {
      setError(true)
      console.error("Error", err.message)
      history.push("/register")
    })
      
    return () => unsubscribe()
  }, [collection, creatorUid])

  return [communityData, loading, error]
}

