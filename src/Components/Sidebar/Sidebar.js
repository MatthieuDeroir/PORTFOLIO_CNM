import React, { useEffect, useState } from 'react';
import './Sidebar.css';

function Sidebar() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY || window.pageYOffset;
            const maxScrollTop = documentHeight - windowHeight;
            const progress = (scrollTop / maxScrollTop) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const calculateBrightness = (index) => {
        const colorCount = 5;
        const progressStep = 100 / colorCount;
        const visibleIndex = Math.floor(scrollProgress / progressStep);
        const startProgress = visibleIndex * progressStep;
        const endProgress = (visibleIndex + 1) * progressStep;
        const progressWithinRange = (scrollProgress - startProgress) / progressStep;
        const inverseProgress = 1 - progressWithinRange;
        let brightness = index === visibleIndex ? inverseProgress : index === visibleIndex - 1 ? progressWithinRange : 1;
        brightness = Math.max(brightness, 0.9); // Réglez ici le seuil d'opacité minimum
        return brightness;
    };

    return (
        <div className="sidebar">
            <div className="color-block color-1" style={{ opacity: calculateBrightness(0) }}></div>
            <div className="color-block color-2" style={{ opacity: calculateBrightness(1) }}></div>
            <div className="color-block color-3" style={{ opacity: calculateBrightness(2) }}></div>
            <div className="color-block color-4" style={{ opacity: calculateBrightness(3) }}></div>
            <div className="color-block color-5" style={{ opacity: calculateBrightness(4) }}></div>
        </div>
    );
}

export default Sidebar;
