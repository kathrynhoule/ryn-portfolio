import React from 'react'

const ContactCard = ({ title, description, icon, alt, link }) => {
     return (
          <a 
               href={link} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="contact-card"
          >
               <div className="contact-card-text">
                    <div className="contact-card-header">
                         <img src={icon} alt={alt} />
                         <h3>{title}</h3>
                    </div>
                    <p>{description}</p>
               </div>
          </a>
     )
}

export default ContactCard