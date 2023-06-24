// Dans votre composant VideoDescription
import { Box, Typography, Button } from '@mui/material';

function VideoDescription({ title, description, handleVolumeClick }) {
    return (
        <Box bgcolor="#4B8F8C" color="#F5DD90" p={2} sx={{height: '46vh', overflowY: 'auto'}}>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="body1">{description}</Typography>
            <Button variant="contained" color="primary" onClick={handleVolumeClick} sx={{backgroundColor: '#4B8F8C', color: '#F5DD90'}}>
                Volume / Mode sombre
            </Button>
        </Box>
    );
}

export default VideoDescription;