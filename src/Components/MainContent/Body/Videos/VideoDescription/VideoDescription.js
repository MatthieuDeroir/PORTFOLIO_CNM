// Dans votre composant VideoDescription
import { Box, Typography, Button } from '@mui/material';

function VideoDescription({ title, description, handleVolumeClick }) {
    const lines = description.split('\n');
    return (
        <Box
            bgcolor="#4B8F8C"
            color="#F5DD90"
            p={2}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignContent={'center'}
            borderRadius={2}
            height="100%"
            border-radius='40px'
            box-shadow="0 0 5px black"
        >
            <div>
                <Typography variant="h4" fontFamily="'Eina04-Light', sans-serif">{title}</Typography>
                {lines.map((line, index) => (
                    <Typography key={index} variant="body1" fontFamily="'Eina04-Light', sans-serif" >{line}</Typography>
                ))}
            </div>
            <Button color="inherit" onClick={handleVolumeClick} sx={{backgroundColor: '#4B8F8C', color: '#F5DD90'}} fontFamily="'Eina04-Light', sans-serif">

            Focus on video
            </Button>
        </Box>
    );
}

export default VideoDescription;


