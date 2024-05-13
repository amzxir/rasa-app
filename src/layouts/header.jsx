import React, { useContext, useEffect, useState } from "react";
import { Container, Grid, Avatar, Stack, IconButton, Badge } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import SunIcon from "../assets/svg/sun";
import LightStyles from "../assets/sass/light/header.module.scss";
import DarkStyles from "../assets/sass/dark/header.module.scss";
import Navigation from "../assets/svg/navigation";
import ColorModeContext from "../context/color-mode-context";
import NotifIcon from "../assets/svg/notif";
import CategoryIcon from "../assets/svg/Category";
import fa from "../lang/fa.json"

export default function Header() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode, token } = useContext(ColorModeContext);
  // end function darkmode

  // start fetch details user
  const [user, setUser] = useState();

  useEffect(() => {
    const handelDetailsUser = async () => {
      const mobile = localStorage.getItem("mobile");
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      }
      const bodyParameters = {
        key: "value",
        mobile: mobile,
      }
      try {
        const response = await axios.post("https://rasadent.com/api/UserDetail", bodyParameters, config);
        // console.log(response.data.user)
        setUser(response.data.user)
        // console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    handelDetailsUser();
  }, [])

  localStorage.setItem("user_id", user?.id)

  // end fetch details user 

  // start variable react router dom
  const location = useLocation();
  let path = location.pathname;
  let navigate = useNavigate();
  // end variable react router dom

  // start fetch mobile user
  const mobile = localStorage.getItem("mobile")
  // end fetch mobile user


  // start find query link 
  let paths = window.location.pathname.split("/");
  let query = paths[3];
  // end find query link 

  return path !== "/shop/pay/sucess" && path !== "/profile" && path !== "/shop/pay_status_check" && path !== "/shop/pay/error" ? (
    <Container className={theme.palette.mode === "light" ? LightStyles.navbar_fixed : DarkStyles.navbar_fixed} maxWidth="sm">
      {path !== "/" && path !== "/shop" &&
        path !== "/jet" && path !== "/club" &&
        path !== "/blog" && path !== `/shop/product-category/${query}` &&
        path !== "/chortkeh" && path !== "/form" && path !== "/form/create" &&
        path !== "/form/create/alert" && path !== "/form/create/download" && path !== "/online-shops" ? (
        <div className={theme.palette.mode === "light" ? LightStyles.header_back : DarkStyles.header_back}>
          <div className={theme.palette.mode === "light" ? LightStyles.title_navigate : DarkStyles.title_navigate}>
            {location.state}
          </div>
          <IconButton onClick={() => navigate(-1)} className={theme.palette.mode === "light" ? LightStyles.back : DarkStyles.back}>
            <Navigation />
          </IconButton>
        </div>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Stack direction="row">
              <div>
                <Avatar alt="Remy Sharp" src="/image/avatar.png" />
              </div>
              <div className={theme.palette.mode === "light" ? LightStyles.header_right : DarkStyles.header_right}>
                <p className={theme.palette.mode === "light" ? LightStyles.text_welcome : DarkStyles.text_welcome}>
                  👋 {user?.name !== null ? user?.name : 'خوش آمدید'}
                </p>
                <p className={theme.palette.mode === "light" ? LightStyles.text_name : DarkStyles.text_name}>
                  {mobile}
                </p>
              </div>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack spacing={1} direction="row">
              <IconButton onClick={colorMode.toggleColorMode}>
                <SunIcon />
              </IconButton>
              <NavLink className="ml-0" to={"/shop/notification"} state={"اعلانات"}>
                <IconButton>
                  <Badge color="error" overlap="circular" badgeContent=" " variant="dot">
                    <NotifIcon />
                  </Badge>
                </IconButton>
              </NavLink>
            </Stack>
          </Grid>
        </Grid>
      )}
    </Container>
  ) : null;
}
