import React from 'react';
import Banner from '../components/Banner';
import coverPhotoAboutPage from '../assets/coverPhotoAboutPage.png';


const AboutPage = () => {
    return (
        <div className='about'>
            <Banner image={coverPhotoAboutPage} />
        </div>
    );
};

export default AboutPage;