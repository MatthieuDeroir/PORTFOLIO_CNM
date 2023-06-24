import React from "react";
import CV from "./CV/CV";
import Contact from "./Contact/Contact";
import Credits from "./Credits/Credits";

export default function Footer() {
    return (
        <div className="footer">
            <h1>Footer</h1>
            <Contact />
            <CV />
            <Credits />
        </div>
    );
}

