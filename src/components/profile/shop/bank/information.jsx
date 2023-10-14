import React, { useContext } from "react";
import { Box, Grid, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LightStyles from "../../../../assets/sass/light/manage-shop.module.scss";
import DarkStyles from "../../../../assets/sass/dark/manage-shop.module.scss";
import fa from "../../../../lang/fa.json";
import ColorModeContext from "../../../../context/color-mode-context";
import IrIcon from "../../../../assets/svg/ir";

export default function Information() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmodes
    return (
        <Box sx={{ mt: 5, mb: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <label className={theme.palette.mode === "light" ? LightStyles.labels : DarkStyles.labels} htmlFor="">*  نام بانک</label>
                    <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                        <input placeholder="" type="text" />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <label className={theme.palette.mode === "light" ? LightStyles.labels : DarkStyles.labels} htmlFor="">* شماره شبا </label>
                    <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                        <input placeholder="" type="text" />
                        <IconButton className={theme.palette.mode === "light" ? LightStyles.position_svg : DarkStyles.position_svg}>
                            <IrIcon />
                        </IconButton>
                        <small className={theme.palette.mode === "light" ? LightStyles.small : DarkStyles.small}>اگه روی کارت بانکیت نوشته نشده، باید از اینترنت بانک یا همراه بانکت یا مراجعه به شعبه، شماره شبا رو پیدا کنی.</small>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <label className={theme.palette.mode === "light" ? LightStyles.labels : DarkStyles.labels} htmlFor="">*  نام کامل صاحب حساب</label>
                    <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                        <input placeholder="" type="text" />
                    </div>
                </Grid>
            </Grid>
            <button className={theme.palette.mode === "light" ? LightStyles.btn : DarkStyles.btn}><span>ذخیره اطلاعات</span></button>
        </Box>
    )
}

