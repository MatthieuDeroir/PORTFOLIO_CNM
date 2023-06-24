import React, { useRef, useEffect } from 'react';
import YouTube from 'react-youtube';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function VideoPlayer({ videoId, isMuted, toggleVolumeAndTheme }) {
    const playerRef = useRef(null);
    const theme = createTheme({
        palette: {
            mode: isMuted ? 'light' : 'dark',
        },
    });

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
            controls: 0,
            rel: 0,
            showinfo: 0,
            modestbranding: 1,
        },
    };

    const onReady = (event) => {
        playerRef.current = event.target;
        if (isMuted) {
            playerRef.current.mute();
        }
    };

    useEffect(() => {
        if (playerRef.current) {
            isMuted ? playerRef.current.mute() : playerRef.current.unMute();
        }
    }, [isMuted]);

    return (
        <ThemeProvider theme={theme}>
            <YouTube videoId={videoId} opts={opts} onReady={onReady} />
        </ThemeProvider>
    );
}

export default VideoPlayer;
