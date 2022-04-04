import { blizzard, disney, markee, netflix, pokelister, weather } from 'assets'
import { Footer } from 'ui/components/Footer'

import Sidebar from 'ui/components/Sidebar/Sidebar'

import * as S from './Projects.styled'

export function Projects() {
  return (
    <>
      <Sidebar />

      <S.Container>
        <h1>Projetos 🚀</h1>
        <a
          href='https://github.com/giovannalinda'
          target='_blank'
          rel='noreferrer'
        >
          Ver Github
        </a>
        <S.List>
          <li>
            <h3>Disney+ Web App</h3>
            <p>
              Tecnologias utilizadas: ReactJs, TypeScript, Styled-components,
              JSON-Server, ESlint, Local Storage, Context API, Prettier, Husky e
              Axios
            </p>
            <img src={disney} alt='project disney+' />
          </li>

          <li>
            <h3>Poké-lister</h3>
            <p>
              Tecnologias utilizadas: ReactJs, TypeScript, Styled-components,
              Jest, React Testing Library, PokeAPI, ESlint, Prettier, Husky e
              Axios
            </p>
            <img src={pokelister} alt='project pokemon' />
          </li>

          <li>
            <h3>Netflix Web App</h3>
            <p>
              Tecnologias utilizadas: ReactJs, TypeScript, Styled-components,
              Jest, React Testing Library, JSON-Server, ESlint, Prettier, Husky
              e Axios
            </p>
            <img src={netflix} alt='project netflix' />
          </li>

          <li>
            <h3>Site Blizzard</h3>
            <p>
              Tecnologias utilizadas: ReactJs, TypeScript, Styled-components,
              Jest, React Testing Library, Games-database, ESlint, Prettier,
              Husky e Axios
            </p>
            <img src={blizzard} alt='project blizzard' />
          </li>

          <li>
            <h3>Weather Location</h3>
            <p>
              Tecnologias utilizadas: ReactJs, Styled-components, Open Weather
              API, ESlint, Prettier e Axios
            </p>
            <img src={weather} alt='project weather location' />
          </li>

          <li>
            <h3>Markee App</h3>
            <p>
              Tecnologias utilizadas: ReactJs, Styled-components, Marked,
              ESlint, Prettier, Husky, Local Forage e TypeScript
            </p>
            <img src={markee} alt='project markee' />
          </li>
        </S.List>
      </S.Container>
      <Footer />
    </>
  )
}
