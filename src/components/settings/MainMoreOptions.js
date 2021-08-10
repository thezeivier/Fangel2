import React from 'react'
import Wrapper from './../general/Wrapper'
import DarkMode from './../general/DarkMode'
import SettingsOption from './SettingsOption'
import ReturnPage from './../general/ReturnPage'
import { TitleStyled, SubtitleStyled } from './../../themes/internalRecyclableStyles'
import { Top, ListOptions, CategoryOptionsContainer } from './styles/sMainSettings'

import { ReactComponent as ExitSVG } from './icons/exit.svg'
import { ReactComponent as ReportProblemSVG } from './icons/reportProblem.svg'
import { ReactComponent as DashboardSVG } from './icons/dashboard.svg'
import { ReactComponent as BusinessSpaceSVG } from './icons/businessSpace.svg'
import { ReactComponent as BlogSVG } from './icons/blog.svg'

const listOptionsGeneral = [
  {
    id: 1,
    svg: <BlogSVG className="icon" />,
    name: 'Blog de Fangel',
    to: '/#'
  }, {
    id: 2,
    svg: <ReportProblemSVG className="icon" />,
    name: 'Reportar un problema',
    to: '/report'
  }, {
    id: 3,
    svg: <ExitSVG className="icon" />,
    name: 'Salir de la cuenta',
    to: false
  }
]

const listOptionsDashBoard = [
  {
    id: 1,
    svg: <DashboardSVG className="icon" />,
    name: 'Espacios creados',
    to: '/dashboard/my-spaces'
  }, {
    id: 2,
    svg: <BusinessSpaceSVG className="icon" />,
    name: 'Crear perfil para empresas',
    to: '/create-business-profile'
  },
]

const MainSettings = () => {
  
  return (
    <main>
      <Wrapper>
        <TitleStyled bottom>Más opciones</TitleStyled>
        <Top>
          <SubtitleStyled bottom15>Tema</SubtitleStyled>
          <DarkMode textExtend/>
        </Top>
        <CategoryOptionsContainer>
          <SubtitleStyled bottom14>Dashboard</SubtitleStyled>
          <ListOptions>
            {
              listOptionsDashBoard.map((option) => <SettingsOption key={option.id} {...option} />)
            }
          </ListOptions>
        </CategoryOptionsContainer>
        <CategoryOptionsContainer>
          <SubtitleStyled bottom14>General</SubtitleStyled>
          <ListOptions>
            {
              listOptionsGeneral.map((option) => <SettingsOption key={option.id} {...option} />)
            }
          </ListOptions>
        </CategoryOptionsContainer>
      </Wrapper>
      <ReturnPage />
    </main>
  );
}

export default MainSettings;
