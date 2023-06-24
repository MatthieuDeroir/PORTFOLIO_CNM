import * as React from 'react';
import { Box } from '@mui/system';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function Section({itemData}) {
    return (
        <ImageList
            sx={{ width: '100%', overflow: 'hidden', height: '100%' }}
            variant="quilted"
            cols={4}
            rowHeight={121}

        >
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <Box
                        component="img"
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: '0.3s',
                            '&:hover': {
                                filter: 'brightness(0.7)',
                                cursor: 'pointer',
                            },
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            typography: 'subtitle1',
                            background: 'transparent',
                            transition: '0.3s',
                            '&:hover': {
                                background: 'rgba(0, 0, 0, 0.5)',
                                cursor: 'pointer',
                            },
                        }}
                    >
                        {item.title}
                    </Box>
                </ImageListItem>
            ))}
        </ImageList>
    );
}
