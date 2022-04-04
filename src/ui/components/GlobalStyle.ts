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
    background: ${({ theme }) => theme.background};
    font-family: ${theme.font.family};
    overflow-x: hidden;
    color: ${({ theme }) => theme.textColor};
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
    color: ${({ theme }) => theme.background};
    background:  ${({ theme }) => theme.textColor};
  }
`
