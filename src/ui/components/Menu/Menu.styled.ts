import styled from 'styled-components'
import { theme } from 'config'

export const Aside = styled.aside`
  width: 350px;
  bottom: 0;
  position: fixed;
  top: 0;
  left: 0;
  background: ${theme.colors.purple[900]};
  z-index: 1;
  box-shadow: 0.4px 0.4px 0.4px 0.4px rgba(232, 232, 232, 0.1);

  button {
    color: ${theme.colors.white};
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 100px 0 0 0;

  img,
  h3,
  span {
    padding: 0 0 15px 0;
  }

  span,
  p {
    opacity: 74%;
  }

  a {
    padding: 15px 80px 15px 80px;
    background: ${theme.colors.purple[500]};
    border-radius: 5px;
    color: ${theme.colors.white};
    transition: 300ms;

    &:hover {
      transform: translateY(-5px) scale(1.1);
    }
  }

  p {
    padding: 22px 0 0 0;
    text-align: center;
    max-width: 250px;
  }
`

export const Container = styled.div`
  overflow: hidden;
`

export const List = styled.ul`
  width: 300px;
  height: 500px;
  padding: 20px;
  margin: 50px 0 0 20px;
  overflow-y: scroll;
  text-align: center;

  &::-webkit-scrollbar {
    width: 7px;
  }

  li {
    padding-bottom: 17px;
    transition: 0.8s;
    opacity: 86%;

    a {
      color: ${theme.colors.white};
      transition: 0.5s;

      :hover {
        padding: 6px;
        color: ${theme.colors.purple[500]};
        border-radius: 4px;
      }
    }
  }
`
