import styled, { keyframes } from 'styled-components'

const goBack = keyframes`
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateX(0);
  }
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    padding: 0 0 10px 0;
    animation: ${goBack} 1s infinite alternate;
  }
`
