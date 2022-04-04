import styled from 'styled-components'
import { theme } from 'config'

export const Aside = styled.aside`
  width: 1074px;
  bottom: 0;
  position: fixed;
  top: 0;
  left: 0;
  background: ${theme.colors.white};
  box-shadow: 25rem 0 0 150rem rgba(0, 0, 0, 0.5);

  button {
    color: ${theme.colors.gray[800]} !important;
  }
`

export const List = styled.ul`
  padding: 20px;
  margin: 200px 0 0 20px;
  overflow-y: scroll;

  li {
    padding-bottom: 17px;
    transition: 0.5s;
    opacity: 80%;
    text-align: left;
    font-size: 48px;
    font-weight: bold;

    a {
      color: ${theme.colors.black};
      transition: 0.5s;

      :hover {
        padding: 10px;
        opacity: 80%;
        border-radius: 4px;
      }
    }
  }
`

export const IconsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: left;

  li {
    padding: 0 0 0 40px;
    transition: 300ms;
    margin: 60px 0 0 0;

    &:hover {
      transform: translateY(-5px) scale(1.1);
    }
  }
`
