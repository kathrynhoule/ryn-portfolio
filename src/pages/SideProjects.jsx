import React from 'react'
import '../styles/Projects.css';
import SideProjectCard from '../components/SideProjectCard';
import sideProjectCards from '../data/sideProjectCards';
import Footer from '../components/Footer';

const SideProjects = () => {
  return (
     <div className='projects-container'>
          <div className='working-on-container'>
               <h1>Here's what I've been working on!</h1>
          </div>

          {sideProjectCards.map((link, index) => (
          <SideProjectCard key={index} {...link} />
          ))}

          <div className="projects-footer">
               <Footer />
          </div>
     </div>
  )
}

export default SideProjects