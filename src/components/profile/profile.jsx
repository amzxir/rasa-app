import React, { useContext, useEffect } from "react";
import { Box, IconButton, Switch } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink, useNavigate } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import ColorModeContext from "../../context/color-mode-context";
import LightStyles from "../../assets/sass/light/profile.module.scss";
import DarkStyles from "../../assets/sass/dark/profile.module.scss";
import ChangeIcon from "../../assets/svg/change";
import ProfileIcon from "../../assets/svg/profiles";
import ArrowRight from "../../assets/svg/arrow-right";
import PinsIcon from "../../assets/svg/pins";
import OrderIcon from "../../assets/svg/order";
import StoreIcon from "../../assets/svg/store";
import EyesIcon from "../../assets/svg/eyes";
import SupportIcon from "../../assets/svg/support";
import ExitProfileIcon from "../../assets/svg/exit-profile";
import fa from "../../lang/fa.json";
import NotifIcon from "../../assets/svg/notif";
import CompareIcon from "../../assets/svg/compares";

export default function Profile() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function

  const navigate = useNavigate()

  const handlerExit = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  // start fetch details user
  const mobile = localStorage.getItem("mobile");
  // end fetch details user
  return (
    <FadeTransform in transformProps={{ exitTransform: 'translateX(-100px)' }} fadeProps={{ enterOpacity: 0.85, }}>
      <Box sx={{ mt: 5, mb: 5 }}>
        <div className={theme.palette.mode === "light" ? LightStyles.content_user : DarkStyles.content_user}>
          <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
            <img src="/image/me.png" alt="" />
            <input type="file" id="avatar" className="d-none" />
            <div className={theme.palette.mode === "light" ? LightStyles.btn_chnage_img : DarkStyles.btn_chnage_img}>
              <label htmlFor="avatar" style={{ display: 'flex', cursor: 'pointer' }}>
                <ChangeIcon />
              </label>
            </div>
          </div>
          <h1 className={theme.palette.mode === "light" ? LightStyles.h1_name : DarkStyles.h1_name}>امیر احمدی</h1>
          <p className={theme.palette.mode === "light" ? LightStyles.p_mobile : DarkStyles.p_mobile}>{mobile}</p>
        </div>
        <hr />
        <div className={theme.palette.mode === "light" ? LightStyles.routing_profile : DarkStyles.routing_profile}>
          <NavLink to={"/profile/edit"} state={fa["profile edit"]} className={theme.palette.mode === "light" ? LightStyles.routing : DarkStyles.routing}>
            <div><ProfileIcon /><span>{fa["profile edit"]}</span></div>
            <ArrowRight />
          </NavLink>
          <NavLink to={"/profile/address"} state="آدرس ها" className={theme.palette.mode === "light" ? LightStyles.routing : DarkStyles.routing}>
            <div><PinsIcon /><span>آدرس ها</span></div>
            <ArrowRight />
          </NavLink>
          <NavLink to={"/profile/order"} state={fa["Your orders"]} className={theme.palette.mode === "light" ? LightStyles.routing : DarkStyles.routing}>
            <div><OrderIcon /><span>{fa["orders"]}</span></div>
            <ArrowRight />
          </NavLink>
          <NavLink to={"/profile/shop/manage"} state={fa["shop manage"]} className={theme.palette.mode === "light" ? LightStyles.routing : DarkStyles.routing}>
            <div><StoreIcon /><span>{fa["store"]}</span></div>
            <ArrowRight />
          </NavLink>
          <NavLink to={"/shop/compare"} state={fa["product compare"]} className={theme.palette.mode === "light" ? LightStyles.routing : DarkStyles.routing}>
            <div><CompareIcon /><span>{fa["product compare"]}</span></div>
            <ArrowRight />
          </NavLink>
          <NavLink to={"/shop/wishlist"} state={fa["wishlist"]} className={theme.palette.mode === "light" ? LightStyles.routing : DarkStyles.routing}>
            <div><NotifIcon /><span>{fa["wishlist"]}</span></div>
            <ArrowRight />
          </NavLink>
          {/* <NavLink className={theme.palette.mode === "light" ? LightStyles.routing : DarkStyles.routing}>
            <div><SettingIcon/><span>{fa["setting privecy"]}</span></div>
            <ArrowRight/>
          </NavLink> */}
          <div className={theme.palette.mode === "light" ? LightStyles.routing : DarkStyles.routing}>
            <div><EyesIcon /><span>{fa["dark mode"]}</span></div>
            <Switch onClick={colorMode.toggleColorMode} checked={theme.palette.mode === "light" ? false : true} />
          </div>
          {/* <NavLink className={theme.palette.mode === "light" ? LightStyles.routing : DarkStyles.routing}>
            <div><FaqsIcon/><span>{fa["faq"]}</span></div>
            <ArrowRight/>
          </NavLink> */}
          <NavLink to={"/profile/support"} state={fa["Support center"]} className={theme.palette.mode === "light" ? LightStyles.routing : DarkStyles.routing}>
            <div><SupportIcon /><span>{fa["Support center"]}</span></div>
            <ArrowRight />
          </NavLink>
          {/* <NavLink className={theme.palette.mode === "light" ? LightStyles.routing : DarkStyles.routing}>
            <div><InfoIcon /><span>{fa["invite friends"]}</span></div>
            <ArrowRight />
          </NavLink> */}
          <div onClick={handlerExit} style={{ cursor:'pointer' }} className={theme.palette.mode === "light" ? LightStyles.routing : DarkStyles.routing}>
            <div><ExitProfileIcon /><span className={theme.palette.mode === "light" ? LightStyles.exit : DarkStyles.exit}>{fa["exit"]}</span></div>
          </div>
        </div>
      </Box>
    </FadeTransform>
  );
}
