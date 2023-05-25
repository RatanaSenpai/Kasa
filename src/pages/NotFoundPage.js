import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/notfoundpage.css';

const NotFoundPage = () => {
    return (
        <div className='notFound'>
            <h1 className='notfound-title'>404</h1>
            <p className='notfound-text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="notfound-link">Retour à la page d'accueil</Link>
            <Footer />
        </div>
    );
};

export default NotFoundPage;