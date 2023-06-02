import React from 'react';
import { useParams } from 'react-router-dom';
import accommodations from '../datas/logements.json';
import NotFoundPage from '../pages/NotFoundPage';
import Carrousel from '../components/Carrousel';
import '../styles/accomodationpage.css'
import starActive from '../assets/starActive.png';
import starInactive from '../assets/starInactive.png';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';

const AccommodationPage = () => {
    const { id } = useParams();
    const accommodation = accommodations.find(acc => acc.id === id);
    
    if (!accommodation) return <NotFoundPage />;

    const StarRating = ({ rating }) => {
        return (
            <div className='accomodation-host-rating-stars'>
                {Array(5).fill().map((_, i) => (
                    <img 
                        key={i}
                        src={i < rating ? starActive : starInactive}
                        alt={`star ${i + 1}`} 
                    />
                ))}
            </div>
        );
    };

    return (
        <>
        <main className='main-content accommodation-page'>

            <div className='accomodation'>
                <Carrousel images={accommodation.pictures} />
            </div>
            <div className='accomodation-content'>
                <div className='accomodation-content-infos'>
                        <h1>{accommodation.title}</h1>
                        <p>{accommodation.location}</p>
                    <div className='accomodation-content-infos-tags'>
                        {accommodation.tags.map((tag, index) => (
                            <span key={index} className='tag'>{tag}</span>
                            ))}
                    </div>
                </div>
                <div className='accomodation-content-host'>
                    <div className='accomodation-content-host-section'>
                        <p className='accomodation-content-host-name'>{accommodation.host.name}</p>
                        <img src={accommodation.host.picture} alt={accommodation.host.name} />
                    </div>
                    <StarRating rating={accommodation.rating} />
                </div>
            </div>
            <div className='accomodation-collapse'>
                <div className='accomodation-collapse-description'>
                    <Collapse 
                        title={'Description'} 
                        content={accommodation.description} 
                    />
                </div>
                <div className='accomodation-collapse-equipment'>
                    <Collapse 
                        title={'Équipements'} 
                        content={
                            <ul>
                                {accommodation.equipments.map((equip, index) => <li key={index}>{equip}</li>)}
                            </ul>
                        }  
                    />
                </div>
            </div>
        </main>
        <Footer />
        </>
    );
};

export default AccommodationPage;