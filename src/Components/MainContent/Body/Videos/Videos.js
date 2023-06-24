import React, { useState, useContext } from 'react';
import { Tab, Tabs } from '@mui/material';
import { Grid } from '@mui/material';
import ThemeContext from '../../../../Assets/Themes/ThemeContext'
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import Button from '@mui/material/Button';
import "./Video.css";
import VideoDescription from './VideoDescription/VideoDescription';

const videos = [
    {
        id: "j5tYc6UJz4Q",
        title: "Vidéo 1",
        description: "C'est la description de la vidéo 1."
    },
    {
        id: "4dSFrYwp4iM",
        title: "Vidéo 2",
        description: "C'est la description de la vidéo 2."
    },
];

export default function Videos() {
    const toggleTheme = useContext(ThemeContext);
    const [value, setValue] = useState(0);
    const [isMuted, setIsMuted] = useState(true);

    const handleVolumeClick = () => {
        toggleTheme();
        setIsMuted(!isMuted);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="video">
            <Grid container spacing={2} alignItems="stretch" >
                <Grid item xs={12} md={4}>
                    <VideoDescription
                        title={videos[value].title}
                        description={videos[value].description}
                        handleVolumeClick={handleVolumeClick}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Tabs value={value} onChange={handleChange}>
                        {videos.map((video, index) => (
                            <Tab key={index} label={video.title} style={{backgroundColor: index === 0 ? '#FFE2FE' : '#D3C1D2', color: index === 0 ? '#D3C1D2' : '#FFE2FE'}} />
                        ))}
                    </Tabs>
                    <VideoPlayer videoId={videos[value].id} isMuted={isMuted} />
                </Grid>
            </Grid>
        </div>

    );
}
