import React from 'react';
import './Menu.css';

const Menu = () => {
    return (
        <div className="menu">
            <h1>Menu</h1>
            <div className="column">
                <h3><a href="portfolio_cnm/src/Components/MainContent/Body/Menu#section1">INSPIRATIONS</a></h3>
                    <ul>
                        <li><a href="portfolio_cnm/src/Components/MainContent/Body/Menu#section1-unedited">(UN)EDITED (galerie)</a></li>
                        <li><a href="portfolio_cnm/src/Components/MainContent/Body/Menu#section1-blueHour">BLUE HOUR (video + galerie process en dessous)</a></li>
                        <li><a href="portfolio_cnm/src/Components/MainContent/Body/Menu#section1-collage">COLLAGE</a></li>
                    </ul>
            </div>
            <div className="column">
                <h3><a href="portfolio_cnm/src/Components/MainContent/Body/Menu#section2">Inspirations</a></h3>
                <ul>
                    <li><a href="portfolio_cnm/src/Components/MainContent/Body/Menu#section2-angels">Angels (galerie)</a></li>
                    <li><a href="portfolio_cnm/src/Components/MainContent/Body/Menu#section2-churchAndMountain">Church and Mountain (galerie)</a></li>
                    <li><a href="portfolio_cnm/src/Components/MainContent/Body/Menu#section2-motherNature">Mother Nature is on my mind</a></li>
                </ul>
            </div>
            <div className="column">
                <h3><a href="portfolio_cnm/src/Components/MainContent/Body/Menu#section3">Skillful</a></h3>
                <ul>
                    <li><a href="portfolio_cnm/src/Components/MainContent/Body/Menu#section3-observationalDrawing">Observational drawing (Carousel)</a></li>
                    <li><a href="portfolio_cnm/src/Components/MainContent/Body/Menu#section3-monumental">a miniature MONUMENTAL space</a></li>
                    <li><a href="portfolio_cnm/src/Components/MainContent/Body/Menu#section3-welding">Welding and stained glass process (linked through Church and Mountain)</a></li>
                </ul>
            </div>
            <div className="column">
                <h3><a href="portfolio_cnm/src/Components/MainContent/Body/Menu#section4">Thoughtful</a></h3>
            </div>
        </div>
    );
};

export default Menu;
