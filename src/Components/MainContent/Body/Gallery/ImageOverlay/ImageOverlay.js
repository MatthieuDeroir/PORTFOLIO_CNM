function ImageOverlay({ title, description }) {
    const lines = description.split('\n');
    return (

        <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            padding: '10px',
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
        }}>
            <h3>{title}</h3>
            {lines.map((line, index) => <div key={index}>{line}</div>)}
        </div>
    );
}

export default ImageOverlay;