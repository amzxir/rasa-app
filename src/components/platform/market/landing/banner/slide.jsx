import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { SplideSlide } from "@splidejs/react-splide";
import LightStyles from "../../../../../assets/sass/light/market/landing.module.scss";
import DarkStyles from "../../../../../assets/sass/dark/market/landing.module.scss";
import ColorModeContext from "../../../../../context/color-mode-context";

export default function Slide() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  return (
    <>
    <SplideSlide>
      <img
        className={
          theme.palette.mode === "light"
            ? LightStyles.img_fluid
            : DarkStyles.img_fluid
        }
        src="image/slider1.png"
        alt=""
      />
    </SplideSlide>
    <SplideSlide>
      <img
        className={
          theme.palette.mode === "light"
            ? LightStyles.img_fluid
            : DarkStyles.img_fluid
        }
        src="image/slider1.png"
        alt=""
      />
    </SplideSlide>
    </>
  );
}
