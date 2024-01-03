import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer_container container'>
                <div className="footer_social">
                    <a href="https://www.instagram.com/arbaj_1147/" className="footer-social-link">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/arbaj-dilip-shaikh/" className="footer-social-link">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/shaikharbaj" className="footer-social-link">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    
                </div>
                <span className='footer_copy'>
                       &copy;Copyright Arbaj Shaikh . All Right Reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer