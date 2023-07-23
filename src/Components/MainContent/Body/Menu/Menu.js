import React, {useState, useRef, useEffect} from 'react';
import './Menu.css';

const Menu = ({onMenuClick, showMenu}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(true); // state to track if menu is open
    const [previousMenuState, setPreviousMenuState] = useState(true); // state to track previous menu state

    useEffect(() => {
        // if the menu is closed, set the previous menu state to false
        if (!isMenuOpen) {
            setPreviousMenuState(false);
        }
        // if the menu is open, set the previous menu state to true
        else {
            setPreviousMenuState(true);
        }
        if (!showMenu) {
            setIsMenuOpen(false);
        }
        else if (showMenu && previousMenuState) {
            setIsMenuOpen(true);
        }
    }, [showMenu]);

    return (
        <div style={{position: 'relative', height: '100%'}}>
                <div className={`menu sticky-menu ${isMenuOpen ? "" : "hide"}`}>
                    {isMenuOpen && showMenu && (
                    <button
                        className="toggle-menu-button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        ▼
                    </button>

                        )}

            {!isMenuOpen && (
                <button
                    className="toggle-menu-button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
            ▲
                </button>
            )}
                    <div className="column">
                        <div className="title"><a href="#section1">INSPIRATIONS</a></div>
                        <ul>
                            <li><a href="#blueHour">BLUE HOUR</a></li>
                            <li><a href="#unedited">UN?EDITED</a></li>
                            <li><a href="#collages">COLLAGES</a></li>
                        </ul>
                    </div>
                    <div className="column">
                        <div className="title"><a href="#section2">Inspiration</a></div>
                        <ul>
                            <li><a href="#angels">Angels</a></li>
                            <li><a href="#durable-materials">Durable Materials</a></li>
                            <li><a href="#mother-nature">Mother Nature is on my mind</a></li>
                        </ul>
                    </div>
                    <div className="column">

                    </div>
                    <div className="column">
                        <div className="title"><a href="#section3">Practices</a></div>
                        <ul>
                            <li><a href="#analog-drawings">Analog drawings</a></li>
                            <li><a href="#digital-drawings">Digital drawings</a></li>
                            <li><a href="#object-photography">Object photography</a></li>
                        </ul>
                    </div>
                    {/* Menu contents */}
                </div>
        </div>
    );
};

export default Menu;
