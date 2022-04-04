import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ABOUT_ME, PROJECTS, SKILLS, ABOUTWHOIAM } from 'routes'
import { Skills, AboutMe, Projects, Error, AboutWhoIAm } from 'pages'
import { GlobalStyle } from 'ui'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ABOUT_ME} element={<AboutMe />} />
        <Route path={SKILLS} element={<Skills />} />
        <Route path={PROJECTS} element={<Projects />} />
        <Route path={ABOUTWHOIAM} element={<AboutWhoIAm />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
