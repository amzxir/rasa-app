import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../../../../context/color-mode-context";
import LightStyles from "../../../../../assets/sass/light/market/landing.module.scss";
import DarkStyles from "../../../../../assets/sass/dark/market/landing.module.scss";
import SearchIcon from "../../../../../assets/svg/search";

export default function Search() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  return (
    <div
      className={
        theme.palette.mode === "light" ? LightStyles.search : DarkStyles.search
      }
    >
      <div
        className={
          theme.palette.mode === "light"
            ? LightStyles.form_group
            : DarkStyles.form_group
        }
      >
        <input type="text" placeholder="جستجو کالای مورد نظر ..." />
        <SearchIcon />
      </div>
    </div>
  );
}
