import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaHome } from 'react-icons/fa'
import '../styles/Footer.css';

const Footer = () => {
  return (
     <footer className='site-footer'>
          <Link to='/' className='footer-link'>
               <FaArrowLeft className='footer-icon' />
               <span>Go back home</span>
               <FaHome className='footer-icon' />
          </Link>
     </footer>
  )
}

export default Footer