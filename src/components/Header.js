import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Navbar from './Navbar';
import '../styles/header.css';

const Header = () => {
    return (
        <header className='header'>
            <Link to="/"> {/* Le lien vers la page d'accueil */}
                <img src={logo} alt="logo de l'entreprise Kasa" />
            </Link>
            <Navbar />
        </header>
    );
};

export default Header;