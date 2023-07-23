import React, { useState, useEffect, useRef } from 'react';
import { ImageList, ImageListItem, useMediaQuery, useTheme, Modal, IconButton, Backdrop } from '@mui/material';
import ImageOverlay from '../ImageOverlay/ImageOverlay';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const debounce = (func, delay) => {
    let debounceTimer;
    return function(...args) {
        const context = this;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    }
}


function GalleryWithOverlay({ images, onImageClick, onModalClose }) {
    const [hoveredImage, setHoveredImage] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const cols = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;

    const handleOpen = (index) => {
        setSelectedImageIndex(index);
        if(onImageClick) onImageClick();
    };

    const handleClose = () => {
        setSelectedImageIndex(null);
        if(onModalClose) onModalClose();
    };

    const handleNext = () => {
        setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    };

    const keyHandler = (event) => {
        if (event.key === 'ArrowRight') debounce(handleNext, 300)();
        if (event.key === 'ArrowLeft') debounce(handlePrev, 300)();
    };

    useEffect(() => {
        window.addEventListener('keydown', keyHandler);
        return () => window.removeEventListener('keydown', keyHandler);
    }, [selectedImageIndex]);

    return (
        <>
            <ImageList variant="masonry" cols={cols} gap={8}>
                {images.map((item, index) => (
                    <ImageListItem
                        key={item.img}
                        onMouseEnter={() => setHoveredImage(index)}
                        onMouseLeave={() => setHoveredImage(null)}
                        onClick={() => handleOpen(index)}
                        style={cols === 1 ? { display: 'flex', justifyContent: 'center'} : {}}
                    >
                        <img
                            src={`${item.src}`}
                            srcSet={`${item.src}`}
                            alt={item.title}
                            loading="lazy"
                            style={{maxWidth: "100vw", width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1%', cursor: 'auto'}}
                        />
                        <ImageOverlay
                            title={item.title}
                            description={item.description}
                            isVisible={hoveredImage === index}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <Modal
                open={selectedImageIndex !== null}
                onClose={handleClose}
                BackdropComponent={Backdrop}
            >
                <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', alignItems: 'center'}}>
                    <IconButton onClick={handlePrev} style={{ fontSize: '2em', color: 'white', backgroundColor: 'rgba(0,0,0,0.6)', marginRight: '1em'}}>
                        <ArrowBackIosIcon/>
                    </IconButton>
                    <img src={images[selectedImageIndex]?.src} alt="Selected" style={{maxWidth: '90vw', height:"auto"}}/>
                    <IconButton onClick={handleNext} style={{ fontSize: '2em', color: 'white', backgroundColor: 'rgba(0,0,0,0.6)', marginLeft: '1em'}}>
                        <ArrowForwardIosIcon/>
                    </IconButton>
                </div>
            </Modal>
        </>
    );
}

export default GalleryWithOverlay;
