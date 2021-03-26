import logo from './logo.svg';
import GlobalStyles from './themes/GlobalStyles'
import styled from 'styled-components'
import './App.css';

function App() {
  const Prueba = styled.h1`
    background: ${props => props.theme.background};
    color: ${props => props.theme.textColor}
  `


  return (
    <>
      <GlobalStyles/>
      <Prueba>Hola</Prueba>
    </>
  );
}

export default App;