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
`

export const List = styled.ul`
  max-height: 650px;
  overflow-y: scroll;

  li {
    width: 400px;
    height: 93px;
    background: ${theme.colors.gray[800]};
    border-radius: 5px;
    margin: 20px 0 0 0;

    &::-webkit-scrollbar {
      width: 0;
    }

    &:hover {
      border: 1px solid ${theme.colors.purple[500]};
    }

    h3 {
      padding: 35px 0 0 150px;
    }

    img {
      margin: -60px 0 0 0;
      border-radius: 5px;
    }
  }
`
