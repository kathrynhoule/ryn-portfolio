import React from 'react'
import '../styles/Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
        <div className='projects-container'>
          <div className='working-on-container'>
            <h1>Here's what I've been working on!</h1>
          </div>

        <div className="project-card project-one">
            <img src="/assets/temp-project.png" alt="Project 1" className="project-image" />
            <div className="project-text">
              <h3>Project 1</h3>
              <p>
                Here's some stuff about this project.  
                Check it out on{' '}
                <a href="https://github.com/myusername/project1" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                .
              </p>
            </div>
          </div>

          <div className="project-card project-two">
            <img src="/assets/temp-project.png" alt="Project 2" className="project-image" />
            <div className="project-text">
              <h3>Project 2</h3>
              <p>
                Here's some stuff about this project.  
                Check it out on{' '}
                <a href="https://github.com/myusername/project2" target="_blank" rel="noopener noreferrer">
                  here
                </a>
                .
              </p>
            </div>
          </div>

          <div className="project-card project-three">
            <img src="/assets/temp-project.png" alt="Project 3" className="project-image" />
            <div className="project-text">
              <h3>Project 3</h3>
              <p>
                Here's some stuff about this project.  
                Check it out on{' '}
                <a href="https://github.com/myusername/project3" target="_blank" rel="noopener noreferrer">
                  the website
                </a>
                .
              </p>
            </div>
          </div>
        </div>
  )
}

export default Projects