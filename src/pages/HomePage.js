// useEffect est utilisé pour des effets secondaires ici une opération asynchrone
import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import CardGallery from '../components/Cards';
import accommodationsData from '../datas/logements.json';
import coverPhotoHomePage from '../assets/coverPhotoHomePage.png';

const HomePage = () => {
    const [accommodations, setAccommodations] = useState([]);
    useEffect(() => {
        setAccommodations(accommodationsData);
    }, []); // le tableau est utilisé pour lister les dépendances de l'effet. Si une des dépendances change, l'effet se déclenchera de nouveau.
    return (
        <div className='home'>
            <Banner image={coverPhotoHomePage} text="Chez vous, partout et ailleurs" className="home-banner"/>
            <CardGallery accommodations={accommodations} /> 
        </div>
    );
};

export default HomePage;

