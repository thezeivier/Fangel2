import React from 'react';
import Wrapper from './../general/Wrapper'
import EmbedVideo from './EmbedVideo'
import CommentsBox from './CommentsBox'
import InputComments from './InputComments'
import { ContainerResponsive, MainOnlyDesktop } from './styles/sMainVideo'

const VideoUser = () => {
  return (
    <MainOnlyDesktop>
      <EmbedVideo src="https://www.youtube.com/watch?v=c0aQkYxjMdI" />
      <Wrapper heightCommunityVideo="100%">
        <ContainerResponsive>
          <CommentsBox />
          <InputComments />
        </ContainerResponsive>
      </Wrapper>
    </MainOnlyDesktop>
  );
}

export default VideoUser;
