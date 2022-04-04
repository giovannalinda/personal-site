import styled from 'styled-components'
import { theme } from 'config'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px 0 0 0;

  h2 {
    margin: 50px 0 30px 0;
    max-width: 800px;
    font-size: 48px;
    font-weight: ${theme.font.weigths.bold};
    padding: 0 40px 0 40px;
    text-align: center;
  }

  p {
    text-align: center;
    opacity: 85%;
    padding: 0 40px 70px 50px;
    max-width: 600px;
  }
`
