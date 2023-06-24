import React from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import './MainContent.css';

function MainContent() {
    return (
        <div className="main-content">
            <Header/>
            <div className="content">
                <Body/>
                <Footer/>
            </div>
        </div>
    );
}

export default MainContent;
