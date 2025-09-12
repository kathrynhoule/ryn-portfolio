import React from 'react'
import '../styles/About.css';
import Footer from '../components/Footer';
import avatarData from '../data/avatarData';
import AvatarCard from '../components/AvatarCard';

const About = () => {
  return (
          <div className='about-container'>
            <div className='intro-container'>
              <h1>Hi, I'm Ryn!</h1>
            </div>
  
            <AvatarCard
              avatar={avatarData.about.avatar} 
              facts={avatarData.about.facts} 
              icons={avatarData.about.icons}
              className='about-avatar'
            />
  
            <div className='about-block'>
              <div className='about-me'>
                <h3>About Me</h3>
                <p>I’m a creative coder who enjoys building fun, interactive projects with React and Python. I thrive on mixing design and development to bring ideas to life. When I’m not coding, I’m probably sipping coffee, geeking out over pet games, or spotting birds.</p>
              </div>
            </div>

            <div className="about-footer">
              <Footer />
            </div>

          </div>
  )
}

export default About