import styled from 'styled-components'
import { theme } from 'config'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin: 30px 0 0 0;
    font-size: 64px;
    font-weight: ${theme.font.weigths.bold};
  }

  p {
    text-align: center;
    opacity: 74%;
    padding: 0 40px 50px 50px;
    max-width: 700px;
  }

  h2,
  h1 {
    padding: 0 0 21px 0;
  }
`

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    padding: 0 0 100px 50px;
    transition: 300ms;
    margin: 0 0 0 -10px;

    &:hover {
      transform: translateY(-5px) scale(1.1);
    }
  }
`
