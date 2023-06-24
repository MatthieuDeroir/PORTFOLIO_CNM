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
import Fonts from "./Assets/Fonts/Fonts.css";

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

    return (
        <div className="App" style={{backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            {isOverlayVisible &&
                <Overlay onOverlayClick={handleOverlayClick} titleMoved={titleMoved} transparent={overlayTransparent}/>}
            <ThemeContext.Provider value={toggleTheme}>
                <ThemeProvider theme={theme}>
                    <Cursor />
                    <div className="container">
                        <Sidebar />
                        <MainContent/>
                    </div>
                </ThemeProvider>
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
