import React from 'react'
import '../styles/Home.css';
import HomeLink from '../components/HomeLink';
import homeLinks from '../data/homeLinks';
import avatarData from '../data/avatarData';
import AvatarCard from '../components/AvatarCard';

const Home = () => {
  return (
        <div className='home-container'>
          <div className='welcome-container'>
            <h1>Welcome to my portfolio!</h1>
          </div>

          <AvatarCard
            avatar={avatarData.home.avatar} 
            facts={avatarData.home.facts} 
            icons={avatarData.home.icons}
            className='home-avatar'
          />

          {homeLinks.map((link, index) => (
            <HomeLink key={index} {...link} />
          ))}
        </div>
  )
}

export default Home