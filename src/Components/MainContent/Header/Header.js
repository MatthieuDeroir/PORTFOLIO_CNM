import React from "react";
import Title from "./NavBar/Title/Title";
import NavBar from "./NavBar/NavBar";
import {ThemeProvider} from "@mui/material/styles";
import HeaderTheme from "../../../Assets/Themes/HeaderTheme";

export default function Header() {
    return (
        <div className="header">
            <ThemeProvider theme={HeaderTheme}>
                <NavBar/>
            </ThemeProvider>
        </div>
    );
}

