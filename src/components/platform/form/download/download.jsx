import React, { useContext, useState } from "react";
import { Box, IconButton, Grid, Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import ColorModeContext from "../../../../context/color-mode-context";
import LightStyles from "../../../../assets/sass/light/form/form.module.scss";
import DarkStyles from "../../../../assets/sass/dark/form/form.module.scss";
import fa from "../../../../lang/fa.json";

export default function Download() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode
    return (
        <FadeTransform in transformProps={{ exitTransform: 'translateX(-100px)' }}>
            <Box sx={{ mt: 5, mb: 5 }}>
                <Card className={theme.palette.mode === "light" ? LightStyles.download : DarkStyles.download}>
                    <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                        <img src="/image/implant.png" alt="" />
                    </div>
                    <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                        <p className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}>مراقبت های لازم بعد از جراحی لثه</p>
                        <button className={theme.palette.mode === "light" ? LightStyles.btn_down : DarkStyles.btn_down}><span>دانلود PDF</span></button>
                    </div>
                </Card>
                <Card className={theme.palette.mode === "light" ? LightStyles.download : DarkStyles.download}>
                    <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                        <img src="/image/implant.png" alt="" />
                    </div>
                    <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                        <p className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}>مراقبت های بعد از تحویل پروتز متحرک(کامل یا پارسیل)</p>
                        <button className={theme.palette.mode === "light" ? LightStyles.btn_down : DarkStyles.btn_down}><span>دانلود PDF</span></button>
                    </div>
                </Card>
                <Card className={theme.palette.mode === "light" ? LightStyles.download : DarkStyles.download}>
                    <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                        <img src="/image/implant.png" alt="" />
                    </div>
                    <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                        <p className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}>مراقبت های پس از اعمال دندانپزشکی کودکان</p>
                        <button className={theme.palette.mode === "light" ? LightStyles.btn_down : DarkStyles.btn_down}><span>دانلود PDF</span></button>
                    </div>
                </Card>
            </Box>
        </FadeTransform>
    )
}

