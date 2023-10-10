import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function CircleLeft() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode
    return (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.5 1.71875C3.16438 1.71875 1.71875 3.16438 1.71875 7.5C1.71875 11.8356 3.16438 13.2812 7.5 13.2812C11.8356 13.2812 13.2812 11.8356 13.2812 7.5C13.2812 3.16438 11.8356 1.71875 7.5 1.71875Z" stroke={theme.palette.mode === "light" ? "#2F2F2F" : "#ffffff"} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.40137 5.33008C8.40137 5.33008 6.22262 6.82508 6.22262 7.50008C6.22262 8.17508 8.40137 9.66883 8.40137 9.66883" stroke={theme.palette.mode === "light" ? "#2F2F2F" : "#ffffff"} strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

