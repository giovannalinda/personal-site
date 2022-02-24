import { error } from 'assets'
import { Link } from 'react-router-dom'

import * as S from './Error.styled'

export function Error() {
  return (
    <S.Container>
      <h2>Ops! Algo de errado não está certo</h2>
      <Link to='/sobre-mim'>Voltar</Link>
      <img src={error} alt='image error' />
    </S.Container>
  )
}
