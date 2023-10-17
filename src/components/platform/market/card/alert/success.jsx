import React , { useContext } from 'react'
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink } from 'react-router-dom';
import { FadeTransform } from "react-animation-components";
import ColorModeContext from '../../../../../context/color-mode-context';
import LightStyles from "../../../../../assets/sass/light/market/success.module.scss";
import DarkStyles from "../../../../../assets/sass/dark/market/success.module.scss";
import fa from "../../../../../lang/fa.json";


export default function Success() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  return (
    <FadeTransform in transformProps={{exitTransform: 'translateX(-100px)'}} >
      <Box sx={{ mt:5 , mb:5 }}>
          <div className={theme.palette.mode === "light" ? LightStyles.alert_success : DarkStyles.alert_success}>
            <figure>
              <img src="/image/success.svg" alt="" />
            </figure>
            <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
              <h1>{fa["Your payment has been successfully completed dear"]}</h1>
              <p>کد سفارش شما : #54226588 میباشد شما میتوانید وضعیت <br/> سفارش خود را در داشتبورد خود کنترل کنید</p>
            </div>
            <NavLink to={"/shop"}  className={theme.palette.mode === "light" ? LightStyles.btn_home : DarkStyles.btn_home}><span>{fa["back home"]}</span></NavLink>
          </div>
      </Box>
    </FadeTransform>
  )
}

