import React, { useState, useEffect } from 'react'
import '../styles/Home.css'
import HomeLink from '../components/HomeLink'
import homeLinks from '../data/homeLinks'
import avatarData from '../data/avatarData'
import AvatarCard from '../components/AvatarCard'

const Home = () => {
  const fullText = "Welcome to my portfolio!";
  const [displayedText, setDisplayedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const typingDelay = 1000;

    const typeCharacter = (index) => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        const randomDelay = 80 + Math.random() * 60;
        setTimeout(() => typeCharacter(index + 1), randomDelay);
      }

      else {
        setTypingDone(true);
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
            <h1>
              {displayedText}
              {!typingDone && <span className="cursor">|</span>}
            </h1>
          </div>

          <AvatarCard
            avatar={avatarData.home.avatar} 
            facts={avatarData.home.facts} 
            icons={avatarData.home.icons}
            className={`home-avatar ${typingDone ? 'fade-in' : 'hidden'}`}
          />

          <div className={`home-links-grid ${typingDone ? 'fade-in' : 'hidden'}`}>
            {homeLinks.map((link, index) => (
              <HomeLink key={index} {...link} />
            ))}
          </div>
        </div>
  )
}

export default Home