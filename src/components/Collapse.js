import React, { useState } from 'react';
import collapseUp from '../assets/collapseUp.png';
import collapseDown from '../assets/collapseDown.png';
import '../styles/collapse.css'

const Collapse = ({ title, content, titleFontSize, contentFontSize }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className={`collapse-container ${isOpen ? 'open' : ''}`} onClick={handleClick}>
            <div className="collapse">
                <p style={{fontSize: titleFontSize}}>{title}</p>
                <img className='collapse-icon' src={isOpen ? collapseUp : collapseDown} alt='collapse icon' />
            </div>
            {isOpen && (
                <div className="collapse-rectangle">
                    <p style={{fontSize: contentFontSize}}>{content}</p>
                </div>
            )}
        </div>
    );
};

export default Collapse;
