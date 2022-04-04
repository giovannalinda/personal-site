import { useTheme } from 'context/ThemeContext'

import { RiMoonClearFill, RiSunFill } from 'react-icons/ri'

import * as S from './Toggle.styled'

export function Toggle() {
  const { toggleTheme, theme } = useTheme()
  return (
    <S.Toggle>
      <button data-testid='toggle' type='button' onClick={toggleTheme}>
        {theme === 'light' ? (
          <RiMoonClearFill size={20} />
        ) : (
          <RiSunFill size={20} />
        )}
      </button>
    </S.Toggle>
  )
}
