import React, { useContext } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FadeTransform } from "react-animation-components";
import ColorModeContext from "../../../../context/color-mode-context";
import LightStyles from "../../../../assets/sass/light/market/notification.module.scss";
import DarkStyles from "../../../../assets/sass/dark/market/notification.module.scss";
import fa from "../../../../lang/fa.json";

export default function Single({ fetchNotif }) {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode
    return (
        <FadeTransform in transformProps={{exitTransform: 'translateX(-100px)'}} >
            <Box sx={{ mb:5 , mt:5 }}>
                <div className={theme.palette.mode === "light" ? LightStyles.box_notif : DarkStyles.box_notif}>
                    <div className={theme.palette.mode === "light" ? LightStyles.content_notif : DarkStyles.content_notif}>
                        <h1>{fetchNotif.title}</h1>
                        <p>{fetchNotif.description}</p>
                    </div>
                </div>
            </Box>
        </FadeTransform>

    )
}

