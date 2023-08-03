import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import LightStyles from "../../../../../assets/sass/light/market/landing.module.scss";
import DarkStyles from "../../../../../assets/sass/dark/market/landing.module.scss";
import ColorModeContext from "../../../../../context/color-mode-context";

export default function Banner() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  return (
    <div
      className={
        theme.palette.mode === "light"
          ? LightStyles.banner_shop
          : DarkStyles.banner_shop
      }
    >
      <img src="image/banner.png" alt="" />
    </div>
  );
}
