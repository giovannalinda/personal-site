import styled from 'styled-components'

export const Toggle = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0 0 0;

  button {
    background: none;
    border: 0;
    svg {
      color: ${({ theme }) => theme.icon};
    }
  }
`
