import React, { useContext, useState } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import ColorModeContext from "../../../context/color-mode-context";
import LightStyles from "../../../assets/sass/light/jet/home.module.scss";
import DarkStyles from "../../../assets/sass/dark/jet/home.module.scss";
import ModeLandscapeIcon from "../../../assets/svg/mode-landscape";
import HeadsetIcon from "../../../assets/svg/headset";
import ClipIcon from "../../../assets/svg/clip";
import fa from "../../../lang/fa.json";

export default function Home() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode

  return (
    <Box sx={{ mt: 5, mb: 5 }}>
      <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
        <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
          <img src="image/jet.svg" alt="" />
        </div>
        <h1>{fa["Place an order in Rasajt"]}</h1>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>
      </div>
      <NavLink to={"/jet/send"} state={fa["rasajet"]} className={theme.palette.mode === "light" ? LightStyles.btn_next : DarkStyles.btn_next}><span>{fa["start"]}</span></NavLink>
    </Box>
  );
}
