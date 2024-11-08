import React from 'react'
import './footer.css'

const footer = () => {
    return (
        <footer>
            <a href="#" className='footer-logo'>Pardis</a>

            <ul className='permalink'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="experience">Experience</a></li>
                <li><a href="Services">Services</a></li>
                <li><a href="Portfolio">Portfolio</a></li>
                <li><a href="Testimonials">Testimonials</a></li>
                <li><a href="Contacts">Contacts</a></li>
            </ul>
            <div className="footer__copyright">
                <small>&copy; all rights reservd to EGATOR Tutorials(this website has been inspired by them)</small>
            </div>
            {/* <div className="footer__socials">
            <a href=""></a>
        </div> */}
        </footer>
    )
}

export default footer