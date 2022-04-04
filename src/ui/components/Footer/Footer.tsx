import { SocialNetworks } from '../SocialNetworks'

import * as S from './Footer.styled'

export function Footer() {
  return (
    <S.Footer>
      <span>Vamos nos conectar</span>
      <p>Me mande uma mensagem em uma de minhas redes.</p>
      <a href='mailto:eugiovannasouza@gmail.com'>eugiovannasouza@gmail.com</a>
      <SocialNetworks />
    </S.Footer>
  )
}
