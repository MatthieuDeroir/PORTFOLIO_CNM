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
    const [hovered, setHovered] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const cols = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;

    const onMouseEnter = (index) => {
        setHovered(index);
        setHoveredImage(index);
    };

    const onMouseLeave = () => {
        setHovered(null);
        setHoveredImage(null);
    };

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
        if (selectedImageIndex !== null) {
            window.addEventListener('keydown', keyHandler);
        } else {
            window.removeEventListener('keydown', keyHandler);
        }

        return () => window.removeEventListener('keydown', keyHandler);
    }, [selectedImageIndex]);

    return (
        <>
            <ImageList variant="masonry" cols={cols} gap={8} style={{padding:"20px"}}>
                {images.map((item, index) => (
                    <ImageListItem
                        key={item.img}
                        onMouseEnter={() => onMouseEnter(index)}
                        onMouseLeave={onMouseLeave}
                        onClick={() => handleOpen(index)}
                        style={cols === 1 ? { display: 'flex', justifyContent: 'center'} : {}}
                    >
                        <img
                            src={`${item.src}`}
                            srcSet={`${item.src}`}
                            alt={item.title}
                            loading="lazy"
                            style={{
                                maxWidth: "100vw",
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '4%',
                                cursor: hovered === index ? 'zoom-in' : 'auto',
                                zIndex: hovered === index ? '4' : '0',
                                boxShadow: '10px 10px 10px 1px rgba(0,0,0,0.5)',
                                transform: hovered === index ? 'scale(1.03)' : 'scale(1)',
                                transition: 'transform 0.3s ease-in-out'
                            }}
                        />

                        <ImageOverlay
                            title={item.title}
                            description={item.description}
                            isVisible={hoveredImage === index}
                            hovered={hovered === index}
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
                    <img src={images[selectedImageIndex]?.src} alt="Selected" style={{width:'70vw'}}/>
                    <IconButton onClick={handleNext} style={{ fontSize: '2em', color: 'white', backgroundColor: 'rgba(0,0,0,0.6)', marginLeft: '1em'}}>
                        <ArrowForwardIosIcon/>
                    </IconButton>
                </div>
            </Modal>
        </>
    );
}

export default GalleryWithOverlay;
