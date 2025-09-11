import React, { useState, useEffect } from 'react'
import '../styles/Home.css';
import HomeLink from '../components/HomeLink';
import homeLinks from '../data/homeLinks';
import avatarData from '../data/avatarData';
import AvatarCard from '../components/AvatarCard';

const Home = () => {
  const fullText = "Welcome to my portfolio!";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const typingDelay = 1000;
    const charDelay = 100;

    const typeCharacter = (index) => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        setTimeout(() => typeCharacter(index + 1), charDelay);
      }
    };

    const startTyping = setTimeout(() => {
      typeCharacter(0);
    }, typingDelay);

    return () => clearTimeout(startTyping);
  }, []);

  return (
        <div className='home-container'>
          <div className='welcome-container'>
            <h1>{displayedText}</h1>
          </div>

          <AvatarCard
            avatar={avatarData.home.avatar} 
            facts={avatarData.home.facts} 
            icons={avatarData.home.icons}
            className='home-avatar'
          />

          <div className='home-links-grid'>
            {homeLinks.map((link, index) => (
              <HomeLink key={index} {...link} />
            ))}
          </div>
        </div>
  )
}

export default Home