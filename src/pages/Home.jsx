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

          <Link to='/about' className='home-link about-link'>
            <img src='/assets/temp-projects-icon.png' alt='About' />
            <div className='link-text'>
              <h3>About Me</h3>
              <p>Learn more about me</p>
            </div>
          </Link>

          <Link to='/projects' className='home-link projects-link'>
            <img src='/assets/temp-projects-icon.png' alt='Projects' />
            <div className='link-text'>
              <h3>Projects</h3>
              <p>Check out my work and side projects</p>
            </div>
          </Link>

          <Link to='/contact' className='home-link contact-link'>
              <img src='/assets/temp-projects-icon.png' alt='Contact' />
            <div className='link-text'>
              <h3>Contact</h3>
              <p>Get in touch or see me elsewhere</p>
            </div>
          </Link>
        </div>
  )
}

export default Home