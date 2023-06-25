// Dans votre composant VideoDescription
import { Box, Typography, Button } from '@mui/material';

function VideoDescription({ title, description, handleVolumeClick }) {
    return (
        <Box
            bgcolor="#4B8F8C"
            color="#F5DD90"
            p={2}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
            border-radius='40px'
            box-shadow="0 0 5px black"
        >
            <div>
                <Typography variant="h4" fontFamily="'Eina04-Light', sans-serif">{title}</Typography>
                <Typography variant="body1" fontFamily="'Eina04-Light', sans-serif">{description}</Typography>
            </div>
            <Button color="inherit" onClick={handleVolumeClick} sx={{backgroundColor: '#4B8F8C', color: '#F5DD90'}} fontFamily="'Eina04-Light', sans-serif">

            Focus on video
            </Button>
        </Box>
    );
}

export default VideoDescription;


