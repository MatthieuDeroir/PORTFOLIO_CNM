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

    const hexToRgb = (hex) => {
        let r = 0, g = 0, b = 0;

        if (hex.length === 4) {
            r = "0x" + hex[1] + hex[1];
            g = "0x" + hex[2] + hex[2];
            b = "0x" + hex[3] + hex[3];
        } else if (hex.length === 7) {
            r = "0x" + hex[1] + hex[2];
            g = "0x" + hex[3] + hex[4];
            b = "0x" + hex[5] + hex[6];
        }
        return {r: +r, g: +g, b: +b};
    }

    const calculateColor = (color, index) => {
        const colorCount = 5;
        const progressStep = 100 / colorCount;
        const visibleIndex = Math.floor(scrollProgress / progressStep);
        const startProgress = visibleIndex * progressStep;
        const endProgress = (visibleIndex + 1) * progressStep;
        const progressWithinRange = (scrollProgress - startProgress) / progressStep;
        const inverseProgress = 1 - progressWithinRange;

        let brightness = index === visibleIndex ? inverseProgress : index === visibleIndex - 1 ? progressWithinRange : 1;
        brightness = Math.max(brightness, 1); // Réglez ici le seuil de luminosité minimum

        const rgbColor = hexToRgb(color);
        const r = Math.min(Math.floor(rgbColor.r * brightness), 255);
        const g = Math.min(Math.floor(rgbColor.g * brightness), 255);
        const b = Math.min(Math.floor(rgbColor.b * brightness), 255);

        return `rgb(${r},${g},${b})`;
    };

    return (
        <div className="sidebar">
            <div className="color-block color-1"></div>
            <div className="color-block color-2"></div>
            <div className="color-block color-3"></div>
            <div className="color-block color-4"></div>
            <div className="color-block color-5"></div>
        </div>
    );
}

export default Sidebar;
