import React, { useContext } from "react";
import { Box, TextField, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import ColorModeContext from "../../../../../context/color-mode-context";
import LightStyles from "../../../../../assets/sass/light/market/new-address.module.scss";
import DarkStyles from "../../../../../assets/sass/dark/market/new-address.module.scss";
import fa from "../../../../../lang/fa.json";


export default function New() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  return (
    <FadeTransform in transformProps={{exitTransform: 'translateX(-100px)'}} fadeProps={{enterOpacity: 0.85,}}>
      <Box sx={{ mt: 5, mb: 5 }}>
        <Grid container>
          <Grid sx={{ mb:2 }} xs={12}>
            <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
              <input className={theme.palette.mode === "light" ? LightStyles.form_control : DarkStyles.form_control} type="text" placeholder={fa["Postal address"]} />
            </div>
          </Grid>
          <Grid sx={{ mb:2 }} xs={12}>
            <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
              <select className={theme.palette.mode === "light" ? LightStyles.select_control : DarkStyles.select_control}>
                <option selected>{fa["state"]}</option>
              </select>
            </div>
          </Grid>
          <Grid sx={{ mb:2 }} xs={12}>
            <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
              <select className={theme.palette.mode === "light" ? LightStyles.select_control : DarkStyles.select_control}>
                <option selected>{fa["city"]}</option>
              </select>
            </div>
          </Grid>
          <Grid sx={{ mb:2 , pl:1 }} xs={6}>
            <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
              <input className={theme.palette.mode === "light" ? LightStyles.form_control : DarkStyles.form_control} type="text" placeholder={fa["Plaque"]} />
            </div>
          </Grid>
          <Grid sx={{ mb:2 , pr:1 }} xs={6}>
            <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
              <input className={theme.palette.mode === "light" ? LightStyles.form_control : DarkStyles.form_control} type="text" placeholder={fa["the unit"]} />
            </div>
          </Grid>
          <Grid sx={{ mb:2  }} xs={12}>
            <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
              <input className={theme.palette.mode === "light" ? LightStyles.form_control : DarkStyles.form_control} type="text" placeholder={fa["Posti Code"]} />
            </div>
          </Grid>
        </Grid>
        <NavLink to={"/shop/shopping"} state={fa["new address"]} className={theme.palette.mode === "light" ? LightStyles.btn_address : DarkStyles.btn_address}><span>{fa["add new address"]}</span></NavLink>
      </Box>
    </FadeTransform>
  );
}
