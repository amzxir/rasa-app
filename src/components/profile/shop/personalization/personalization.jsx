import React, { useContext } from "react";
import { Box, Grid, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FadeTransform } from "react-animation-components";
import LightStyles from "../../../../assets/sass/light/manage-shop.module.scss";
import DarkStyles from "../../../../assets/sass/dark/manage-shop.module.scss";
import fa from "../../../../lang/fa.json";
import ColorModeContext from "../../../../context/color-mode-context";
import AddUserIcon from "../../../../assets/svg/add-user";

export default function Personalization() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode
    return (
        <FadeTransform in transformProps={{ exitTransform: 'translateX(-100px)' }}>
            <Box sx={{ mt: 5, mb: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <label className={theme.palette.mode === "light" ? LightStyles.labels : DarkStyles.labels} htmlFor="">* نام فروشگاه</label>
                        <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                            <input placeholder="فروشگاه رسادنت" type="text" />
                            <IconButton className={theme.palette.mode === "light" ? LightStyles.position_svg : DarkStyles.position_svg}>
                                <AddUserIcon />
                            </IconButton>
                            <small className={theme.palette.mode === "light" ? LightStyles.small : DarkStyles.small}> لطفا از نام‌های فارسی،‌ خوش‌آهنگ و به یادماندنی استفاده کن؛ مثل تابلوی جذابی برای مغازه. ولی مهمه که متعلق به دیگران نباشه.</small>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <label className={theme.palette.mode === "light" ? LightStyles.labels : DarkStyles.labels} htmlFor="">* آدرس فروشگاه</label>
                        <Grid container spacing={2}>
                            <Grid item xs={7}>
                                <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                                    <input type="text" />
                                </div>
                            </Grid>
                            <Grid item xs={5}>
                                <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                                    <input value="RASADENT.COM /" disabled={true} type="text" />
                                </div>
                            </Grid>
                        </Grid>
                        <small className={theme.palette.mode === "light" ? LightStyles.small : DarkStyles.small}>این آدرس اینترنتی مستقل فروشگاه خودته. مثلا برای روی کارت ویزیت یا اشتراک‌گذاری مستقیم در پیام‌رسا‌ن‌ها و شبکه‌های اجتماعی به کار میاد.</small>

                    </Grid>
                    <Grid item xs={12}>
                        <label className={theme.palette.mode === "light" ? LightStyles.labels : DarkStyles.labels} htmlFor="">* درباره فروشگاه </label>
                        <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                            <textarea placeholder="متن پیام شما ...." id="" cols="30" rows="10"></textarea>
                            <small className={theme.palette.mode === "light" ? LightStyles.small : DarkStyles.small}> این متن رو مشتری‌ها توی صفحه فروشگات می‌بینن.</small>
                        </div>
                    </Grid>
                </Grid>
                <button className={theme.palette.mode === "light" ? LightStyles.btn : DarkStyles.btn}><span>ذخیره تغییرات</span></button>
            </Box>
        </FadeTransform>
    )
}

