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
    margin: 70px 0 30px 0;
    object-fit: cover;
  }

  h2 {
    margin: 30px 0 30px 0;
    max-width: 800px;
    font-size: 48px;
    font-weight: ${theme.font.weigths.bold};
    padding: 0 30px 0 30px;
    text-align: center;
    transition: 300ms;

    @media (max-width: 500px) {
      font-size: 28px;
      padding: 0 20px 0 20px;
    }
  }

  p {
    text-align: center;
    opacity: 60%;
    padding: 0 20px 50px 20px;
    max-width: 600px;
    transition: 300ms;

    @media (max-width: 531px) {
      font-size: 14px;
    }
  }

  a {
    padding: 15px 80px 15px 80px;
    background: ${({ theme }) => theme.button};
    border-radius: 5px;
    color: ${({ theme }) => theme.background};
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
