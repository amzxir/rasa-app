import React, { useContext } from "react";
import { Box, Grid, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LightStyles from "../../assets/sass/light/profile-edit.module.scss";
import DarkStyles from "../../assets/sass/dark/profile-edit.module.scss";
import ColorModeContext from "../../context/color-mode-context";
import DateIcon from "../../assets/svg/date";
import GmailIcon from "../../assets/svg/gmail";
import DownIcon from "../../assets/svg/down";
import fa from "../../lang/fa.json";

export default function ProfileEdit() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function
  return (
    <Box sx={{ mt: 5, mb: 5 }}>
      <Grid container>
        <Grid item xs={12}>
          <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
            <input placeholder={fa["Firstname and Lastname"]} type="text" />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
            <input placeholder={fa["Code Melli"]} type="text" />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
            <input placeholder={fa["birthday date"]} type="text" />
            <IconButton className={theme.palette.mode === "light" ? LightStyles.position_svg : DarkStyles.position_svg}>
                <DateIcon/>
            </IconButton>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
            <input placeholder={fa["your emial"]} type="text" />
            <IconButton className={theme.palette.mode === "light" ? LightStyles.position_svg : DarkStyles.position_svg}>
                <GmailIcon/>
            </IconButton>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
            <input placeholder={fa["mobile"]} type="text" />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
            <select>
                <option>{fa["gender"]}</option>
                <option value="1">{fa["men"]}</option>
                <option value="2">{fa["women"]}</option>
            </select>
          </div>
        </Grid>
      </Grid>
      <button className={theme.palette.mode === "light" ? LightStyles.btn_profile : DarkStyles.btn_profile}>
        <span>{fa["profile edit"]}</span>
      </button>
    </Box>
  );
}
