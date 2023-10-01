import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function Categorys() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmodeˇ
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M19.0004 4.49356C19.0004 6.46738 17.3552 8.06817 15.3266 8.06817C13.298 8.06817 11.6537 6.46738 11.6537 4.49356C11.6537 2.51973 13.298 0.918945 15.3266 0.918945C17.3552 0.918945 19.0004 2.51973 19.0004 4.49356Z" stroke={theme.palette.mode === "light" ? "#12393F" : "#12393F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M8.3467 4.49356C8.3467 6.46738 6.7024 8.06817 4.6729 8.06817C2.6452 8.06817 1 6.46738 1 4.49356C1 2.51973 2.6452 0.918945 4.6729 0.918945C6.7024 0.918945 8.3467 2.51973 8.3467 4.49356Z" stroke={theme.palette.mode === "light" ? "#12393F" : "#12393F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M19.0004 14.7958C19.0004 16.7696 17.3552 18.3695 15.3266 18.3695C13.298 18.3695 11.6537 16.7696 11.6537 14.7958C11.6537 12.822 13.298 11.2212 15.3266 11.2212C17.3552 11.2212 19.0004 12.822 19.0004 14.7958Z" stroke={theme.palette.mode === "light" ? "#12393F" : "#12393F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M8.3467 14.7958C8.3467 16.7696 6.7024 18.3695 4.6729 18.3695C2.6452 18.3695 1 16.7696 1 14.7958C1 12.822 2.6452 11.2212 4.6729 11.2212C6.7024 11.2212 8.3467 12.822 8.3467 14.7958Z" stroke={theme.palette.mode === "light" ? "#12393F" : "#12393F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

