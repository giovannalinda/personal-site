import Sidebar from 'ui/components/Sidebar/Sidebar'
import { Footer } from 'ui/components/Footer'

import { css, html, javascript, react, typescript } from 'assets'

import * as S from './Skills.styled'

export function Skills() {
  return (
    <>
      <Sidebar />

      <S.Container>
        <h1>Tecnologias 💻</h1>
        <S.List>
          <li>
            <h3>HTML</h3>
            <img src={html} alt='html icon' />
          </li>
          <li>
            <h3>CSS</h3>
            <img src={css} alt='css icon' />
          </li>
          <li>
            <h3>JavaScript</h3>
            <img src={javascript} alt='javascript icon' />
          </li>
          <li>
            <h3>ReactJS</h3>
            <img src={react} alt='react icon' />
          </li>
          <li>
            <h3>TypeScript</h3>
            <img src={typescript} alt='typescript icon' />
          </li>
        </S.List>
      </S.Container>
      <Footer />
    </>
  )
}
