import React, { useContext } from "react";
import Apps from "../assets/svg/apps";
import Sun from "../assets/svg/sun";
import styles from "../assets/sass/header.module.scss";
import { Container, Grid, Avatar, Stack, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Navigation from "../assets/svg/navigation";
import { useLocation, useNavigate } from "react-router-dom";
import ColorModeContext from "../context/color-mode-context";

export default function Header() {
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);

  let location = useLocation();
  let path = location.pathname;
  let navigate = useNavigate();

  return (
    <Container className={styles.navbar_fixed} maxWidth="sm">
      {path !== "/" ? (
        <div className={styles.header_back}>
          <div className={styles.title_navigate}>{location.state}</div>
          <IconButton onClick={() => navigate(-1)} className={styles.back}>
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
              <div className={styles.header_right}>
                <p className={styles.text_welcome}>👋 خوش آمدید</p>
                <p className={styles.text_name}>پویا رستمی</p>
              </div>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack spacing={1} direction="row">
              <IconButton onClick={colorMode.toggleColorMode}>
                <Sun />
              </IconButton>
              <IconButton>
                <Apps />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
