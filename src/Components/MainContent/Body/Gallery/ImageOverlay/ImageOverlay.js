import React, { useState } from 'react';
function ImageOverlay({ title, description, isVisible, borderRadius }) {
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
                maxWidth: '100%',
                height: '100%',
                overflow: 'auto',
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                borderRadius: '1%',
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
