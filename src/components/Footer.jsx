import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaHome, FaArrowRight } from 'react-icons/fa'
import '../styles/Footer.css';

const Footer = ({ nextLink, nextText }) => {
  return (
     <footer className='site-footer'>
          <Link to='/' className='footer-link'>
               <FaArrowLeft className='footer-icon' />
               <span>Go back home</span>
               <FaHome className='footer-icon' />
          </Link>

          {nextLink && nextText && (
               <Link to={nextLink} className='footer-link'>
                    <span>{nextText}</span>
                    <FaArrowRight className='footer-icon' />
               </Link>
          )}
     </footer>
  )
}

export default Footer