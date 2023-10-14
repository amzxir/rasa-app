import React, { useContext, useState } from "react";
import { Box, IconButton, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import ColorModeContext from "../../../../context/color-mode-context";
import LightStyles from "../../../../assets/sass/light/form/form.module.scss";
import DarkStyles from "../../../../assets/sass/dark/form/form.module.scss";
import fa from "../../../../lang/fa.json";
import Edits from "../../../../assets/svg/edits";

export default function Home() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode
    return (
        <FadeTransform in transformProps={{ exitTransform: 'translateX(-100px)' }}>
            <Box sx={{ mt: 5, mb: 5 }}>
                <Grid item xs={12}>
                    <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                        <input placeholder="نام و نام خانوادگی" type="text" />
                        <IconButton className={theme.palette.mode === "light" ? LightStyles.position_svg : DarkStyles.position_svg}>
                            <Edits />
                        </IconButton>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                        <input placeholder="ایمیل شما" type="text" />
                        <IconButton className={theme.palette.mode === "light" ? LightStyles.position_svg : DarkStyles.position_svg}>
                            <Edits />
                        </IconButton>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                        <input placeholder="تخصص شما" type="text" />
                        <IconButton className={theme.palette.mode === "light" ? LightStyles.position_svg : DarkStyles.position_svg}>
                            <Edits />
                        </IconButton>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                        <input placeholder="نام مطب و یا کلینیک" type="text" />
                        <IconButton className={theme.palette.mode === "light" ? LightStyles.position_svg : DarkStyles.position_svg}>
                            <Edits />
                        </IconButton>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                        <select>
                            <option>استان</option>
                        </select>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                        <select>
                            <option>شهرستان</option>
                        </select>
                    </div>
                </Grid>
                <NavLink to={"/form/create/alert"} className={theme.palette.mode === "light" ? LightStyles.btn : DarkStyles.btn}><span>ثبت فرم</span></NavLink>
            </Box>
        </FadeTransform>
    )
}

