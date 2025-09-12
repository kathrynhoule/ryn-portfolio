import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import MainProjects from './pages/MainProjects'
import SideProjects from './pages/SideProjects'
import Contact from './pages/Contact'
import React from 'react'
import './App.css';

const App = () => {
  return (
     <div className='app-container'>
          <main className='main-content'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/main-projects' element={<MainProjects />} />
              <Route path='/side-projects' element={<SideProjects />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </main>
     </div>
  )
}

export default App