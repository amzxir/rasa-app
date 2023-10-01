import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function MarkProduct() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode
    return (
        <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.69496 6.14486H8.26496" stroke={theme.palette.mode === "light" ? "#113D8D" : "#3282F9"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M5.98016 1.6665C1.72216 1.6665 1.00283 2.28784 1.00283 7.28584C1.00283 12.8812 0.898162 14.3332 1.96216 14.3332C3.0255 14.3332 4.76216 11.8772 5.98016 11.8772C7.19816 11.8772 8.93483 14.3332 9.99816 14.3332C11.0622 14.3332 10.9575 12.8812 10.9575 7.28584C10.9575 2.28784 10.2382 1.6665 5.98016 1.6665Z" stroke={theme.palette.mode === "light" ? "#113D8D" : "#3282F9"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

