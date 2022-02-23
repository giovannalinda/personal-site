import AboutMe from 'pages/AboutMe/AboutMe'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ABOUT_ME } from 'routes'
import { GlobalStyle } from 'ui'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ABOUT_ME} element={<AboutMe />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
