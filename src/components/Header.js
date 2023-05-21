import React from 'react';
import logo from '../assets/logo.png';
import Navbar from './Navbar';
import '../styles/header.css';

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt="logo de l'entreprise Kasa" />
            <Navbar />
        </header>
    );
};

export default Header;