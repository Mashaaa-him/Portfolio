import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import SkillsPage from './components/skills'
import About from './pages/About'
import Contact from './pages/Contact'
import Hero from './components/Hero'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/skills' element={<SkillsPage />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App