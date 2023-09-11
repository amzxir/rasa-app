import React , { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { animated, useSpring } from "@react-spring/web";
import LightStyles from "../../assets/sass/light/splash.module.scss";
import DarkStyles from "../../assets/sass/dark/splash.module.scss";
import ColorModeContext from "../../context/color-mode-context";

export default function Splash() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  const splashScreen = useSpring({
    delay: 1500,
    from: {
      opacity: 1,
      display: "block",
    },
    to: {
      opacity: 0,
      display: "none",
    },
  });
  return (
    <animated.div style={splashScreen} className={theme.palette.mode === "light" ? LightStyles.bg_splash : DarkStyles.bg_splash}>
      <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
        <img src="/image/logo.svg" alt="Rasadent" loading="lazy"/>
      </div>
    </animated.div>
  );
}
