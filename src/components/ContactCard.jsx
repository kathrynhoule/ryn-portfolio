import React from 'react'

const ContactCard = ({ title, description, icon, alt, link, linkText }) => {
  return (
     <div className='contact-card'>
          <img src={icon} alt={alt} />
          <div>
               <h3>{title}</h3>
               <p>{description}
                    <a href={link} target='_blank' rel='noopener noreferrer'>
                         {linkText}
                    </a>
               </p>
          </div>
     </div>
  )
}

export default ContactCard