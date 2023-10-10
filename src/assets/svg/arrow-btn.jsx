import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function ArrowBtn() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Iconly/Curved/Arrow - Left 2">
                <g id="Arrow - Left 2">
                    <path id="Stroke 1" d="M12.9166 15.8337C12.9166 15.8337 7.08329 12.3803 7.08329 10.0003C7.08329 7.62116 12.9166 4.16699 12.9166 4.16699" stroke={theme.palette.mode === "light" ? "#fff" : "#fff"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </g>
        </svg>
    )
}

