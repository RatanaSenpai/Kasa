import React from 'react';
import logo from '../assets/logo.png';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Logo de l'entreprise Kasa" />
            <Navbar />
        </header>
    );
};

export default Header;