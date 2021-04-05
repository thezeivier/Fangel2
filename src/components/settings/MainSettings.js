import React from 'react'
import Wrapper from './../general/Wrapper'
import DarkMode from './../general/DarkMode'
import SettingsOption from './SettingsOption'
import ReturnPage from './../general/ReturnPage'
import { TitleStyled, SubtitleStyled } from './../../themes/internalRecyclableStyles'
import { Top, ListOptions } from './styles/sMainSettings'

import { ReactComponent as ExitSVG } from './icons/exit.svg'
import { ReactComponent as ReportProblemSVG } from './icons/reportProblem.svg'

const listOptions = [
  {
    id: 1,
    svg: <ReportProblemSVG />,
    name: 'Reportar un problema',
    to: '/report'
  }, {
    id: 2,
    svg: <ExitSVG />,
    name: 'Salir de la cuenta',
    to: false
  }
]

const MainSettings = () => {
  
  return (
    <main>
      <Wrapper>
        <TitleStyled bottom>Configuración</TitleStyled>
        <Top>
          <SubtitleStyled bottom15>Tema</SubtitleStyled>
          <DarkMode textExtend/>
        </Top>
        <div>
          <SubtitleStyled bottom14>General</SubtitleStyled>
          <ListOptions>
            {
              listOptions.map((option) => <SettingsOption key={option.id} {...option} />)
            }
          </ListOptions>
        </div>
      </Wrapper>
      <ReturnPage to={'#'} />
    </main>
  );
}

export default MainSettings;
