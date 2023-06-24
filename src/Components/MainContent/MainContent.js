import React from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import './MainContent.css';

function MainContent( onMenuClick ) {
    return (
        <div className="main-content">
            <Header/>
            <div className="content">
                <Body onMenuClick={onMenuClick}/>
                <Footer/>
            </div>
        </div>
    );
}

export default MainContent;
