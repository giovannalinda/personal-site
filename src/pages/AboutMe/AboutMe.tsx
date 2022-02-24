import { github, gmail, instagram, linkedin, twitter } from 'assets'
import { Footer } from 'ui/components/Footer'
import Sidebar from 'ui/components/Sidebar/Sidebar'

import * as S from './AboutMe.styled'

export function AboutMe() {
  return (
    <>
      <Sidebar />

      <S.Container>
        <h1>Sobre mim</h1>
        <p>
          Meu nome é Giovanna, nasci em São Paulo/SP, escolhi desenvolvimento
          porque é incrível, a quantidade de coisas que podem ser criadas e o
          impacto que pode ter na vida das pessoas me deixa animada.
          <br />
          <br />
          Trabalho usando tecnologias como React e TypeScript e estou procurando
          por novas experiências nas mesmas, busco sempre ser melhor do que no
          dia anterior, ter um crescimento contínuo e criar produtos de
          qualidade.
          <br />
          <br />
          Algum projeto em mente? Me manda uma mensagem!
        </p>

        <h2>Contato</h2>
        <p>
          Você pode entrar em contato comigo através de qualquer uma das minhas
          redes sociais.
        </p>

        <S.List>
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
            <a
              href='https://twitter.com/gripada_'
              target='_blank'
              rel='noreferrer'
            >
              <img src={twitter} alt='twitter logo' />
            </a>
          </li>
        </S.List>
      </S.Container>
      <Footer />
    </>
  )
}
