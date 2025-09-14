import React from 'react'
import '../styles/AvatarCard.css';

const AvatarCard = ({ avatar, facts, icons, className, style }) => {
     return (
          <div className={`avatar-container ${className}`} style={style}>
               <div className='avatar-content'>
               <img src={avatar} alt='Avatar' className='avatar-img' />

                    <div className='avatar-info'>
                         <ul className='quick-facts'>
                              {facts.map((fact, index) => (
                                   <li key={index}>{fact}</li>
                              ))}
                         </ul>

                         <div className='avatar-icons'>
                              {icons.map((icon, index) => (
                                   <a key={index} href={icon.link} target='_blank' rel='noopener noreferrer'>
                                   <img src={icon.src} alt={icon.alt} />
                                   </a>
                              ))}
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default AvatarCard