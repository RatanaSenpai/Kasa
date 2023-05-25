import React from 'react';
import '../styles/banner.css';

const Banner = ({ image, text, className }) => {
    const bannerStyle = {
        backgroundImage: `url(${image})`,
    };
    return (
        <section className= {`banner ${className}`} style={bannerStyle}>
            {text && <p>{text}</p>}
        </section>
    );
};

export default Banner;