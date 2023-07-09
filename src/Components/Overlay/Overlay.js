import React from 'react';
import {useState} from 'react';
import './Overlay.css';
// import bgImage from '../../../public/Images/bg.webp';

function Overlay({onOverlayClick, titleMoved, transparent}) {
    const titleClass = titleMoved ? 'overlay-title' : 'overlay-title';
    const overlayClass = transparent ? 'overlay overlay-transparent' : 'overlay';

    return (
        <div className={overlayClass} onClick={onOverlayClick}>

            {/*<h1 className={titleClass}>CAMILLE NAJMA MARIE</h1>*/}
            <div className="overlay-content">
                <div className="overlay-text">
                    <p>"It’s with an investigative excitement and a microcosmic lens that Camille approaches her
                        artistic processes.
                        Her interdisciplinary works are a study on space, volume and colour. She likes to use a very
                        wide range of materials, such as glass, metal, paper, cotton wool, plastic and occasional up
                        cycled found objects, that she combines both with baroque extravaganza and minimal simplicity.
                        Most of her installations are with self-produced sounds and melodies, alike an enchanteress, she
                        walks us through childhood fairy tales and memories." -IKA Khan</p>
                </div>

            </div>
        </div>

    );
}

export default Overlay;
