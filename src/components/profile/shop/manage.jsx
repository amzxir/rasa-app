import React, { useContext, useState, lazy, Suspense } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FadeTransform } from "react-animation-components";
import LightStyles from "../../../assets/sass/light/manage-shop.module.scss";
import DarkStyles from "../../../assets/sass/dark/manage-shop.module.scss";
import fa from "../../../lang/fa.json";
import ColorModeContext from "../../../context/color-mode-context";

const Statistics = lazy(() => import("./statistics/statistics"));
const SupportShop = lazy(() => import("./support/support"));

export default function Manage() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  // start state navig
  const [tab, setTab] = useState(<Suspense fallback={<div>loading ...</div>}><Statistics /></Suspense>)
  const [navItem, setNavItem] = useState(true);

  const handelCompoentFirst = () => {
    setTab(<Suspense fallback={<div>loading ...</div>}><Statistics /></Suspense>)
    setNavItem(true)
  }

  const handelCompoentSecend = () => {
    setTab(<Suspense fallback={<div>Loading</div>}><SupportShop /></Suspense>)
    setNavItem(false)
  }
  // start state navig
  return (
    <FadeTransform in transformProps={{ exitTransform: 'translateX(-100px)' }}>
      <Box sx={{ mt: 5, mb: 5 }}>
        <div className={theme.palette.mode === "light" ? LightStyles.details_shop : DarkStyles.details_shop}>
          <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
            <img src="/image/me.png" alt="" />
          </div>
          <h1>فروشگاه رسادنت</h1>
          <p>ww.rasadent.com/@RASADENT</p>
        </div>
        <div className={theme.palette.mode === "light" ? LightStyles.content_shop : DarkStyles.content_shop}>
          <div className={theme.palette.mode === "light" ? LightStyles.items : DarkStyles.items}>
            <p>213</p>
            <p>{fa["Successful purchase"]}</p>
          </div>
          <div className={theme.palette.mode === "light" ? LightStyles.items : DarkStyles.items}>
            <p>15</p>
            <p>{fa["Active Card"]}</p>
          </div>
          <div className={theme.palette.mode === "light" ? LightStyles.items_none_border : DarkStyles.items_none_border}>
            <p>18</p>
            <p>محصولات مرجوع</p>
          </div>
        </div>
        <div className={theme.palette.mode === "light" ? LightStyles.tabs : DarkStyles.tabs}>
          <a onClick={handelCompoentFirst}><span className={navItem === true ? 'active-tabs' : ''}></span><span className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}>پیشخوان</span></a>
          <a onClick={handelCompoentSecend}><span className={navItem === false ? 'active-tabs' : ''}></span><span className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}>پشتیبانی فروشندگان</span></a>
        </div>
        {tab}
      </Box>
    </FadeTransform>
  );
}
