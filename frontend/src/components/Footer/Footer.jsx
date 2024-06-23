import React from 'react'
import './Footer.css'

import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt='logo' />
                <p>For any query, contact me</p>
                <div className='footer-social-icons'>
                {/* <a href="https://www.instagram.com/anurag_16_01/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="3x" />
                </a> */}
                    <a href="https://www.instagram.com/anurag_16_01/" target='_blank'><img src="data:image/png;base64,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" alt=""></img></a>
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