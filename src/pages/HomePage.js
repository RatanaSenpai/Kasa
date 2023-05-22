import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import CardGallery from '../components/Cards';
import accommodationsData from '../datas/logements.json';

const HomePage = () => {
    const [accommodations, setAccommodations] = useState([]);
    useEffect(() => {
        setAccommodations(accommodationsData);
    }, []);
    return (
        <div>
            <Banner />
            {/* <h1>Accueil</h1> */}
            <CardGallery accommodations={accommodations} />
            
        </div>
    );
};

export default HomePage;