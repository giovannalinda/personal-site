import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { FiX } from 'react-icons/fi'

import { curriculo, profile } from 'assets'

import * as S from './Menu.styled'

type Props = {
  children?: ReactNode
  onClose: () => void
}

const Menu = ({ children, onClose }: Props) => {
  return (
    <S.Aside>
      <button onClick={onClose}>
        <FiX size={20} />
      </button>

      <S.Profile>
        <img src={profile} alt='profile' />
        <h3>Giovanna Linda</h3>
        <span>Front-end Developer</span>
        <Link to={curriculo} target='_blank'>
          Currículo
        </Link>
        <p>Desenvolvedora Front-end, geek e gamer nas horas vagas</p>
      </S.Profile>

      <S.Container>
        <S.List>
          <li>
            <Link to='/'>Sobre mim</Link>
          </li>

          <li>
            <Link to='/habilidades'>Hard Skills</Link>
          </li>

          <li>
            <Link to='/projetos'>Projetos</Link>
          </li>
        </S.List>
      </S.Container>
      {children}
    </S.Aside>
  )
}

export default Menu
