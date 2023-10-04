import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function ArrowLeft() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3333 12.6668C10.3333 12.6668 5.66659 9.90416 5.66659 8.00016C5.66659 6.09683 10.3333 3.3335 10.3333 3.3335" stroke={theme.palette.mode === "light" ? "#2A4A9E" : "#3282F9"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

