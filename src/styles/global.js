import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: ${props => props.theme.colors.text};
  }
`
