import React, {useState, useEffect} from 'react';
import Overlay from './Components/Overlay/Overlay';
import Header from './Components/MainContent/Header/Header';
import Body from './Components/MainContent/Body/Body';
import Footer from './Components/MainContent/Footer/Footer';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import ThemeContext from './Assets/Themes/ThemeContext';
import Cursor from './Components/Cursor/Cursor';
import Sidebar from "./Components/Sidebar/Sidebar";
import MainContent from "./Components/MainContent/MainContent";
import {Grid} from '@mui/material';

import Fonts from "./Assets/Fonts/Fonts.css";
import './App.css';

function brightnessByColor(color) {
    var isHEX = color.indexOf("#") === 0;
    var isRGB = color.indexOf("rgb") === 0;
    var r;
    var g;
    var b;

    if (isHEX) {
        const m = color.substr(1).match(color.length === 7 ? /(\S{2})/g : /(\S{1})/g);
        if (m) {
            r = parseInt(m[0], 16);
            g = parseInt(m[1], 16);
            b = parseInt(m[2], 16);
        }
    }

    if (isRGB) {
        const m = color.match(/(\d+){3}/g);
        if (m) {
            r = m[0];
            g = m[1];
            b = m[2];
        }
    }

    if (typeof r !== "undefined") {
        return (r * 299 + g * 587 + b * 114) / 1000;
    }

    return null;
}


function App() {
    const [isOverlayVisible, setIsOverlayVisible] = useState(true);
    const [titleMoved, setTitleMoved] = useState(false);
    const [overlayTransparent, setOverlayTransparent] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [menuClicked, setMenuClicked] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const colors = ['var(--color-1)', 'var(--color-2)', 'var(--color-3)', 'var(--color-4)', 'var(--color-5)'];

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
    };

    const handleOverlayClick = () => {
        setOverlayTransparent(true);
        setTitleMoved(true);
        setTimeout(() => {
            setIsOverlayVisible(false);
        }, 1000);
    };

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    const toggleTheme = () => setDarkMode(!darkMode);

    useEffect(() => {
        document.body.style.overflow = menuClicked ? "auto" : "auto";
    }, [menuClicked]);

    const handleMenuClick = () => {
        setMenuClicked(true);
    };

    const getColor = () => {
        const colorIndex = Math.floor((scrollPosition / window.innerHeight) % colors.length);
        return colors[colorIndex];
    };

    const isDark = (color) => {
        // RGB color strings are of format "rgb(r, g, b)"
        const rgbColor = color.match(/(\d+){3}/g);
        if (!rgbColor) return false; // If match fails, return early with false
        const r = rgbColor[0];
        const g = rgbColor[1];
        const b = rgbColor[2];
        const brightness = brightnessByColor(r, g, b);
        return brightness < 128;
    };

    const currentColor = getColor();

    return (
        <div className="App" style={{ backgroundColor: currentColor, transition: 'background-color 0.5s ease', color: isDark(currentColor) ? 'white' : 'black' }}>
            {isOverlayVisible &&
                <Overlay onOverlayClick={handleOverlayClick} titleMoved={titleMoved} transparent={overlayTransparent}/>}
            <ThemeContext.Provider value={toggleTheme}>
                <ThemeProvider theme={theme}>
                    <Cursor/>
                    <Grid container>
                        <Grid item xs={12} md={1}>
                            <Sidebar/>
                        </Grid>
                        <Grid item xs={12} md={11} container justifyContent="center" alignItems="center">
                            <MainContent onMenuClick={handleMenuClick}/>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
