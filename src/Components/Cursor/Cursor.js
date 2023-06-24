import React, { useState, useEffect } from 'react';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="custom-cursor"
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        />
    );
};

export default Cursor;
