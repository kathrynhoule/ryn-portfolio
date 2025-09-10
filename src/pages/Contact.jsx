import React from 'react'
import '../styles/Contact.css';
import ContactCard from '../components/ContactCard'
import contactCards from '../data/contactCards'

const Contact = () => {
  return (
        <div className='contact-container'>
          <div className='find-me-container'>
            <h1>Welcome to my portfolio!</h1>
          </div>

          <div className='contact-avatar-container'>
            <img src='/assets/temp-avatar.png' alt='Avatar' />
          </div>

          <div className='contact-cards-container'>
            {contactCards.map((link, index) => (
              <ContactCard key={index} {...link} />
            ))}
          </div>
        </div>
  )
}

export default Contact