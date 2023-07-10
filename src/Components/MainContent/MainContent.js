import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import { Button } from '@mui/material';
import './MainContent.css';
import { IconButton, Zoom, useScrollTrigger } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function ScrollToTopButton() {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Zoom in={trigger}>
            <IconButton onClick={handleClick} className="scrollToTopButton">
                <ArrowUpwardIcon />
            </IconButton>
        </Zoom>
    );
}



function MainContent({ onMenuClick }) {
    return (
        <div className="main-content">
            <Header/>
            <div className="content">
                <Body onMenuClick={onMenuClick}/>
                <Footer/>
                <ScrollToTopButton />  // Here's the button
            </div>
        </div>
    );
}

export default MainContent;
