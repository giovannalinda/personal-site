import styled, { keyframes } from 'styled-components'
import { theme } from 'config'

const goBack = keyframes`
  from {
    transform: translateY(8px);
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
  margin: 250px 0 0 0;

  h2 {
    margin: -70px 0 30px 0;
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

  img {
    width: 500px;
    padding: 20px;
    animation: ${goBack} 1s infinite alternate;
  }
`
