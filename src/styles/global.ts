/* istanbul ignore file */
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    scroll-behavior: smooth;

  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.font.family};
  }
`

export default GlobalStyles
