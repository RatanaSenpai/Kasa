import React from 'react';
import Banner from '../components/Banner';
import coverPhotoAboutPage from '../assets/coverPhotoAboutPage.png';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
import '../styles/index.css';

const AboutPage = () => {
    return (
        <div className='about'>
            <Banner image={coverPhotoAboutPage} className="about-banner" />
            <Collapse />
            <Footer />
        </div>
    );
};

export default AboutPage;