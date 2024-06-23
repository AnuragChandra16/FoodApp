import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt='logo' />
                <p>For any query, contact me</p>
                <div className='footer-social-icons'>
                <a href="https://www.instagram.com/anurag_16_01/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="3x" />
                </a>
                    <a href="https://x.com/AnuragChan37994" target='_blank'><img src={assets.twitter_icon} alt=""></img></a>
                    <a href="https://www.linkedin.com/in/anurag-chandra-485876267/" target="_blank" rel="noopener noreferrer">
                    <img src={assets.linkedin_icon} alt="LinkedIn Profile"></img>
                    </a>

                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>

                </ul>
            </div>
            <div className='footer-content-right'>
    <h2>GET IN TOUCH</h2>
    <ul>
        <li><a href="tel:9875514469">Phone: 9875514469</a></li>
        <li><a href="mailto:anuragchandra1601@gmail.com">anuragchandra1601@gmail.com</a></li>
    </ul>
</div>

        </div>
        <hr></hr>
        <p className='footer-copyright'>Copyright 2024 &copy; Tomato.com - All Right Reserved.</p>


    </div>
  )
}

export default Footer