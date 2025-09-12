import React from 'react'
import { Link } from 'react-router-dom'

const HomeLink = ({ to, icon, alt, title, description, className }) => {
  return (
     <Link to={to} className={`home-link ${className}`}>
          <div className="home-link-header">
               <img src={icon} alt={alt} />
               <h3>{title}</h3>
          </div>
          <p>{description}</p>
     </Link>
  )
}

export default HomeLink