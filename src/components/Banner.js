import React from 'react';
import '../styles/banner.css';

const Banner = ({ image, text, className }) => (
    <section className={`banner ${className}`} style={{ backgroundImage: `url(${image})` }}>
        {text && <p>{text}</p>}
    </section>
);

export default Banner;