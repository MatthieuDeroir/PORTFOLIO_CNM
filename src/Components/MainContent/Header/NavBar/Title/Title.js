import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import "./Title.css";
import Overlay from "../../../../Overlay/Overlay";

export default function Title() {
    const [open, setOpen] = useState(false);
    const [gif, setGif] = useState(null);

    const handleOpen = () => {
        // Obtenir un gif aléatoire à partir de l'API Giphy
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <h1 className="main-page-title" onClick={handleOpen}>
                <span className="main-page-title-rest">Plural Inspirations</span>
            </h1>
            <Modal open={open} onClick={handleClose}>
                <div>
                    <Overlay/>
                </div>
            </Modal>
        </div>
    );
}
