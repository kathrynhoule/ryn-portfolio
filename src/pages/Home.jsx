import React from 'react'
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
        <div className='home-container'>
          <div className='welcome-container'>
            <h1>Welcome to my portfolio!</h1>
          </div>
          <div className='avatar-container'>
            <img src='/assets/temp-avatar.png' alt='Avatar' />
          </div>
          <div className='links-container'>
            <Link to='/projects' className='home-link'>
                <img src='/assets/temp-projects-icon.png' alt='Projects' className='projects-icon'/>
              <div className='link-text'>
                <h3>Projects</h3>
                <p>Check out my work and side projects</p>
              </div>
            </Link>
            <Link to='/about' className='home-link'>
                <img src='/assets/temp-projects-icon.png' alt='About' className='about-icon' />
              <div className='link-text'>
                <h3>About Me</h3>
                <p>Learn more about me</p>
              </div>
            </Link>
            <Link to='/contact' className='home-link'>
                <img src='/assets/temp-projects-icon.png' alt='Contact' className='contact-icon' />
              <div className='link-text'>
                <h3>Contact</h3>
                <p>Get in touch or see me elsewhere</p>
              </div>
            </Link>
          </div>
        </div>
  )
}

export default Home