export const IsSpeaker = (speakers, myEmail) => {
    const result = speakers.find(mail => mail == myEmail)
    return result ? true : false
}