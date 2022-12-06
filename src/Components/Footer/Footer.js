import React from 'react';
import "./Footer.css";
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <footer>
            <div className='footer-logo'>
                <img src={logo} alt="logo" />
            </div>

            {/* Copyright */}
            <div className='footer-copyright'>
                <p>© 2022 Sobhan Sai Kuriti. All rights reserved.</p>
            </div>

            {/* Social icons */}
            <ul className='footer-social'>
                <li>
                    <a href='#'>
                        <i className='fa-brands fa-facebook-f'></i>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <i className='fa-brands fa-twitter'></i>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <i className='fa-brands fa-youtube'></i>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <i className='fa-brands fa-linkedin'></i>
                    </a>
                </li>

            </ul>
        </footer>
    )
}

export default Footer;