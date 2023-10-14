import React , { useContext } from "react";
import { Box , Grid , IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LightStyles from "../../../../assets/sass/light/manage-shop.module.scss";
import DarkStyles from "../../../../assets/sass/dark/manage-shop.module.scss";
import fa from "../../../../lang/fa.json";
import ColorModeContext from "../../../../context/color-mode-context";
import DangerIcon from "../../../../assets/svg/danger";
import PasswordIcon from "../../../../assets/svg/password";

export default function Authentication() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode
    return (
        <Box sx={{ mt:5 , mb:5 }}>
            <div className={theme.palette.mode === "light" ? LightStyles.alert : DarkStyles.alert}>
                <h1 className={theme.palette.mode === "light" ? LightStyles.title_alert : DarkStyles.title_alert}><DangerIcon/>توجه</h1>
                <p className={theme.palette.mode === "light" ? LightStyles.content_alert : DarkStyles.content_alert}>برای احراز هویت، مهمه که کد ملی با صاحب شماره همراه مطابقت داشته باشه.اصلی‌ترین دلیل احراز هویت اینه که در این بازار، تعامل‌های حرفه‌ای مالی خواهی داشت و ما باید مطمئن بشیم که پرداخت‌ها و دریافت‌ها با امنیت و صحت کامل انجام می‌شه.</p>
            </div>
            <Grid item sx={{ mt:5 , mb:3 }} xs={12}>
                <label className={theme.palette.mode === "light" ? LightStyles.labels : DarkStyles.labels} htmlFor="">* کد ملی</label>
                <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                    <input placeholder="کد ملی ..." type="number" />
                    <IconButton className={theme.palette.mode === "light" ? LightStyles.position_svg : DarkStyles.position_svg}>
                        <PasswordIcon/>
                    </IconButton>
                    <small className={theme.palette.mode === "light" ? LightStyles.small : DarkStyles.small}>تسویه حساب فروشنده ، فقط با صاحب این کد ملی انجام می‌شه.</small>
                </div>
            </Grid>
            <button className={theme.palette.mode === "light" ? LightStyles.btn : DarkStyles.btn}><span>بررسی هویت</span></button>
        </Box>
    )
}

