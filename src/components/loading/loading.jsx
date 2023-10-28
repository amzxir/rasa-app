import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ColorModeContext from "../../context/color-mode-context";
import LightStyles from "../../assets/sass/light/loading.module.scss";
import DarkStyles from "../../assets/sass/dark/loading.module.scss";


export default function Loading() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode
    return (
        <div className={theme.palette.mode === "light" ? LightStyles.loading : DarkStyles.loading}>
            <LazyLoadImage effect="blur" src="/image/loading.svg" alt="" />
        </div>
    )
}

