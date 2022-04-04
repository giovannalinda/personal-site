import { useState } from 'react'

import * as FaIcons from 'react-icons/fa'

import Menu from '../Menu/Menu'
import { Toggle } from '../Toggle'

import * as S from './Sidebar.styled'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <S.Navbar>
        <S.ShowSidebar>
          <button onClick={() => setIsOpen(true)}>
            <FaIcons.FaBars size={20} />
          </button>
          {isOpen ? <Menu onClose={() => setIsOpen(false)} /> : null}
        </S.ShowSidebar>
      </S.Navbar>

      <Toggle />
    </>
  )
}
