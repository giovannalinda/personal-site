import { createGlobalStyle } from 'styled-components'
import { theme } from 'config'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${theme.colors.gray[800]};
    font-family: ${theme.font.family};
    overflow-x: hidden;
    color: ${theme.colors.white};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  &::selection {
    color: ${theme.colors.black};
    background: ${theme.colors.white};
  }
`
