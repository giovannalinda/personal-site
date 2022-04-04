import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { BsThreeDots } from 'react-icons/bs'

import Sidebar from 'ui/components/Sidebar/Sidebar'
import { Footer } from 'ui/components/Footer'
import { profile, curriculo } from 'assets'

import * as S from './AboutMe.styled'

export function AboutMe() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      {!loading && (
        <>
          <Sidebar />

          <S.Container>
            <img src={profile} alt='profile' />
            <span>Oi, eu sou a Giovanna 💜️</span>
            <h2>
              Desenvolvendo produtos digitais de qualidade através de códigos.
              ✨
            </h2>
            <p>
              uma Desenvolvedora Front End com brilho no olho, que se importa
              com cada detalhe ao construir interfaces prezando pela experiência
              para que impacte positivamente na vida das pessoas.
            </p>
            <Link to={curriculo} target='_blank'>
              Currículo
            </Link>
          </S.Container>
          <Footer />
        </>
      )}

      {loading && (
        <S.Loader>
          <BsThreeDots size={40} />
        </S.Loader>
      )}
    </>
  )
}
