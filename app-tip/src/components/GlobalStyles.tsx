import  { createGlobalStyle } from  'styled-components'

const GlobalSlytes = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 

  body {
    background-color: ${props => props.theme.background};
    font-family: 'space mono';
  }
`;

export default GlobalSlytes;