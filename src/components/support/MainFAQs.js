import React from 'react';
import Wrapper from './../general/Wrapper'
import { SubtitleStyled, TitleStyled } from './../../themes/internalRecyclableStyles'
import { SubtitleSmallStyled, TextContainer, TextStyled, TextList,
         DetailsContainer } from './styles/sMainSupport'

const MainFAQs = () => {
  return (
    <main>
      <Wrapper>
        <TitleStyled bottom>Preguntas frecuentes</TitleStyled>
        <DetailsContainer>
          <SubtitleStyled big summary green as="summary">Preguntas generales</SubtitleStyled>
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
                Crea o únete a un Espacio social de cualquier tema. ¿Te gusta el cine, la tecnología o simplemente conocer nuevas personas? Fangel te ofrece el espacio para hacerlo.
              </TextStyled>
            </TextContainer>
            <TextContainer>
              <SubtitleSmallStyled as="h4" question>¿Qué es y para qué sirve un código de invitacion de Fangel?</SubtitleSmallStyled>
              <TextStyled>
                Con el código de invitacion de podras registrar en Fangel. Exiten dos tipos de código: Para usuarios, de la forma <b>g6xFXUqxgBXQ</b> (no pueden crear Espacios sociales) y para administradores, de la forma <b>adminX2x5Xfx</b> (pueden crear Espacios sociales).
              </TextStyled>
            </TextContainer>
            <TextContainer>
              <SubtitleSmallStyled as="h4" question>¿Cómo puedo ser un usuario de Fangel?</SubtitleSmallStyled>
              <TextStyled>
                Tienes que ser invitado por algún usuario registrado en Fangel, esta persona te proporcionará un código que usarás en el <b>registro</b>.
              </TextStyled>
            </TextContainer>
            <TextContainer>
              <SubtitleSmallStyled as="h4" question>¿Qué es una Espacio social en Fangel?</SubtitleSmallStyled>
              <TextStyled>
                Un Espacio social en Fangel es un espacio temporal y privado; es decir, un espacio puede estar activa por un máximo de una hora (tiempo de vida), luego será eliminada automáticamente, haciendo que estas comunidades sean únicas y que no exista otra igual después de ella.
              </TextStyled>
            </TextContainer>
            <TextContainer>
              <SubtitleSmallStyled as="h4" question>¿Se puede extender el tiempo de vida de un Espacio social en Fangel?</SubtitleSmallStyled>
              <TextStyled>
                Claro que sí, se puede extender el tiempo en las <b>configuraciones del espacio social</b>. Solo los administradores de los espacios pueden hacerlo.
              </TextStyled>
            </TextContainer>
          </div>
        </DetailsContainer>
        <DetailsContainer>
          <SubtitleStyled big summary green as="summary">Preguntas sobre el registro en Fangel</SubtitleStyled>
          <div>
            <TextContainer>
              <SubtitleSmallStyled as="h4" question>¿Cómo me registro en Fangel?</SubtitleSmallStyled>
              <TextStyled>
                Ingresa a <b>Registro</b> rellena los campos obligatorios y por último ingresa el código de invitación de invitación que previamente te brindo un usuario registrado en Fangel.
              </TextStyled>
              <TextStyled secondParagraph>
                También puedes solicitar un código de invitación del <b>Soporte de Fangel</b> enviando un correo a <span>support@fangelweb.com</span> explicando porque requieres crear un Espacio social en Fangel y el uso que le darás.
              </TextStyled>
            </TextContainer>
          </div>
        </DetailsContainer>
        <DetailsContainer>
          <SubtitleStyled big summary green as="summary">Preguntas sobre los Espacios sociales</SubtitleStyled>
          <div>
            <TextContainer>
              <SubtitleSmallStyled as="h4" question>¿Cómo puedo crear un Espacio social?</SubtitleSmallStyled>
              <TextStyled>
                Para crear un Espacio social tienes que estar registrado en Fangel. A continuación, solo presionas el recuadro <b>Crear espacio social</b>, ingresa el nombre del espacio, una descripcion y una imagen (de preferencia un gif de 400px x 400px). Automáticamente serás el administrador de la comunidad creada y podrás proporcionar un código de invitación a otras personas.
              </TextStyled>
            </TextContainer>
            <TextContainer>
              <SubtitleSmallStyled as="h4" question>¿Qué puede hacer un(a) administrador(a) de un Espacio social?</SubtitleSmallStyled>
              <TextList>
                <li><TextStyled>Pone las reglas aplicables a su espacio creado</TextStyled></li>
                <li><TextStyled>Extiende el tiempo de vida de su Espacio social</TextStyled></li>
                <li><TextStyled>Permite el uso del micrófono y la cámara a los integrantes de su espacio</TextStyled></li>
                <li><TextStyled>Expulsa a un(a) integrante que no cumpla las reglas de su Espacio social</TextStyled></li>
              </TextList>
            </TextContainer>
            <TextContainer>
              <SubtitleSmallStyled as="h4" question>¿Qué puedo hacer en los Espacio sociales?</SubtitleSmallStyled>
              <TextList>
                <li><TextStyled>Crea discusiones y debates sobre un tema</TextStyled></li>
                <li><TextStyled>Organiza exposiciones o eventos</TextStyled></li>
                <li><TextStyled>Abre un espacio para conocer personas y compartir ideas y experiencias</TextStyled></li>
                <li><TextStyled>O simplemente haz una fiesta</TextStyled></li>
              </TextList>
            </TextContainer>
            <TextContainer>
              <SubtitleSmallStyled as="h4" question>¿Que no puedo hacer en los Espacio sociales?</SubtitleSmallStyled>
              <TextList>
                <li><TextStyled>Insultos</TextStyled></li>
                <li><TextStyled>Gestos obscenos</TextStyled></li>
                <li><TextStyled>Representaciones obscenas</TextStyled></li>
                <li><TextStyled>Cualquier tipo de discriminación</TextStyled></li>
                <li><TextStyled>Revelar información muy personal</TextStyled></li>
              </TextList>
            </TextContainer>
            <TextContainer>
              <SubtitleSmallStyled as="h4" question>¿Puedo crear más de un Espacio social?</SubtitleSmallStyled>
              <TextStyled>
                Puedes crear los espacios que quieras para el fin que desees. (No se permite la creación de un Espacio social para fines delictivos)
              </TextStyled>
            </TextContainer>
          </div>
        </DetailsContainer>
        <DetailsContainer>
          <SubtitleStyled big summary green as="summary">Otras preguntas</SubtitleStyled>
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
