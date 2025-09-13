import React from 'react'

const ProjectCard = ({ image, alt, title, description, link, linkText }) => {
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
     </div>
  )
}

export default ProjectCard