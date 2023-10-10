import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function Bag() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode
    return (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.84393 5.92V4.025C9.84705 2.72 8.79143 1.65938 7.48643 1.65625C6.1808 1.65375 5.1208 2.70938 5.11768 4.01438V5.92" stroke={theme.palette.mode === "light" ? "#000" : "#ffffff"} strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M1.84375 8.87965C1.84375 5.5709 3.25313 4.46777 7.48063 4.46777C11.7081 4.46777 13.1175 5.5709 13.1175 8.87965C13.1175 12.1878 11.7081 13.2909 7.48063 13.2909C3.25313 13.2909 1.84375 12.1878 1.84375 8.87965Z" stroke={theme.palette.mode === "light" ? "#000" : "#ffffff"} strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

