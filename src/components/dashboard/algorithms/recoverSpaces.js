export const recoverSpaces = async (firestore, authState) => {
    const spacesRef = firestore.collection("communities").where("creatorUid", "==", authState.uid)
    return spacesRef.get().then((result) =>{
        if(result.empty){
            console.log("vacío")
            return false;
        }else{
            const organizedSpaces = {
                public: [], 
                private: [],
            }
            result.docs.map(doc=>{
                if(doc.data().privacy === "public"){
                    organizedSpaces.public.push(doc.data())
                }else{
                    organizedSpaces.private.push(doc.data())
                }
            });
            return organizedSpaces
        }
    })
}