import React, { useContext } from "react";
import { Box, Grid, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LightStyles from "../../../../../../assets/sass/light/manage-shop.module.scss";
import DarkStyles from "../../../../../../assets/sass/dark/manage-shop.module.scss";
import fa from "../../../../../../lang/fa.json";
import ColorModeContext from "../../../../../../context/color-mode-context";

export default function One(props) {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode

    // start function step search product
    const handelSearchProduct = () => {
        props.nextStep();
    }
    // end function step search product
    return (
        <Box>
            <Grid xs={12}>
                <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                    <input style={{ background:theme.palette.mode === "light" ? '#F3F3F3' : '#212121' }} placeholder="نام محصول خود را وارد کنید" type="text" />
                </div>
            </Grid>
            <button onClick={handelSearchProduct} className={theme.palette.mode === "light" ? LightStyles.btn_product : DarkStyles.btn_product}>
                <span>جست و جو در محصولات</span>
            </button>
        </Box>
    )
}

