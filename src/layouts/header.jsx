import React from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Apps from "../assets/svg/apps";
import Sun from "../assets/svg/sun";

import styles from "../assets/sass/header.module.scss";
import { Container } from "@mui/material";

export default function Header() {
  return (
    <Container maxWidth="sm">
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
            <IconButton>
              <Sun />
            </IconButton>
            <IconButton>
              <Apps />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
