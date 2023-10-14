import React, { useContext } from "react";
import { Box, Grid, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FadeTransform } from "react-animation-components";
import LightStyles from "../../../../assets/sass/light/manage-shop.module.scss";
import DarkStyles from "../../../../assets/sass/dark/manage-shop.module.scss";
import fa from "../../../../lang/fa.json";
import ColorModeContext from "../../../../context/color-mode-context";


export default function SupportShop() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode
    return (
        <FadeTransform in transformProps={{ exitTransform: 'translateX(-100px)' }}>
            <Box sx={{ mt: 5, mb: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                            <input placeholder={fa["Firstname and Lastname"]} type="text" />
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                            <select>
                                <option>دپارتمان پشتیبانی</option>
                            </select>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                            <textarea placeholder="متن پیام شما ...." id="" cols="30" rows="10"></textarea>
                        </div>
                    </Grid>
                </Grid>
                <button className={theme.palette.mode === "light" ? LightStyles.btn_product : DarkStyles.btn_product}>
                    <span>ارسال پیام به پشتیبانی</span>
                </button>
            </Box>
        </FadeTransform>
    );
}
