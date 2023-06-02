import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={() => location.pathname === '/' ? "nav-link nav-active" : "nav-link"}>
                    <li className="home-link">Accueil</li>
                </NavLink>
                <NavLink to="/about" className={() => location.pathname === '/about' ? "nav-link nav-active" : "nav-link"}>
                    <li className="about-link">A Propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navbar;