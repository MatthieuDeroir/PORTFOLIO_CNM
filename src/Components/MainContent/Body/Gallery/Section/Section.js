import * as React from 'react';
import { Box, Modal } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
export default function Section({itemData}) {
    const [open, setOpen] = React.useState(false);
    const [hover, setHover] = React.useState(false);
    const [selectedImg, setSelectedImg] = React.useState(null);
    const [selectedTitle, setSelectedTitle] = React.useState(null);
    const [selectedDescription, setSelectedDescription] = React.useState(null);

    const handleOpen = (item) => {
        setSelectedImg(item.img);
        setSelectedTitle(item.title);
        setSelectedDescription(item.description);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ImageList
            sx={{ width: '100%', overflow: 'hidden', height: '100%' }}
            variant="quilted"
            cols={4}
            rowHeight={121}
        >
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1} onClick={() => handleOpen(item)} sx={{ '&:focus': { outline: 'none' } }}>
                    <Box
                        component="img"
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
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
                        {hover ?
                            <div>
                                {item.title}
                                {item.description}
                            </div>
                            :
                            null
                        }
                    </Box>
                </ImageListItem>
            ))}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box>
                    <img src={selectedImg} style={{maxWidth: '90%', maxHeight: '90%'}} alt="" />
                    <Box>
                        <h2>{selectedTitle}</h2>
                        <p>{selectedDescription}</p>
                    </Box>
                </Box>
            </Modal>
        </ImageList>
    );
}
