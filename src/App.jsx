import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import React from 'react'
import './App.css';

const App = () => {
  return (
     <div className='app-container'>
          <nav className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
          </nav>

          <main className='main-content'>
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            </Routes>
          </main>
     </div>
  )
}

export default App