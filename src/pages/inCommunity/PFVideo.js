import React from 'react';
import MainPFVideoUser from './../../components/community/MainPFVideoUser'

const PFVideo = ({children, communityGlobalData, setCommunityGlobalData}) => {
  return (
    <div>
      <MainPFVideoUser children={children} setCommunityGlobalData={setCommunityGlobalData} communityGlobalData={communityGlobalData}/>
    </div>
  );
}

export default PFVideo;
