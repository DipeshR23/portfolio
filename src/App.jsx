
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import Navbar from './components/navbar'
import Footer from './components/footer'
import About from './pages/aboutMe'
import Contact from './pages/contact'
import Skills from './pages/skills'
import Projects from './pages/projects'

function App() 
{
  

  return (
   <BrowserRouter>
   <div className="flex flex-col min-h-screen">
        <Navbar />
    <div className="flex-grow">

   <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
    
   </Routes>
   </div>
        <Footer />
      </div>

   </BrowserRouter>

  )
}

export default App
