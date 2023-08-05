import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { IconButton, Fade } from "@mui/material";
import LightStyles from "../assets/sass/light/sidebar.module.scss";
import DarkStyles from "../assets/sass/dark/sidebar.module.scss";
import ColorModeContext from "../context/color-mode-context";
import Exit from "../assets/svg/exit";
import { NavLink } from "react-router-dom";
import Notif from "../assets/svg/notif";

export default function Sidebar({ isOpen, handelSidebar }) {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  return (
    <Fade in={isOpen}>
      <div
        className={
          theme.palette.mode === "light"
            ? LightStyles.sidebar
            : DarkStyles.sidebar
        }
      >
        <IconButton sx={{ mb: 1 }} onClick={handelSidebar}>
          <Exit />
        </IconButton>
        <div
          className={
            theme.palette.mode === "light"
              ? LightStyles.profile
              : DarkStyles.profile
          }
        >
          <div
            className={
              theme.palette.mode === "light"
                ? LightStyles.img_center
                : DarkStyles.img_center
            }
          >
            <img src="image/user.svg" alt="" />
          </div>
          <div
            className={
              theme.palette.mode === "light"
                ? LightStyles.content
                : DarkStyles.content
            }
          >
            <p
              className={
                theme.palette.mode === "light"
                  ? LightStyles.name
                  : DarkStyles.name
              }
            >
              امیر احمدی
            </p>
            <p
              className={
                theme.palette.mode === "light"
                  ? LightStyles.mobile
                  : DarkStyles.mobile
              }
            >
              09199954356
            </p>
          </div>
        </div>
        <div
          className={
            theme.palette.mode === "light" ? LightStyles.item : DarkStyles.item
          }
        >
          <NavLink to={"/notification"} state={"اعلانات"}>
            <Notif /> <span>اعلانات</span>
          </NavLink>
          <NavLink>
            <Notif /> <span>علاقه مندی ها</span>
          </NavLink>
        </div>
      </div>
    </Fade>
  );
}
