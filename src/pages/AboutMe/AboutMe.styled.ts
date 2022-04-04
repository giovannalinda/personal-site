import { theme } from 'config'
import styled, { keyframes } from 'styled-components'

const goBack = keyframes`
  from {
    transform: translateY(10px);
  }
  to {
    transform: translateX(0);
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    margin: 80px 0 30px 0;
  }

  h2 {
    margin: 30px 0 30px 0;
    max-width: 800px;
    font-size: 48px;
    font-weight: ${theme.font.weigths.bold};
    padding: 0 40px 0 40px;
    text-align: center;
  }

  p {
    text-align: center;
    opacity: 85%;
    padding: 0 40px 50px 50px;
    max-width: 700px;
  }

  a {
    padding: 15px 80px 15px 80px;
    background: ${theme.colors.white};
    border-radius: 5px;
    color: ${theme.colors.black};
    transition: 300ms;

    &:hover {
      transform: translateY(-5px) scale(1.1);
    }
  }
`

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50vh 0 0 0;
  animation: ${goBack} 500ms infinite alternate;
`
