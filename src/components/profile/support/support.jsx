import React, { useContext } from "react";
import { Box, Grid, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FadeTransform } from "react-animation-components";
import LightStyles from "../../../assets/sass/light/support.module.scss";
import DarkStyles from "../../../assets/sass/dark/support.module.scss"
import ColorModeContext from "../../../context/color-mode-context";
import fa from "../../../lang/fa.json";

export default function Support() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode
    return (
        <FadeTransform in transformProps={{ exitTransform: 'translateX(-100px)' }}>
            <Box sx={{ mt: 5, mb: 5 }}>
                <Grid container>
                    <Grid xs={12}>
                        <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                            <input placeholder={fa["Firstname and Lastname"]} type="text" />
                            <IconButton className={theme.palette.mode === "light" ? LightStyles.position_svg : DarkStyles.position_svg}>
                                <img src="/image/name-icon.svg" alt="" />
                            </IconButton>
                        </div>
                    </Grid>
                    <Grid xs={12}>
                        <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                            <input placeholder={fa["your emial"]} type="text" />
                            <IconButton className={theme.palette.mode === "light" ? LightStyles.position_svg : DarkStyles.position_svg}>
                                <img src="/image/name-icon.svg" alt="" />
                            </IconButton>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                            <select>
                                <option>{fa["Departmental support"]}</option>
                                <option value="1">{fa["men"]}</option>
                                <option value="2">{fa["women"]}</option>
                            </select>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                            <textarea cols="30" rows="10" placeholder={fa["The text of your message..."]} type="text"></textarea>
                        </div>
                    </Grid>
                </Grid>
                <button className={theme.palette.mode === "light" ? LightStyles.btn_profile : DarkStyles.btn_profile}>
                    <span>{fa["send message"]}</span>
                </button>
            </Box>
        </FadeTransform>
    )
}

