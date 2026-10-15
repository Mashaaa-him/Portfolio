import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import SkillsPage from './components/skills'
import About from './pages/About'
import Persona from './pages/Persona'
import Projects from './pages/Projects'

function AppContent() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      {!isHome && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<SkillsPage />} />
        <Route path='/persona' element={<Persona />}/>
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App