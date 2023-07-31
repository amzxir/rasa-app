import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Avatar, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LightStyles from "../../../assets/sass/light/home.module.scss";
import DarkStyles from "../../../assets/sass/dark/home.module.scss";
import ArrowSmallLeftIcon from "../../../assets/svg/arrow-small-left";
import ColorModeContext from "../../../context/color-mode-context";

export default function Service({ name, path, pathImg, slogan }) {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode

  return (
    <Grid sx={{ pl:"10px !important" , width:"100%" }} item xs={6}>
      <NavLink
        to={path}
        className={
          theme.palette.mode === "light"
            ? LightStyles.card_platform
            : DarkStyles.card_platform
        }
      >
        <Avatar alt="Remy Sharp" src={pathImg} />
        <p
          className={
            theme.palette.mode === "light"
              ? LightStyles.name_platform
              : DarkStyles.name_platform
          }
        >
          {name}
        </p>
        <div
          className={
            theme.palette.mode === "light"
              ? LightStyles.content_platform
              : DarkStyles.content_platform
          }
        >
          <span>{slogan}</span>
          <ArrowSmallLeftIcon />
        </div>
      </NavLink>
    </Grid>
  );
}
