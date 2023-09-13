import React, { useContext , useEffect , useRef } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import Header from "./header";
import Menu from "./menu";
import ColorModeContext from "../context/color-mode-context";
import Splash from "../components/splash/splash";

export default function Layouts(props) {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode

  let location = useLocation();
  let path = location.pathname;

  // start function scroll top
  const ref = useRef()
  useEffect(() => ref.current.scrollTo(0, 0));
  // start function scroll top 

  return (
    <Box
      className={theme.palette.mode === "light" ? "super-app-container-light" : "super-app-container-dark"}>
      {path !== "/login" ? <Header /> : null}
      <Container maxWidth="sm">
        <Splash />
        <div ref={ref} className={theme.palette.mode === "light" ? "scroll-auto-light" : "scroll-auto-dark"}>
          {props.children}
        </div>
      </Container>
      {path !== "/login" ? <Menu /> : null}
    </Box>
  );
}
