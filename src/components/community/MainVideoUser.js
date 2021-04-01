import React from 'react';
import styled from 'styled-components'
import Wrapper from './../general/Wrapper'
import EmbedVideo from './EmbedVideo'
import CommentsBox from './CommentsBox'
import InputComments from './InputComments'
import { ContainerResponsive } from './styles/sMainVideo'

const VideoUser = () => {
  return (
    <main>
      <EmbedVideo src="https://www.youtube.com/watch?v=c0aQkYxjMdI" />
      <Wrapper heightCommunityVideo="100%">
        <ContainerResponsive>
          <CommentsBox />
          <InputComments />
        </ContainerResponsive>
      </Wrapper>
    </main>
  );
}

export default VideoUser;
