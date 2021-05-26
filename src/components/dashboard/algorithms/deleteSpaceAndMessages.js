export const  deleteSpaceAndMessages = (path, firebase) => {
    var deleteFn = firebase.functions().httpsCallable('recursiveDelete');
    deleteFn({ path: path })
        .then(function(result) {
            // logMessage('Delete success: ' + JSON.stringify(result));
            console.warn('Delete success: ' + JSON.stringify(result))
        })
        .catch(function(err) {
            console.warn('Delete failed, see console,');
            console.warn(err);
        });
}