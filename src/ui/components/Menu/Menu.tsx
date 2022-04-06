import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { FiX } from 'react-icons/fi'

import * as S from './Menu.styled'
import { SocialNetworks } from '../SocialNetworks'

type Props = {
  children?: ReactNode
  onClose: () => void
}

const Menu = ({ children, onClose }: Props) => {
  return (
    <S.Aside>
      <button onClick={onClose}>
        <FiX size={30} />
      </button>

      <S.List>
        <li>
          <Link to='/'>Início</Link>
        </li>
        <li>
          <Link to='/quem-sou'>Quem sou</Link>
        </li>
        <li>
          <Link to='/projetos'>Projetos</Link>
        </li>
        <li>
          <Link to='/habilidades'>Techs</Link>
        </li>
      </S.List>
      <S.Networks>
        <SocialNetworks />
      </S.Networks>
      {children}
    </S.Aside>
  )
}

export default Menu
