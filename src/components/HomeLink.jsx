import React from 'react'
import { Link } from 'react-router-dom'

const HomeLink = () => {
  return (
     <Link to={to} className={`home-link ${className}`}>
          <img src={icon} alt={alt} />
          <div className="home-link-text">
               <h3>{title}</h3>
               <p>{description}</p>
          </div>
     </Link>
  )
}

export default HomeLink