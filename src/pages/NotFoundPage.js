import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/notfoundpage.css';
import '../styles/footer.css';

const NotFoundPage = () => {
    return (
        <main className='notfound-page main-content'>
            <div className='notfound-page-content'>
                    <h1 className='notfound-page-content-title'>404</h1>
                    <p className='notfound-page-content-text'>Oups! La page que vous demandez n'existe pas.</p>
                    <Link to="/" className="notfound-page-content-link">Retour à la page d'accueil</Link>
            </div>
        </main>
    );
};

export default NotFoundPage;