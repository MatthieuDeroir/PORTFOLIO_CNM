import React, { useState } from 'react';
import { ImageList, ImageListItem, useMediaQuery, useTheme } from '@mui/material';
import ImageOverlay from '../ImageOverlay/ImageOverlay'; // Assuming you have defined the ImageOverlay component

function GalleryWithOverlay({ images }) {
    const [hoveredImage, setHoveredImage] = useState(null);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const cols = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;

    return (
        <ImageList variant="masonry" cols={cols} gap={8}>
            {images.map((item, index) => (
                <ImageListItem
                    key={item.img}
                    onMouseEnter={() => setHoveredImage(index)}
                    onMouseLeave={() => setHoveredImage(null)}
                >
                    <img
                        src={`${item.src}`}
                        srcSet={`${item.src}`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageOverlay
                        title={item.title}
                        description={item.description}
                        isVisible={hoveredImage === index}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export default GalleryWithOverlay;
