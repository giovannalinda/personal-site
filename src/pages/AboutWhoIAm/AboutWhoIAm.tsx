import { Footer } from 'ui/components/Footer'
import Sidebar from 'ui/components/Sidebar/Sidebar'

import * as S from './AboutWhoIAm.styled'

export function AboutWhoIAm() {
  return (
    <>
      <Sidebar />
      <S.Container>
        <h2>Quem sou</h2>
        <p>
          Meu nome é Giovanna, tenho 18 anos e nasci em São Paulo/SP, escolhi
          desenvolvimento porque é incrível, a quantidade de coisas que podem
          ser criadas e o impacto que pode causar na vida das pessoas me deixa
          animada.
          <br />
          <br />
          Atualmente escrevo artigos sobre carreira em tecnologia para
          contribuir com o compartilhamento de conhecimento e trabalho
          utilizando React em minhas aplicações. Algumas das minhas qualidades
          são que busco sempre ser melhor do que no dia anterior, ter um
          crescimento contínuo e dar meu melhor em tudo que faço.
        </p>
      </S.Container>
      <Footer />
    </>
  )
}
