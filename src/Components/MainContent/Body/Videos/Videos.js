import React, {useState, useContext} from 'react';
import {Tab, Tabs} from '@mui/material';
import {Grid} from '@mui/material';
import ThemeContext from '../../../../Assets/Themes/ThemeContext'
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import Button from '@mui/material/Button';
import "./Video.css";
import VideoDescription from './VideoDescription/VideoDescription';

const videos = [
    {
        id: "j5tYc6UJz4Q",
        title: "Vidéo 1",
        description: "I had these videos\n" +
            "Now\n" +
            "I have this video\n" +
            "\n" +
            "Both edited and unedited images can look artificial.\n" +
            "This visual palette is the direction (UN?)EDITED.\n" +
            "\n" +
            "On a conceptual level, it’s all about taking the time to look.\n" +
            "Connect and disconnect, perceive from different parts of yourself.\n" +
            "You’ll find that the line between real and artificial can sometimes be blurred.\n" +
            "Photography and film can however never fully be separated from when and where they were shot, for (UN?)EDITED, this is my private reality.\n"
    },
    {
        id: "4dSFrYwp4iM",
        title: "Vidéo 2",
        description: "Une heure bleue is the sacralization of inter-common memories.\n" +
            "Through colours, shapes and symbols I bring us back to a peaceful moment.\n" +
            "In this bubble you may forget what time it is, but we will always be together.\n" +
            "\n" +
            "blue hour\n" +
            "noun\n" +
            "PHOTOGRAPHY\n" +
            "the period of time just before sunrise or just after sunset when the sun casts a diffuse light from below the horizon and the sky takes on a vivid blue tone.\n" +
            "\"all the images were taken in the blue hour of twilight\"\n" +
            "\n" +
            "A moment in between moments, a time in between times. \n" +
            "A moment so long, yet so brief that we forget about the outside world.\n" +
            "Home is a peaceful place to be at dawn.\n" +
            "I hope to see you there again.\n"
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
            <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    <VideoDescription
                        description={videos[value].description}
                        handleVolumeClick={handleVolumeClick}
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <div className="video-container">
                        <div className="tab-container">
                            <Tabs value={value} onChange={handleChange}>
                                {videos.map((video, index) => (
                                    <Tab key={index} label={video.title} style={{
                                        backgroundColor: index === 0 ? '#FFE2FE' : '#D3C1D2',
                                        color: index === 0 ? '#D3C1D2' : '#FFE2FE',
                                        textShadow: index === 0 ? '1px 1px 2px white' : '1px 1px 2px black'
                                    }}/>
                                ))}
                            </Tabs>
                        </div>
                        <div className="video-container">
                            <div className="video-placeholder square-video" />
                            <VideoPlayer videoId={videos[value].id} isMuted={isMuted}/>
                        </div>

                    </div>
                </Grid>
            </Grid>
        </div>

    );
}




