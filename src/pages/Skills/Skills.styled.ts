import styled from 'styled-components'
import { theme } from 'config'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px 0 0 0;

  h1 {
    margin: 30px 0 0 0;
    font-size: 64px;
    font-weight: ${theme.font.weigths.bold};

    @media (max-width: 531px) {
      font-size: 40px;
    }
  }
`

export const List = styled.ul`
  max-height: 650px;

  li {
    width: 370px;
    height: 90px;
    background: ${({ theme }) => theme.list};
    border-radius: 5px;
    margin: 20px 0 0 0;

    @media (max-width: 375px) {
      width: 320px;
    }

    h3 {
      padding: 35px 0 0 150px;
    }

    img {
      margin: -60px 0 0 0;
      border-radius: 5px;
      width: 90px;
      height: 90px;
    }
  }
`
