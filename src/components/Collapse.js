
import React, { useState } from 'react';
import collapseUp from '../assets/collapseUp.png';
import collapseDown from '../assets/collapseDown.png';
import '../styles/collapse.css'


const collapses = [
    {
        title: 'Fiabilité',
        text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
    },
    {
        title: 'Respect',
        text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    },
    {
        title: 'Service',
        text: 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.'
    },
    {
        title: 'Sécurité',
        text: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
    }
];

const Collapse = () => {
        const [openIndices, setOpenIndices] = useState([]);
    
        const handleClick = (index) => {
            if (openIndices.includes(index)) {
                setOpenIndices(openIndices.filter(i => i !== index));
            } else {
                setOpenIndices([...openIndices, index]);
            }
        }
    
        return (
            <div>
                {collapses.map((collapse, index) => (
                    <div key={index} className="collapse-container">
                        <div 
                            className={`collapse ${openIndices.includes(index) ? 'open' : ''}`} 
                            onClick={() => handleClick(index)}
                        >
                            <p>{collapse.title}</p>
                            <img 
                                className='collapse-icon' 
                                src={openIndices.includes(index) ? collapseUp : collapseDown} 
                                alt='collapse icon' 
                            />
                        </div>
                        {openIndices.includes(index) && (
                            <div className="rectangle">
                                <p className="rectangle-text">{collapse.text}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
};

export default Collapse;