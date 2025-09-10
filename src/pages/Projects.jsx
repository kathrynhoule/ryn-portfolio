import React from 'react'
import '../styles/Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
        <div className='projects-container'>
          <div className='working-on-container'>
            <h1>Here's what I've been working on!</h1>
          </div>

          <Link to='/about' className='projects-link project-one-link'>
            <img src='/assets/temp-projects-icon.png' alt='Project 1' />
            <div className='link-text'>
              <h3>Project 1</h3>
              <p>Here's some stuff about this project</p>
            </div>
          </Link>

          <Link to='/projects' className='projects-link project-two-link'>
            <img src='/assets/temp-projects-icon.png' alt='Project 2' />
            <div className='link-text'>
              <h3>Project 2</h3>
              <p>Here's some stuff about this project</p>
            </div>
          </Link>

          <Link to='/contact' className='projects-link project-three-link'>
              <img src='/assets/temp-projects-icon.png' alt='Project 3' />
              <div className='link-text'>
                <h3>Project 3</h3>
                <p>Here's some stuff about this project</p>
              </div>
          </Link>
        </div>
  )
}

export default Projects