import React from 'react';
import Wrapper from './../general/Wrapper'
import { SubtitleStyled, TitleStyled } from './../../themes/internalRecyclableStyles'
import { SubtitleSmallStyled, TextContainer, TextStyled, TextList,
         DetailsContainer } from './styles/sMainSupport'

const MainFAQs = () => {
  return (
    <main>
      <Wrapper>
        <TitleStyled>Preguntas frecuentes</TitleStyled>
        <DetailsContainer>
          <SubtitleStyled big summary as="summary">Preguntas generales</SubtitleStyled>
          <div>
            <TextContainer>
              <SubtitleSmallStyled as="h4" question>¿Qué es Fangel?</SubtitleSmallStyled>
              <TextStyled>
                Fangel es un lugar donde puedes encontrar y conocer a personas con tus mismos gustos e ideas.
              </TextStyled>
            </TextContainer>
            <TextContainer>
              <SubtitleSmallStyled as="h4" question>¿Cómo funciona Fangel?</SubtitleSmallStyled>
              <TextStyled>
                Crea una comunidad de cualquier tema. ¿Te gusta el cine, la tecnología o simplemente hacer chacota? Fangel te ofrece el espacio para hacerlo.
              </TextStyled>
            </TextContainer>
            <TextContainer>
              <SubtitleSmallStyled as="h4" question>¿Cómo puedo ser un usuario de Fangel?</SubtitleSmallStyled>
              <TextStyled>
                Tienes que ser invitado por algún usuario registrado en Fangel, esta persona te proporcionará un código que usarás en el <b>registro</b>.
              </TextStyled>
            </TextContainer>
            <TextContainer>
              <SubtitleSmallStyled as="h4" question>¿Qué es una Comunidad en Fangel?</SubtitleSmallStyled>
              <TextStyled>
                Una comunidad en Fangel es un espacio efímero; es decir, una comunidad puede estar activa por un máximo de una hora (tiempo de vida), luego será eliminada automáticamente, haciendo que estas comunidades sean únicas y que no exista otra igual después de ella.
              </TextStyled>
            </TextContainer>
            <TextContainer>
              <SubtitleSmallStyled as="h4" question>¿Se puede extender el tiempo de vida de una Comunidad en Fangel?</SubtitleSmallStyled>
              <TextStyled>
                Claro que sí, se puede extender el tiempo en las <b>configuraciones de la comunidad</b>. Solo los administradores de las comunidades pueden hacerlo.
              </TextStyled>
            </TextContainer>
          </div>
        </DetailsContainer>
        <DetailsContainer>
          <SubtitleStyled big summary as="summary">Preguntas sobre el registro en Fangel</SubtitleStyled>
          <div>
            <TextContainer>
              <SubtitleSmallStyled as="h4" question>¿Cómo me registro en Fangel?</SubtitleSmallStyled>
              <TextStyled>
                Ingresa a <b>Registro</b> rellena los campos obligatorios y por último ingresa el código de invitación de invitación que previamente te brindo un usuario registrado en Fangel.
              </TextStyled>
              <TextStyled secondParagraph>
                También puedes solicitar un código de invitación del <b>Soporte de Fangel</b> enviando un correo a <span>support@fangelweb.com</span> explicando porque requieres crear una comunidad en Fangel y el uso que le darás.
              </TextStyled>
            </TextContainer>
          </div>
        </DetailsContainer>
        <DetailsContainer>
          <SubtitleStyled big summary as="summary">Preguntas sobre las comunidades</SubtitleStyled>
          <div>
            <TextContainer>
              <SubtitleSmallStyled as="h4" question>¿Cómo puedo crear una comunidad?</SubtitleSmallStyled>
              <TextStyled>
                Para crear una comunidad tienes que estar registrado en Fangel. A continuación, solo presionas el recuadro Crear comunidad. Automáticamente serás el administrador de la comunidad creada y podrás proporcionar un código de invitación a otras personas.
              </TextStyled>
            </TextContainer>
            <TextContainer>
              <SubtitleSmallStyled as="h4" question>¿Cómo puedo crear una comunidad?</SubtitleSmallStyled>
              <TextList>
                <li><TextStyled>Pone las reglas aplicables a su comunidad creada</TextStyled></li>
                <li><TextStyled>Extiende el tiempo de vida de su comunidad</TextStyled></li>
                <li><TextStyled>Permite el uso del micrófono y la cámara a los integrantes de su comunidad</TextStyled></li>
                <li><TextStyled>Expulsa a un(a) integrante que no cumpla las reglas de su comunidad</TextStyled></li>
              </TextList>
            </TextContainer>
            <TextContainer>
              <SubtitleSmallStyled as="h4" question>¿Qué puedo hacer en las Comunidades?</SubtitleSmallStyled>
              <TextList>
                <li><TextStyled>Crea discusiones y debates sobre un tema</TextStyled></li>
                <li><TextStyled>Organiza exposiciones o eventos</TextStyled></li>
                <li><TextStyled>Abre un espacio para conocer personas y compartir ideas y experiencias</TextStyled></li>
                <li><TextStyled>O simplemente haz una fiesta</TextStyled></li>
              </TextList>
            </TextContainer>
            <TextContainer>
              <SubtitleSmallStyled as="h4" question>¿Que no puedo hacer en las Comunidades?</SubtitleSmallStyled>
              <TextList>
                <li><TextStyled>Insultos</TextStyled></li>
                <li><TextStyled>Gestos obscenos</TextStyled></li>
                <li><TextStyled>Representaciones obscenas</TextStyled></li>
                <li><TextStyled>Cualquier tipo de discriminación</TextStyled></li>
                <li><TextStyled>Revelar información muy personal</TextStyled></li>
              </TextList>
            </TextContainer>
            <TextContainer>
              <SubtitleSmallStyled as="h4" question>¿Puedo crear más de una comunidad?</SubtitleSmallStyled>
              <TextStyled>
                Puedes crear las comunidades que quieras para el fin que desees. (No se permite la creación de una comunidad para fines delictivos)
              </TextStyled>
            </TextContainer>
          </div>
        </DetailsContainer>
        <DetailsContainer>
          <SubtitleStyled big summary as="summary">Otras preguntas</SubtitleStyled>
          <div>
            <TextContainer>
              <SubtitleSmallStyled as="h4" question>¿Cómo puedo colaborar con el proyecto o enviar recomendaciones?</SubtitleSmallStyled>
              <TextStyled>
              Envíanos un correo a <span>support@fangelweb.com</span> con el asunto “Colaboración al proyecto” y procesaremos de inmediato tu recomendación.
              </TextStyled>
            </TextContainer>
            <TextContainer>
              <SubtitleSmallStyled as="h4" question>¿Cómo puedo trabajar en Fangel?</SubtitleSmallStyled>
              <TextList>
                <TextStyled>Envía un correo a <span>support@fangelweb.com</span> con el asunto “Me gustaría trabajar en Fangel” y una breve explicación de lo que haces, también puedes enviarnos tu portafolio o tu CV.</TextStyled>
              </TextList>
            </TextContainer>
          </div>
        </DetailsContainer>
      </Wrapper>
    </main>
  );
}

export default MainFAQs;
