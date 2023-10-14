import React, { useContext, useState } from "react";
import { Box, IconButton, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import ColorModeContext from "../../../../context/color-mode-context";
import LightStyles from "../../../../assets/sass/light/form/form.module.scss";
import DarkStyles from "../../../../assets/sass/dark/form/form.module.scss";
import fa from "../../../../lang/fa.json";

export default function Alert() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode
    return (
        <Box sx={{ mt: 5, mb: 5 }}>
            <div className={theme.palette.mode === "light" ? LightStyles.alert_success : DarkStyles.alert_success}>
                <figure>
                    <img src="/image/success.svg" alt="" />
                </figure>
                <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                    <p>لینک دانلود با موفقیت ارسال شد</p>
                    <h1>از همراهی شما متشکریم🙏</h1>
                </div>
                <NavLink to={"/form/create/download"} className={theme.palette.mode === "light" ? LightStyles.btn_home : DarkStyles.btn_home}><span>لینک فرم دانلود برای شما پیامک گردید</span></NavLink>
            </div>
        </Box>
    )
}

