import React, { useState, useEffect, useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LightStyles from "../../assets/sass/light/network.module.scss";
import DarkStyles from "../../assets/sass/dark/network.module.scss";
import fa from "../../lang/fa.json";
import ColorModeContext from "../../context/color-mode-context";

export default function Network(props) {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  // state variable holds the state of the internet connection
  const [isOnline, setOnline] = useState(true);

  // On initization set the isOnline state.
  useEffect(() => {
    setOnline(navigator.onLine);
  }, []);

  // event listeners to update the state
  window.addEventListener("online", () => {
    setOnline(true);
  });

  window.addEventListener("offline", () => {
    setOnline(false);
  });
  if (isOnline) {
    return props.children;
  } else {
    return (
      <div className={theme.palette.mode === "light" ? LightStyles.internet : DarkStyles.internet}>
        <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
          <LazyLoadImage effect="blur" src="/image/wifi.png" alt="" />
        </div>
        <h1>اوووپس !</h1>
        <p>اینترنت در دسترس نیست</p>
        <p style={{ padding:'0rem 4rem' , fontSize:'13px' }}>
          لطفا تنظیمات اینترنت خود را برسی کنید
          از غیر فعال بودن vpn خود مطمئن شوید
        </p>
      </div>
    )
  }
}
