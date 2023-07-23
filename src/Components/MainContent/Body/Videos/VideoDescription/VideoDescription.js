// Dans votre composant VideoDescription
import { Box, Typography, Button } from '@mui/material';
import './VideoDescription.css';
function VideoDescription({ title, description, handleVolumeClick }) {
    const lines = description.split('\n');
    return (
        <Box
            className="video-description"
            p={2}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignContent={'center'}
            borderRadius={2}
            height="100%"
            maxWidth="100%" /* Add this */
        >
            <div className="description-content">
                {lines.map((line, index) => (
                    <Typography key={index} variant="body1" fontFamily="'Eina04-Light', sans-serif" >{line}</Typography>
                ))}
            </div>
            <Button color="inherit" onClick={handleVolumeClick} sx={{backgroundColor: 'transparent', color: '#F5DD90'}} fontFamily="'Eina04-Light', sans-serif" className="description-button">
                Focus on video
            </Button>
        </Box>
    );
}

export default VideoDescription;