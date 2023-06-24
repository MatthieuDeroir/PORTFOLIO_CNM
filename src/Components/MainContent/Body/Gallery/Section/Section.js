import React from 'react';
import './Section.css';

const Section = ({ images }) => {
    return (
        <div className="gallery">
            {images.map((image, index) => (
                <div key={index} className="gallery-item">
                    <img src={image.url} alt={image.description} />
                    <div className="image-overlay">
                        <div className="image-description">{image.description}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Section;
