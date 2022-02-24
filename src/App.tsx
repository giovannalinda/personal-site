import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ABOUT_ME, SKILLS } from 'routes'
import { Skills, AboutMe } from 'pages'
import { GlobalStyle } from 'ui'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ABOUT_ME} element={<AboutMe />} />
        <Route path={SKILLS} element={<Skills />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
