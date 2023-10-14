import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function Ir() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode
    return (
        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.93795 0.647999V10H0.411953V0.647999H1.93795ZM7.28234 6.164H5.51834V10H3.99234V0.647999H7.80034C8.64968 0.647999 9.33101 0.904666 9.84434 1.418C10.3577 1.922 10.6143 2.594 10.6143 3.434C10.6143 4.078 10.4463 4.62867 10.1103 5.086C9.78368 5.534 9.32634 5.84667 8.73834 6.024L10.6423 10H9.01834L7.28234 6.164ZM5.51834 4.932H7.57634C8.03368 4.932 8.40234 4.79667 8.68234 4.526C8.96234 4.25533 9.10234 3.90067 9.10234 3.462C9.10234 3.00467 8.96234 2.64067 8.68234 2.37C8.40234 2.09 8.03368 1.95 7.57634 1.95H5.51834V4.932Z" fill={theme.palette.mode === "light" ? "#000" : "#ffffff"} />
        </svg>
    )
}

