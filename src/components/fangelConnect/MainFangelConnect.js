import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import Wrapper from './../general/Wrapper'
import ModalGeneral from './../modal/ModalGeneral'
import SearchPeople from './SearchPeople'
import { TitleStyled, ButtonStyled, OnlyDesktop, SubtitleStyled } from './../../themes/internalRecyclableStyles'
import { TextBody } from './../../themes/externalRecyclableStyles'
import { FieldSet } from './../createCommunity/styles/sMainCreateCommunity'

const MainFangelConnect = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalOpen = () => setModalIsOpen(!modalIsOpen)

  const { register, handleSubmit, errors } = useForm()

  const onSubmit = async data => {
  }

  return (
    <main>
      <Wrapper>
        <TitleStyled bottom>Fangel Connect</TitleStyled>
        <TextBody bottom20>
          Fangel Connect te impulsa a establecer conexiones con otras personas.
        </TextBody>
        <OnlyDesktop>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <SubtitleStyled>Escoge una modalidad</SubtitleStyled>
              <FieldSet>
                <label className="radiosContainerFlex__item">
                  <input type="radio" defaultChecked id="private" name="privacy" value="private" />
                  <span className="rCCheckmark"></span>
                  Individual <span className="spanRadiosDescription">(Con una persona)</span>
                </label>
              </FieldSet>
            </div>
            <TextBody top24>
              Cuando una persona o varias personas coincidan con tus mismos gustos y preferencias, todos ingresarán a un espacio social.
            </TextBody>
            <ButtonStyled primary type="submit" onClick={modalOpen}>Iniciar Connect</ButtonStyled>
          </form>
        </OnlyDesktop>
        <ModalGeneral needRender={"n"} modalIsOpen={modalOpen} modalOpen={modalIsOpen}>
          <SearchPeople modalIsOpen={modalOpen} />
        </ModalGeneral>
      </Wrapper>
    </main>
  );
}

export default MainFangelConnect;
