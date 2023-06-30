import React, {useState, useEffect} from 'react';
import Overlay from './Components/Overlay/Overlay';
import Header from './Components/MainContent/Header/Header';
import Body from './Components/MainContent/Body/Body';
import Footer from './Components/MainContent/Footer/Footer';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import ThemeContext from './Assets/Themes/ThemeContext'; // Assurez-vous d'importer le ThemeContext correctement
import bgImage from './Assets/Images/bg.webp';
import Cursor from './Components/Cursor/Cursor';
import Sidebar from "./Components/Sidebar/Sidebar";
import MainContent from "./Components/MainContent/MainContent";
import { Grid } from '@mui/material';

import Fonts from "./Assets/Fonts/Fonts.css";
import './App.css';

function App() {
    //Overlay Configuration
    const [isOverlayVisible, setIsOverlayVisible] = useState(true);
    const [titleMoved, setTitleMoved] = useState(false);
    const [overlayTransparent, setOverlayTransparent] = useState(false);

    const handleOverlayClick = () => {
        setOverlayTransparent(true);
        setTitleMoved(true);
        setTimeout(() => {
            setIsOverlayVisible(false);
        }, 1000);
    };

    //Mode
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    const toggleTheme = () => setDarkMode(!darkMode);

    const [menuClicked, setMenuClicked] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuClicked ? "auto" : "auto";
    }, [menuClicked]);

    const handleMenuClick = () => {
        setMenuClicked(true);
    };

    return (
        <div className="App">
            {isOverlayVisible &&
                <Overlay onOverlayClick={handleOverlayClick} titleMoved={titleMoved} transparent={overlayTransparent}/>}
            <ThemeContext.Provider value={toggleTheme}>
                <ThemeProvider theme={theme}>
                    <Cursor />
                    <Grid container>
                        <Grid item xs={1}>
                            <Sidebar />
                        </Grid>
                        <Grid item xs={11}>
                            <MainContent onMenuClick={handleMenuClick}/>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
