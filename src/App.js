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
import { Grid } from '@mui/material';

import Fonts from "./Assets/Fonts/Fonts.css";
import './App.css';

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
        console.log("d")
        const colorIndex = Math.floor((scrollPosition / window.innerHeight) % colors.length);
        return colors[colorIndex];
    };

    return (
        <div className="App" style={{ backgroundColor: getColor() }}>
            {isOverlayVisible &&
                <Overlay onOverlayClick={handleOverlayClick} titleMoved={titleMoved} transparent={overlayTransparent}/>}
            <ThemeContext.Provider value={toggleTheme}>
                <ThemeProvider theme={theme}>
                    <Cursor />
                    <Grid container>
                        <Grid item xs={12} md={1}>
                            <Sidebar />
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
