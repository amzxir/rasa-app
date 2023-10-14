import React, { useContext } from "react";
import { Box, Grid, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LightStyles from "../../../../../../assets/sass/light/manage-shop.module.scss";
import DarkStyles from "../../../../../../assets/sass/dark/manage-shop.module.scss";
import fa from "../../../../../../lang/fa.json";
import ColorModeContext from "../../../../../../context/color-mode-context";

export default function Two(props) {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode

    // start function step back 
    const handelBackStep = () => {
        props.previousStep();
    }
    // end function step back 

    // start function handel step select product and add product in shop 
    const handelSelectProduct = () => {
        props.nextStep();
    }
    // end function handel step select product and add product in shop 

    return (
        <Box>
            <Grid xs={12}>
                <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                    <input style={{ background:theme.palette.mode === "light" ? '#F3F3F3' : '#212121' }} value={"کامپوزیت"} type="text" disabled={true} />
                </div>
            </Grid>
            <div className={theme.palette.mode === "light" ? LightStyles.name_product_modal : DarkStyles.name_product_modal}>
                <ul>
                    <li onClick={handelSelectProduct}>کامپوزیت Z250 _تری ام </li>
                    <li>کامپوزیت استلایت _توکویاما</li>
                    <li>کامپوزیت Z250 _تری ام </li>
                    <li>کامپوزیت استلایت _توکویاما</li>
                    <li>کامپوزیت Z250 _تری ام </li>
                    <li>کامپوزیت استلایت _توکویاما</li>
                    <li>کامپوزیت Z250 _تری ام </li>
                    <li>کامپوزیت استلایت _توکویاما</li>
                    <li>کامپوزیت Z250 _تری ام </li>
                    <li>کامپوزیت استلایت _توکویاما</li>
                </ul>
            </div>
            <button onClick={handelBackStep} className={theme.palette.mode === "light" ? LightStyles.btn_again : DarkStyles.btn_again}>
                <span>شروع مجدد</span>
            </button>
        </Box>
    )
}