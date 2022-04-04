import { github, gmail, instagram, linkedin, medium, twitter } from 'assets'

import * as S from './SocialNetworks.styled'

export function SocialNetworks() {
  return (
    <S.IconsList>
      <li>
        <a
          href='https://github.com/giovannalinda'
          target='_blank'
          rel='noreferrer'
        >
          <img src={github} alt='github logo' />
        </a>
      </li>

      <li>
        <a
          href='https://www.instagram.com/_gripada/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={instagram} alt='instagram logo' />
        </a>
      </li>

      <li>
        <a
          href='mailto:eugiovannasouza@gmail.com'
          target='_blank'
          rel='noreferrer'
        >
          <img src={gmail} alt='gmail logo' />
        </a>
      </li>

      <li>
        <a
          href='https://www.linkedin.com/in/giovannalinda/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={linkedin} alt='linkedin logo' />
        </a>
      </li>

      <li>
        <a href='https://twitter.com/gripada_' target='_blank' rel='noreferrer'>
          <img src={twitter} alt='twitter logo' />
        </a>
      </li>

      <li>
        <a
          href='https://medium.com/@eugiovannasouza'
          target='_blank'
          rel='noreferrer'
        >
          <img src={medium} alt='medium logo' />
        </a>
      </li>
    </S.IconsList>
  )
}
