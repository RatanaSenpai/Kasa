import React from 'react';
import logo from '../assets/logo_footer.png'
import '../styles/footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <img src={logo} alt="logo de l'entreprise Kasa" />
            <p className='copyright'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;