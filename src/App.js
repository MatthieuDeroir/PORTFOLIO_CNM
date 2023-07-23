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

    // const colors = ['var(--color-1)', 'var(--color-2)', 'var(--color-3)', 'var(--color-4)', 'var(--color-5)'];

    const colors = [
        'linear-gradient(90deg, #2D232E 0%, #808080 20%, #a6a6a6 30%, #bfbfbf 45%, #d9d9d9 65%, #f2f2f2 80%, #ffffff 100%)', // Gray to white
        'linear-gradient(90deg, #4B8F8C 0%, #509898 15%, #56A1A4 30%, #5CAAB0 45%, #62B3BC 60%, #88c6c4 75%, #afe0de 90%, #ffffff 100%)', // Dark to light turquoise
        'linear-gradient(90deg, #F5DD90 0%, #F6DE94 15%, #F8E098 30%, #F9E39C 45%, #FBE6A0 60%, #f9f3c4 75%, #f9f7d7 90%, #ffffff 100%)', // Dark to light yellow
        'linear-gradient(90deg, #D3C1D2 0%, #D5C4D4 15%, #D8C7D6 30%, #DACAD8 45%, #DDCDDA 60%, #e4dce2 75%, #f0eef2 90%, #ffffff 100%)', // Dark to light purple
        'linear-gradient(90deg, #FFE2FE 0%, #FFDFFD 15%, #FFDCFD 30%, #FFD9FC 45%, #FFD6FC 60%, #ffdff6 75%, #ffffff 90%, #ffffff 100%)' // Dark to light pink
    ];



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
        // Regex to extract the start color of the gradient
        const startColor = colors[colorIndex].match(/\#\w{6}/)[0];
        return {gradient: colors[colorIndex], startColor};
    };


    const isDark = (color) => {
        const brightness = brightnessByColor(color);
        return brightness < 128;
    };

    const {gradient, startColor} = getColor();
    return (
        <div className="App" style={{ backgroundImage: gradient, transition: 'background 0.5s ease', color: isDark(startColor) ? 'white' : 'black' }}>
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
