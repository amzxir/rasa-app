import React, { useContext, useState } from "react";
import { Container, Grid, Avatar, Stack, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";
import Apps from "../assets/svg/apps";
import Sun from "../assets/svg/sun";
import LightStyles from "../assets/sass/light/header.module.scss";
import DarkStyles from "../assets/sass/dark/header.module.scss";
import Navigation from "../assets/svg/navigation";
import ColorModeContext from "../context/color-mode-context";
import Sidebar from "./sidebar";

export default function Header() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode

  // start variable react router dom
  const location = useLocation();
  let path = location.pathname;
  let navigate = useNavigate();
  // end variable react router dom

  // start function and state sidebar
  const [isOpen, setIsopen] = useState(false);

  const handelSidebar = () => {
    setIsopen(!isOpen);
  };
  // end function and state sidebar

  return path !== "/shop/pay/sucess" ? (
    <Container
      className={
        theme.palette.mode === "light"
          ? LightStyles.navbar_fixed
          : DarkStyles.navbar_fixed
      }
      maxWidth="sm"
    >
      {path !== "/" &&
      path !== "/shop" &&
      path !== "/jet" &&
      path !== "/club" &&
      path !== "/blog" ? (
        <div
          className={
            theme.palette.mode === "light"
              ? LightStyles.header_back
              : DarkStyles.header_back
          }
        >
          <div
            className={
              theme.palette.mode === "light"
                ? LightStyles.title_navigate
                : DarkStyles.title_navigate
            }
          >
            {location.state}
          </div>
          <IconButton
            onClick={() => navigate(-1)}
            className={
              theme.palette.mode === "light"
                ? LightStyles.back
                : DarkStyles.back
            }
          >
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
              <div
                className={
                  theme.palette.mode === "light"
                    ? LightStyles.header_right
                    : DarkStyles.header_right
                }
              >
                <p
                  className={
                    theme.palette.mode === "light"
                      ? LightStyles.text_welcome
                      : DarkStyles.text_welcome
                  }
                >
                  👋 خوش آمدید
                </p>
                <p
                  className={
                    theme.palette.mode === "light"
                      ? LightStyles.text_name
                      : DarkStyles.text_name
                  }
                >
                  پویا رستمی
                </p>
              </div>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack spacing={1} direction="row">
              <IconButton onClick={colorMode.toggleColorMode}>
                <Sun />
              </IconButton>
              <IconButton onClick={handelSidebar}>
                <Apps />
              </IconButton>
            </Stack>
          </Grid>
          <Sidebar isOpen={isOpen} handelSidebar={handelSidebar} />
        </Grid>
      )}
    </Container>
  ) : null;
}
