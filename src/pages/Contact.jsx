import React from 'react'
import '../styles/Contact.css';
import ContactCard from '../components/ContactCard'
import contactCards from '../data/contactCards'
import Footer from '../components/Footer';
import avatarData from '../data/avatarData';
import AvatarCard from '../components/AvatarCard';

const Contact = () => {
  return (
        <div className='contact-container'>
          <div className='find-me-container'>
            <h1>Welcome to my portfolio!</h1>
          </div>

          <AvatarCard
            avatar={avatarData.contact.avatar} 
            facts={avatarData.contact.facts} 
            icons={avatarData.contact.icons}
            className='contact-avatar'
          />

          <div className='contact-cards-container'>
            {contactCards.map((link, index) => (
              <ContactCard key={index} {...link} />
            ))}
          </div>

          <div className="contact-footer">
            <Footer nextLink="/about" nextText="Go to About" />
          </div>
        </div>
  )
}

export default Contact