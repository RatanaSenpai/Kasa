
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/cards.css';
import accommodations from '../datas/logements.json';


const Cards = ({ id, title, cover }) => {
    return (
        <Link to={`/accomodation/${id}`} className="card">
            <img src={cover} alt={title} />
            <h2>{title}</h2>
        </Link>
    );
};

const CardGallery = () => {
    return (
        <div className="card-gallery">
            {accommodations.map((accommodation) => (
                <Cards key={accommodation.id} {...accommodation} />
            ))}
        </div>
    );
};

export default CardGallery;