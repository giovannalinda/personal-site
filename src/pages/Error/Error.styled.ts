import styled from 'styled-components'
import { theme } from 'config'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 50vh 0 0 0;

  h2 {
    margin: -70px 0 20px 0;
  }

  p {
    margin: 0 0 20px 0;
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
