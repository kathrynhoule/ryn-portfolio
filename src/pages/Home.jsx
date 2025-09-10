import React from 'react'
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import HomeLink from '../components/HomeLink';
import homeLinks from '../data/homeLinks';

const Home = () => {
  return (
        <div className='home-container'>
          <div className='welcome-container'>
            <h1>Welcome to my portfolio!</h1>
          </div>

          <div className='avatar-container'>
            <div className='avatar-content'>
              <img src='/assets/temp-avatar.png' alt='Avatar' />

              <ul className='quick-facts'>
                <li>React Dev</li>
                <li>Creative Coder & Designer</li>
                <li>Based in Canada</li>
              </ul>

              <div className='avatar-icons'>
                <img src='/assets/temp-projects-icon.png' alt='Paintbrush' />
                <img src='/assets/temp-projects-icon.png' alt='Pigeon' />
                <img src='/assets/temp-projects-icon.png' alt='Coffee' />
              </div>
            </div>
          </div>

          {homeLinks.map((link, index) => (
            <HomeLink key={index} {...link} />
          ))}
        </div>
  )
}

export default Home