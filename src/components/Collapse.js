
import React, { useState } from 'react';
import collapseUp from '../assets/collapseUp.png';
import collapseDown from '../assets/collapseDown.png';
import '../styles/collapse.css'

const Collapse = ({ title, content, isFontSmall, customContentClass, containerClass }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className={`collapse-container ${customContentClass} ${containerClass}`}>
            <div className={`collapse ${isOpen ? 'open' : ''}`} onClick={handleClick}>
                <p className={`${isFontSmall ? 'font-small' : ''}`}>{title}</p>
                <img className='collapse-icon' src={isOpen ? collapseUp : collapseDown} alt='collapse icon' />
            </div>
            {isOpen && (
                <div className="collapse-rectangle">
                    <p className={`rectangle-text ${isFontSmall ? 'font-small' : ''}`}>{content}</p>
                </div>
            )}
        </div>
    );
};

export default Collapse;