import React from 'react'
import '../styles/About.css';
import Footer from '../components/Footer';

const About = () => {
  return (
          <div className='about-container'>
            <div className='intro-container'>
              <h1>Hi, I'm Ryn!</h1>
            </div>
  
            <div className='about-avatar-container'>
              <img src='/assets/temp-avatar-about.png' alt='Avatar About' />
            </div>
  
            <div className='about-block'>
              <div className='about-me'>
                <h3>About Me</h3>
                <p>Placeholder text</p>
              </div>
            </div>

            <div className="about-footer">
              <Footer />
            </div>

          </div>
  )
}

export default About