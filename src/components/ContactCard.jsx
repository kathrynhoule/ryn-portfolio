import React from 'react'

const ContactCard = ({ title, description, icon, alt, link, linkText }) => {
  return (
     <div className='contact-card'>
          <div className="contact-card-text">
               <div className="contact-card-header">
                    <img src={icon} alt={alt} />
                    <h3>{title}</h3>
               </div>
               <p>
                    {description}{' '}
                    <a href={link} target='_blank' rel='noopener noreferrer'>
                         {linkText}
                    </a>
               </p>
          </div>
     </div>
  )
}

export default ContactCard