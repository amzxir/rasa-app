import React, { useContext, lazy, Suspense } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FadeTransform } from "react-animation-components";
import ColorModeContext from "../../../context/color-mode-context";
import LightStyles from "../../../assets/sass/light/chortkeh/chortkeh.module.scss";
import DarkStyles from "../../../assets/sass/dark/chortkeh/chortkeh.module.scss";
import fa from "../../../lang/fa.json";

const FormChortkeh = lazy(() => import("./form/form"));
const ItemChortkeh = lazy(() => import("./item/items"));


export default function Chortkeh() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode
    return (
        <Box sx={{ mt: 5, mb: 5 }}>
            <Suspense fallback={<div>Loading...</div>}>
                <FormChortkeh />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <ItemChortkeh />
            </Suspense>
        </Box>
    )
}

