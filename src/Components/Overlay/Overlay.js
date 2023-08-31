import React from 'react';
import {useState} from 'react';
import './Overlay.css';
// import bgImage from '../../../public/Images/bg.webp';

function Overlay({onOverlayClick, titleMoved, transparent}) {
    const titleClass = titleMoved ? 'overlay-title' : 'overlay-title';
    const overlayClass = transparent ? 'overlay overlay-transparent' : 'overlay';

    return (
        <div className={overlayClass} onClick={onOverlayClick}>

            <div className="overlay-content">
                <div className="overlay-text">
                    <p>Welcome. <i>Plural inspirations</i> is a portfolio website in which I organised my works in a way that reflects the duality of my aesthetic sense.
                        Spiritual and personal experiences inspire both my artificial and organic palettes.
                        I’ve explored a variety of mediums, plurality is a crucial part of my layered process.
                        It is with a instinctive process and an analytical approach that my work finds meaning.
                        <p>Please enjoy. [click anywhere on this box]</p>
                        <p>Camille Najma Marie 2023</p>
                    </p>
                </div>

            </div>
        </div>

    );
}

export default Overlay;
