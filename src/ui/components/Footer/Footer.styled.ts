import styled, { keyframes } from 'styled-components'

const goBack = keyframes`
  from {
    transform: translateY(8px);
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
    margin: -10px 0 0 20px;
    padding: 30px 0 30px 0;
    animation: ${goBack} 1s infinite alternate;
  }
`
