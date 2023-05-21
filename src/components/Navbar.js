import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link nav-active" : "nav-link")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link nav-active" : "nav-link")}>
                    <li>A Propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navbar;