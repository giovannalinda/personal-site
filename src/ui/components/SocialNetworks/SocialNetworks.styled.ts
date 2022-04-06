import styled from 'styled-components'

export const IconsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: left;

  li {
    padding: 0 0 0 10px;
    transition: 300ms;
    margin: 60px 10px 0 0;

    &:hover {
      transform: translateY(-5px) scale(1.1);
    }
  }
`
