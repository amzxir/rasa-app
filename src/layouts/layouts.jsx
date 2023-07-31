import React, { useContext } from "react";
import Header from "./header";
import { useTheme } from "@mui/material/styles";
import { Box, Container } from "@mui/material";
import Menu from "./menu";
import ColorModeContext from "../context/color-mode-context";
import Splash from "../components/splash/splash";

export default function Layouts(props) {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode

  return (
    <Box
      className={
        theme.palette.mode === "light"
          ? "super-app-container-light"
          : "super-app-container-dark"
      }
    >
      <Header />
      <Container maxWidth="sm">
        <Splash />
        <div
          className={
            theme.palette.mode === "light"
              ? "scroll-auto-light"
              : "scroll-auto-dark"
          }
        >
          {props.children}
        </div>
      </Container>
      <Menu />
    </Box>
  );
}
