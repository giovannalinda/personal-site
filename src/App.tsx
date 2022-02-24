import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ABOUT_ME, PROJECTS, SKILLS } from 'routes'
import { Skills, AboutMe, Projects } from 'pages'
import { GlobalStyle } from 'ui'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ABOUT_ME} element={<AboutMe />} />
        <Route path={SKILLS} element={<Skills />} />
        <Route path={PROJECTS} element={<Projects />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
