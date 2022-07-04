import React, { useContext } from "react";
import "./Toggle.css";
//import moon from "./imges/moon-icon.png";
//import sun from "./imges/sun-icon.png";
import { themeContext } from "../ABOUT-PAGE/Context";

const Toggle = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const handleClick = () => {
        // debugger
        theme.dispatch({ type: "toggle" });
    };
    return (
        <div className="toggle" onClick={handleClick}>
            <moon className="moon" />
            <sun className="sun"/>
            <div
                className="t-button"
                style={darkMode ? { left: "2px" } : { right: "2px" }}
            >

            </div>

        </div>
    );
};

export default Toggle;
