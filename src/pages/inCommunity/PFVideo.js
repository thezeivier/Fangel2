import React from 'react';
import MainPFVideoUser from './../../components/community/MainPFVideoUser'

const PFVideo = ({children, communityGlobalData}) => {
  return (
    <div>
      <MainPFVideoUser children={children} communityGlobalData={communityGlobalData}/>
    </div>
  );
}

export default PFVideo;
