import React, { useRef, useEffect } from 'react';
import YouTube from 'react-youtube';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './VideoPlayer.css'; // assuming you have a VideoPlayer.css in the same directory

function VideoPlayer({ videoId, isMuted, toggleVolumeAndTheme }) {
    const playerRef = useRef(null);
    const theme = createTheme({
        palette: {
            mode: isMuted ? 'light' : 'dark',
        },
    });

    const opts = {
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

    // let toggleVolumeAndTheme = () => {
    //     toggleVolumeAndTheme();
    // }

    useEffect(() => {
        if (playerRef.current) {
            isMuted ? playerRef.current.mute() : playerRef.current.unMute();
        }
    }, [isMuted]);

    return (
        <ThemeProvider theme={theme}>
            <div className="player-wrapper">
                <YouTube
                    className="react-player"
                    videoId={videoId}
                    opts={opts}
                    onReady={onReady}
                    onPlay={toggleVolumeAndTheme}
                />
            </div>
        </ThemeProvider>
    );
}

export default VideoPlayer;
