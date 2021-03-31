import React from 'react';
import Wrapper from './../general/Wrapper'
import ReturnPage from './../general/ReturnPage'
import UserTag from './UserTag'
import { TitleStyled, TextStyled } from './../../themes/internalRecyclableStyles'
import { UserContainer, ListTags, AddPhotoContainer } from './styles/sMainProfile'

import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'
import { ReactComponent as AddPhotoSVG } from './icons/addPhoto.svg'

const userTags = [
  {
    id: 0,
    category: 'Música',
  }, {
    id: 1,
    category: 'Deportes',
  }, {
    id: 2,
    category: 'Teconologia',
  }, {
    id: 3,
    category: 'Salud',
  }, {
    id: 4,
    category: 'Fiesta',
  },
]

const colorGenerator = () => {
  let hexadecimal = "0123456789ABCDEF"
  let color = "#"

  for(let i = 1; i <= 6; i++) {
    color = color + hexadecimal[Math.floor(Math.random() * 16)]
    
    if (color.length > 6) return color
  }
}

const MainProfile = () => {
  return (
    <main>
      <Wrapper>
        <UserContainer>
          <ProfileSVG />
          {/*       
          <AddPhotoContainer> **Solo para usuarios propios**
            <AddPhotoSVG />
            <span>Cambiar foto</span>
          </AddPhotoContainer>
          */}
          <h4>Thezeivier</h4>
        </UserContainer>
        <ListTags>
          {
            userTags.map((tag) => <UserTag key={tag.id} category={tag.category} color={colorGenerator()} />)
          }
        </ListTags>
      </Wrapper>
      <ReturnPage />
    </main>
  );
}

export default MainProfile;
