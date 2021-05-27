export const  deleteSpaceAndMessages = (path, creatorUid, firebase) => {
    var deleteFn = firebase.functions().httpsCallable('deleteSocialSpaces');
    deleteFn({ 
        path: path,
        creatorUid,
    })
        .then(function(result) {
            // logMessage('Delete success: ' + JSON.stringify(result));
            window.location.reload()
            // console.warn('Delete success: ' + JSON.stringify(result))
        })
        .catch(function(err) {
            console.warn('Delete failed, see console');
            console.warn(err);
        });
}