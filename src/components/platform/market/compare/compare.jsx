import React, { useContext, useState } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FadeTransform } from "react-animation-components";
import ColorModeContext from "../../../../context/color-mode-context";
import LightStyles from "../../../../assets/sass/light/market/compare.module.scss";
import DarkStyles from "../../../../assets/sass/dark/market/compare.module.scss";
import fa from "../../../../lang/fa.json";

export default function Compare() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode
    return (
        <Box sx={{ mt: 5, mb: 5 }}>
            <div>Compare</div>
        </Box>
    )
}

