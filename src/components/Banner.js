import React from 'react';
import coverPhoto from '../assets/coverPhotoHomePage.png';
import '../styles/banner.css';

const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url(${coverPhoto})`,
    };
    return (
        <section className= 'banner' style={bannerStyle}>
            <p>Chez vous, partout et ailleurs</p>
        </section>
    );
};

export default Banner;