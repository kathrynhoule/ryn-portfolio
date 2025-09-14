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
                <p>I’m a creative coder who enjoys building fun, interactive projects with React and Python; I mix design and development to bring ideas to life. When I’m not coding, I’m probably sipping coffee, geeking out over pet games, or spotting birds.</p>
                <h3>Inspirations</h3>
                <p>I absolutely love games from the GBC/GBA and SNES eras, particularly Earthbound and Petz Hamsterz Life 2. I have also loved Tamagotchis my whole life, and they are probably what first got me into pet games. Also, you can{' '}
                <a href="https://www.ontario.ca/page/piping-plover" target="_blank" rel="noopener noreferrer">
                  check out my favourite bird here
                </a>.
                Their endangered status and my love for them is what got me into environmental activism and volunteering.
                </p>
              </div>
            </div>

            <div className="about-footer">
              <Footer nextLink="/main-projects" nextText="Go to Main Projects" />
            </div>

          </div>
  )
}

export default About