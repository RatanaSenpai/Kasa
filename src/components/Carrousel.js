// useState permet de créer et de gérer l'état des éléments du composant, ici l'indice de l'image
import React, { useState } from 'react';
import '../styles/carrousel.css';
import carrouselArrowLeft from '../assets/carrouselArrowLeft.png';
import carrouselArrowRight from '../assets/carrouselArrowRight.png';

const Carrousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imageCount = images.length;

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => prevIndex === 0 ? imageCount - 1 : prevIndex - 1);
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => prevIndex === imageCount - 1 ? 0 : prevIndex + 1);
    };

    return (
        <div className="carousel">
            <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`}/>
            {imageCount > 1 && <button className="carrouselArrowLeft" onClick={handlePrevClick}><img src={carrouselArrowLeft} alt="Previous"/></button>}
            {imageCount > 1 && <button className="carrouselArrowRight" onClick={handleNextClick}><img src={carrouselArrowRight} alt="Next"/></button>}
            {imageCount > 1 && <div className="carrousel-image-counter">{currentImageIndex + 1}/{imageCount}</div>}
        </div>
    );
};

export default Carrousel;




