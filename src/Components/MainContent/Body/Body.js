import React from "react";
import Videos from "./Videos/Videos";
import Menu from "./Menu/Menu";
import Gallery from "./Gallery/Gallery";

export default function Body(onMenuClick) {
    return (
        <div>
            <Videos />
            <Menu onMenuClick={onMenuClick} />
            <Gallery />
        </div>
    );
}


