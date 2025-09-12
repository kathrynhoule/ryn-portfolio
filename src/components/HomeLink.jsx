import React from 'react'
import { Link } from 'react-router-dom'
import { HiChevronRight } from 'react-icons/hi'

const HomeLink = ({ to, icon, alt, title, description, className }) => {
  return (
     <Link to={to} className={`home-link ${className}`}>
          <div className="home-link-header">
               <img src={icon} alt={alt} />
               <h3>{title}</h3>
          </div>
          <div className="home-link-description">
               <span className="home-link-icon-wrapper">
                    <HiChevronRight />
               </span>
               <p>{description}</p>
          </div>
     </Link>
  )
}

export default HomeLink