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
            <img src='/assets/temp-avatar.png' alt='Avatar' />
          </div>

          {homeLinks.map((link, index) => (
            <HomeLink key={index} {...link} />
          ))}
        </div>
  )
}

export default Home