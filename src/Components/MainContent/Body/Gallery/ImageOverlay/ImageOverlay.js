import React, { useState } from 'react';
function ImageOverlay({ title, description, isVisible, hovered }) {
    const lines = description.split('\n');

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                height: '100%',
                overflow: 'auto',
                position: 'absolute',
                bottom: '0',
                transform: hovered ? 'scale(1.03)' : 'scale(1)',
                transition: 'transform 0.3s ease-in-out',
                cursor: hovered ? 'zoom-in' : 'auto',
                zIndex: hovered  ? '4' : '0',
                left: '0',
                right: '0',
                borderRadius: '4%',
                visibility: isVisible ? 'visible' : 'hidden',
            }}
        >
            <h3>{title}</h3>
            {lines.map((line, index) => (
                <div key={index}>{line}</div>
            ))}
        </div>
    );
}

export default ImageOverlay;
