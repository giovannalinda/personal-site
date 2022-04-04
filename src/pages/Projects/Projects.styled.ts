import styled from 'styled-components'
import { theme } from 'config'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;

  h1 {
    margin: 30px 0 0 0;
    font-size: 64px;
    font-weight: ${theme.font.weigths.bold};
  }

  a {
    color: ${theme.colors.white};
    padding: 20px;
    text-decoration: underline;
  }
`
export const List = styled.ul`
  max-height: 530px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }

  li {
    padding: 30px;
    border-radius: 5px;
    margin: auto;
    max-width: 840px;
    height: 300px;

    @media (max-width: 626px) {
      padding: 100px 0 0 200px;
      margin: 20px 0 0 30px;
    }

    h3 {
      padding: 40px 0 0 400px;
    }

    h3,
    p {
      @media (max-width: 626px) {
        display: none;
      }
    }

    p {
      max-width: 280px;
      margin: 10px 0 0 400px;
      opacity: 74%;
    }

    img {
      margin: -120px 0 0 -30px;

      @media (max-width: 375px) {
        width: 500px;
        margin: -30px 0 0 -80px;
      }
    }
  }
`
