export const GetAdminCommunity = (creatorUid, userUid) => {
    if(creatorUid !== userUid) {
        return false
    }
    return true
}
