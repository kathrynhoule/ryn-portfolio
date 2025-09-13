import React from 'react'

const SideProjectCard = ({ image, alt, title, description, link, linkText, icons }) => {
  return (
     <div className='project-card'>
          <img src={image} alt={alt} className='project-image'/>
          <div className='project-text'>
               <h2>{title}</h2>
               <p>{description}
                    <a href={link} target='_blank' rel='noopener noreferrer'>
                         {linkText}
                    </a>
               </p>
          </div>

          <div className='made-with'>
          <h3>Made with:</h3>
               <div className='projects-icons'>
                    {icons.map((icon, index) => (
                         <a key={index} href={icon.link} target='_blank' rel='noopener noreferrer'>
                         <img src={icon.src} alt={icon.alt} />
                         </a>
                    ))}
               </div>
          </div>
     </div>
  )
}

export default SideProjectCard