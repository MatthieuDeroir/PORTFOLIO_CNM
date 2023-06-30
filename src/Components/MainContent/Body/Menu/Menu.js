import React from 'react';
import './Menu.css';

const Menu = (onMenuClick) => {
    return (
        <div className="menu">
            <div className="column">
                <div className="title"><a href="#section1" onClick={onMenuClick}>INSPIRATIONS</a></div>
                    <ul>
                        <li><a href="#section1-unedited">(UN)EDITED</a></li>
                        <li><a href="#section1-blueHour">BLUE HOUR</a></li>
                        <li><a href="#section1-collage">COLLAGE</a></li>
                    </ul>
            </div>
            <div className="column">
                <div className="title"><a href="#section2">Inspiration</a></div>
                <ul>
                    <li><a href="#section2-angels">Angels</a></li>
                    <li><a href="#section2-churchAndMountain">Durable Materials</a></li>
                    <li><a href="#section2-motherNature">Mother Nature is on my mind</a></li>
                </ul>
            </div>
            <div className="column">

            </div>
            <div className="column">
                <div className="title"><a href="#section4">Practices</a></div>
                <ul>
                    <li><a href="#section3-observationalDrawing">Analog drawings</a></li>
                    <li><a href="#section3-monumental">Digital drawings</a></li>
                    <li><a href="#section3-welding">Object photography</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;
