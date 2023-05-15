import React from 'react'
import './Footer.css'
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='container footer'>
        <div className='footer-box'>
          <h4>Useful Links</h4>
            <div className='footer-links'>
              <a href='#'>&bull; Support</a>
              <a href='#'>&bull; About</a>
              <a href='#'>&bull; Learn</a>
              <a href='#'>&bull; Hosting</a>
              <a href='#'>&bull; Mesenger</a>
            </div>
        </div>
        <div className='footer-box'>
        <h4>Support</h4>
            <div className='footer-links'>
              <a href='#'>&bull; Support</a>
              <a href='#'>&bull; About</a>
              <a href='#'>&bull; Learn</a>
              <a href='#'>&bull; Hosting</a>
              <a href='#'>&bull; Mesenger</a>
            </div>
        </div>
        <div className='footer-box'>
          <h4>Contact Us</h4>
          <div className='footer-contact'>
            <p>
              <FaMapMarkerAlt/> &nbps; Address: United States
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +1230 123 1231.
            </p>
            <p>
              <FaFax /> &nbsp; Fax: +12342762178
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: info@socialx.com
            </p>
            <p>
              <FaGlobe /> &nbsp; Website: www.socialx.com
            </p>
          </div>
        </div>
        <div className='footer-logo'>
          <img src={logo}/>
          <p className='u-small-text'>
          &copy; Copyright 2021. SocialX.com
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
