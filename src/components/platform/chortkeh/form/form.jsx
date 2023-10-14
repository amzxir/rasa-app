import React, { useContext , useState } from "react";
import { Grid , Modal } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FadeTransform } from "react-animation-components";
import ColorModeContext from "../../../../context/color-mode-context";
import LightStyles from "../../../../assets/sass/light/chortkeh/chortkeh.module.scss";
import DarkStyles from "../../../../assets/sass/dark/chortkeh/chortkeh.module.scss";
import fa from "../../../../lang/fa.json";
import WchortIcon from "../../../../assets/svg/wchort";

export default function Form() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode
    // start fetch data and function modal
    const [isOpen, setIsOpen] = useState(false)
    // end fetch data and function modal 
    return (
        <div className={theme.palette.mode === "light" ? LightStyles.form_chortkeh : DarkStyles.form_chortkeh}>
            <Grid sx={{ mb: 3 }} container spacing={2}>
                <Grid xs={6} item sx={{ pt: '0 !important' }}>
                    <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                        <select>
                            <option>گروه خدمتی</option>
                        </select>
                    </div>
                </Grid>
                <Grid xs={6} item sx={{ pt: '0 !important' }}>
                    <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                        <select>
                            <option>انتخاب خدمت</option>
                        </select>
                    </div>
                </Grid>
                <Grid xs={6} item sx={{ pt: '0 !important' }}>
                    <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                        <select>
                            <option>انتخاب سازمان</option>
                        </select>
                    </div>
                </Grid>
                <Grid xs={6} item sx={{ pt: '0 !important' }}>
                    <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                        <select>
                            <option>انتخاب تعرفه</option>
                        </select>
                    </div>
                </Grid>
                <Grid xs={6} item sx={{ pt: '0 !important' }}>
                    <button className={theme.palette.mode === "light" ? LightStyles.btn_submit : DarkStyles.btn_submit}><span>محاسبه خدمات</span></button>
                </Grid>
                <Grid xs={6} item sx={{ pt: '0 !important' }}>
                    <button onClick={() => setIsOpen(!isOpen)} className={theme.palette.mode === "light" ? LightStyles.btn_reset : DarkStyles.btn_reset}><span>ریست فرم</span></button>
                </Grid>
            </Grid>
            <div className={theme.palette.mode === "light" ? LightStyles.alert : DarkStyles.alert}>
                <WchortIcon />
                <p>تعرفه این خدمت <span>150/000</span> ریال میباشد</p>
            </div>
            <div onClick={() => setIsOpen(false)} className={isOpen === true ? theme.palette.mode === "light" ? LightStyles.fade_open : DarkStyles.fade_open : theme.palette.mode === "light" ? LightStyles.fade_close : DarkStyles.fade_close}>
            </div>
            <div className={isOpen === true ? theme.palette.mode === "light" ? LightStyles.card_delete_open : DarkStyles.card_delete_open : theme.palette.mode === "light" ? LightStyles.card_delete_close : DarkStyles.card_delete_close}>
                <h1 className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>از ریست فرم مطمئن هستید ؟</h1>
                <hr />
                <div className={theme.palette.mode === "light" ? LightStyles.d_flex_btn : DarkStyles.d_flex_btn}>
                    <button className={theme.palette.mode === "light" ? LightStyles.confirm : DarkStyles.confirm}>{fa["yes"]}</button>
                    <button onClick={() => setIsOpen(false)} className={theme.palette.mode === "light" ? LightStyles.cancell : DarkStyles.cancell}>{fa["no"]}</button>
                </div>
            </div>
        </div>
    )
}

