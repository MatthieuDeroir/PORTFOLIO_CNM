import logo from './logo.svg';
import './App.css';
import React from 'react';
import Overlay from './Components/Overlay/Overlay';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Overlay/>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}

export default App;
