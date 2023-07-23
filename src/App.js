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
        'linear-gradient(90deg, #2D232E 0%, #bbbbbb 20%, #cccccc 40%, #dddddd 60%, #eeeeee 80%, #fafafa 100%)', // Gray to white
        'linear-gradient(90deg, #4B8F8C 0%, #509898 20%, #56A1A4 40%, #5CAAB0 60%, #62B3BC 80%, #afe0de 100%)', // Dark to light turquoise
        'linear-gradient(90deg, #F5DD90 0%, #F6DE94 20%, #F8E098 40%, #F9E39C 60%, #FBE6A0 80%, #f9f7d7 100%)', // Dark to light yellow
        'linear-gradient(90deg, #D3C1D2 0%, #D5C4D4 20%, #D8C7D6 40%, #DACAD8 60%, #DDCDDA 80%, #f0eef2 100%)', // Dark to light purple
        'linear-gradient(90deg, #FFE2FE 0%, #FFDFFD 20%, #FFDCFD 40%, #FFD9FC 60%, #FFD6FC 80%, #ffffff 100%)' // Dark to light pink
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
