import React from 'react'
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Smith</h1>
                <ul className="footer__list">
                    <li>
                        <a href='#about' className='footer__link'>About</a>
                    </li>
                    <li>
                        <a href='#portfolio' className='footer__link'>Projects</a>
                    </li>
                    <li>
                        <a href='#testimonials' className='footer__link'>Testimonials</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://www.instagram.com/shashanksdahake/" className="footer__social" target="_blank">
                        <i class="uil uil-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/shashank-dahake-b46480257" className="footer__social" target="_blank">
                        <i class="uil uil-linkedin-alt"></i>
                    </a>
                    <a href="https://www.github.com/shashankDahake7" className="footer__social" target="_blank">
                        <i class="uil uil-github-alt"></i>
                    </a>
                </div>
                <span className="footer__copy">
                    &#169; Shashank. All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer;