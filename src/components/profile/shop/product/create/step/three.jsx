import React, { useContext } from "react";
import { Box, Grid, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LightStyles from "../../../../../../assets/sass/light/manage-shop.module.scss";
import DarkStyles from "../../../../../../assets/sass/dark/manage-shop.module.scss";
import fa from "../../../../../../lang/fa.json";
import ColorModeContext from "../../../../../../context/color-mode-context";

export default function Three(props) {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode

    // start function step back 
    const handelBackStep = () => {
        props.previousStep();
    }
    // end function step back 

    // start function submit new product
    const handelSubmit = () => {
        props.setIsProduct(false);
    }
    // end function submit new product
    return (
        <Box>
            <Grid item xs={12}>
                <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                    <select style={{ background:theme.palette.mode === "light" ? '#F3F3F3' : '#212121' }}>
                        <option>ویژگی را انتخاب کنید</option>
                    </select>
                </div>
            </Grid>
            <Grid item xs={12}>
                <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                    <select style={{ background:theme.palette.mode === "light" ? '#F3F3F3' : '#212121' }}>
                        <option>مقدار ویژگی را انتخاب کنید</option>
                    </select>
                </div>
            </Grid>
            <Grid item xs={12}>
                <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                    <input style={{ background:theme.palette.mode === "light" ? '#F3F3F3' : '#212121' }} placeholder="قیمت را به تومان وارد کنید" type="number" />
                </div>
            </Grid>
            <Grid item xs={12}>
                <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                    <input style={{ background:theme.palette.mode === "light" ? '#F3F3F3' : '#212121' }} placeholder="موجودی را وارد کنید" type="number" />
                </div>
            </Grid>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
                <button onClick={handelSubmit} style={{ marginLeft: '10px' }} className={theme.palette.mode === "light" ? LightStyles.btn_product : DarkStyles.btn_product}>
                    <span>اضافه کردن محصول</span>
                </button>
                <button onClick={handelBackStep} className={theme.palette.mode === "light" ? LightStyles.btn_again : DarkStyles.btn_again}>
                    <span>شروع مجدد</span>
                </button>
            </div>
        </Box>
    )
}