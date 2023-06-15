import React from "react";
import Videos from "./Videos/Videos";
import Menu from "./Menu/Menu";
import Gallery from "./Gallery/Gallery";

export default function Body() {
    return (
        <div>
            <h1>Body</h1>
            <Videos />
            <Menu />
            <Gallery />
        </div>
    );
}

