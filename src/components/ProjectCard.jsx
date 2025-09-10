import React from 'react'

const ProjectCard = ({ image, alt, title, description, link}) => {
  return (
     <div className='project-card'>
          <img src={image} alt={alt} className='project-image'/>
          <div className='project-text'>
               <h3>{title}</h3>
               <p>{description}
                    <a href={link} target="_blank" rel="noopener noreferrer">
                         GitHub
                    </a>
               </p>
          </div>
     </div>
  )
}

export default ProjectCard