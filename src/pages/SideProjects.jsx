import React from 'react'
import '../styles/Projects.css';
import SideProjectCard from '../components/SideProjectCard';
import sideProjectCards from '../data/sideProjectCards';
import Footer from '../components/Footer';

const SideProjects = () => {
  return (
     <div className='projects-container'>
          <div className='working-on-container'>
               <h1>These are my personal projects:</h1>
          </div>

          {sideProjectCards.map((link, index) => (
          <SideProjectCard key={index} {...link} />
          ))}

          <div className="projects-footer">
               <Footer nextLink="/contact" nextText="Go to Contact" />
          </div>
     </div>
  )
}

export default SideProjects