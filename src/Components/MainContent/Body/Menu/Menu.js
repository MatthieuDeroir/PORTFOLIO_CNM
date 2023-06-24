import React from 'react';
import './Menu.css';

const Menu = (onMenuClick) => {
    return (
        <div className="menu">
            <div className="column">
                <div className="title"><a href="#section1" onClick={onMenuClick}>INSPIRATIONS</a></div>
                    <ul>
                        <li><a href="#section1-unedited">(UN)EDITED (galerie)</a></li>
                        <li><a href="#section1-blueHour">BLUE HOUR (video + galerie process en dessous)</a></li>
                        <li><a href="#section1-collage">COLLAGE</a></li>
                    </ul>
            </div>
            <div className="column">
                <div className="title"><a href="#section2">Inspirations</a></div>
                <ul>
                    <li><a href="#section2-angels">Angels (galerie)</a></li>
                    <li><a href="#section2-churchAndMountain">Church and Mountain (galerie)</a></li>
                    <li><a href="#section2-motherNature">Mother Nature is on my mind</a></li>
                </ul>
            </div>
            <div className="column">
                <div className="title"><a href="#section3">Skillful</a></div>
                <ul>
                    <li><a href="#section3-observationalDrawing">Observational drawing (Carousel)</a></li>
                    <li><a href="#section3-monumental">a miniature MONUMENTAL space</a></li>
                    <li><a href="#section3-welding">Welding and stained glass process (linked through Church and Mountain)</a></li>
                </ul>
            </div>
            <div className="column">
                <div className="title"><a href="#section4">Thoughtful</a></div>
            </div>
        </div>
    );
};

export default Menu;
