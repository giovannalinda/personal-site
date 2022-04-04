import { Link } from 'react-router-dom'

import * as S from './Error.styled'

export function Error() {
  return (
    <S.Container>
      <h2>Ops, parece que algo deu errado!</h2>
      <p>A página que você digitou não existe. Vá para a página de início.</p>
      <Link to='/'>Voltar</Link>
    </S.Container>
  )
}
