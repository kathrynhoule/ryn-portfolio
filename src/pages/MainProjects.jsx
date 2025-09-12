import React from 'react'
import '../styles/Projects.css';
import ProjectCard from '../components/ProjectCard';
import projectCards from '../data/projectCards';
import Footer from '../components/Footer';

const MainProjects = () => {
  return (
        <div className='projects-container'>
          <div className='working-on-container'>
            <h1>Here's what I've been working on!</h1>
          </div>

          {projectCards.map((link, index) => (
            <ProjectCard key={index} {...link} />
          ))}

          <div className="projects-footer">
            <Footer />
          </div>
        </div>
  )
}

export default MainProjects