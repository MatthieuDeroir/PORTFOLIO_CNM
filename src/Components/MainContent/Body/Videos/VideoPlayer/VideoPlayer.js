import React, { useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import './VideoPlayer.css';

function VideoPlayer({ videoId, isMuted }) {
    const playerRef = useRef(null);

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

    useEffect(() => {
        if (playerRef.current) {
            isMuted ? playerRef.current.mute() : playerRef.current.unMute();
        }
    }, [isMuted]);

    return (
        <div className="player-wrapper">
            <YouTube
                className="react-player"
                videoId={videoId}
                opts={opts}
                onReady={onReady}
            />
        </div>
    );
}

export default VideoPlayer;
