import React, {useState} from "react";
import Videos from "./Videos/Videos";
import Menu from "./Menu/Menu";
import Gallery from "./Gallery/Gallery";
import {Grid} from '@mui/material';


export default function Body(onMenuClick) {
    const [showMenu, setShowMenu] = useState(true);

    // Function to hide the menu when an image is clicked
    const onImageClick = () => {
        setShowMenu(false);
    };

    // Function to show the menu when the modal is closed
    const onModalClose = () => {
        setShowMenu(true);
    };
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Videos/>
                </Grid>
                <Grid item xs={12} md={12}>
                    {showMenu && <Menu onMenuClick={onMenuClick}/>}
                </Grid>
                <Grid xs={12} md={12}>
                    <Gallery onImageClick={onImageClick} onModalClose={onModalClose}/>
                </Grid>

            </Grid>

        </div>
    );
}


