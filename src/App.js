import React, { useState, useEffect } from 'react';
import Overlay from './Components/Overlay/Overlay';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';

function App() {
    const [isContentVisible, setContentVisible] = useState(false);

    useEffect(() => {
        const handleClick = () => {
            setContentVisible(true);
        }
        window.addEventListener('click', handleClick);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener('click', handleClick);
    }, []);

    return (
        <div className="App">
            { !isContentVisible && <Overlay /> }
            { isContentVisible && (
                <>
                    <Header />
                    <Body />
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;
