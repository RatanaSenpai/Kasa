import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import CardGallery from '../components/Cards';
import accommodationsData from '../datas/logements.json';
import coverPhotoHomePage from '../assets/coverPhotoHomePage.png';

const HomePage = () => {
    const [accommodations, setAccommodations] = useState([]);
    useEffect(() => {
        setAccommodations(accommodationsData);
    }, []);
    return (
        <div className='home'>
            <Banner image={coverPhotoHomePage} text="Chez vous, partout et ailleurs" className="home-banner"/>
            <CardGallery accommodations={accommodations} />
        </div>
    );
};

export default HomePage;

