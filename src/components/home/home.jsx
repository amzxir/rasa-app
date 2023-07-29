import React from "react";
import { Box } from "@mui/material";
import styles from "../../assets/sass/home.module.scss";
import { NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import ArrowSmallLeftIcon from "../../assets/svg/arrow-small-left";
import Grid from "@mui/material/Grid";
import GraduationCapIcon from "../../assets/svg/graduation-cap";

export default function Home() {
  return (
    <Box sx={{ mt: 5, mb: 5 }}>
      <div className={styles.box_title_platform}>
        <h1>📍خدمات رسادنت</h1>
        <NavLink>+ خدمات بیشتر ...</NavLink>
      </div>
      <div className={styles.box_platform}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <NavLink className={styles.card_platform}>
              <Avatar alt="Remy Sharp" src="/image/rocket.svg" />
              <p className={styles.name_platform}>رسـاجت</p>
              <div className={styles.content_platform}>
                <span>این یک متن تست است</span>
                <ArrowSmallLeftIcon />
              </div>
            </NavLink>
          </Grid>
          <Grid item xs={6}>
            <NavLink className={styles.card_platform}>
              <Avatar alt="Remy Sharp" src="/image/rocket.svg" />
              <p className={styles.name_platform}>رسـاجت</p>
              <div className={styles.content_platform}>
                <span>این یک متن تست است</span>
                <ArrowSmallLeftIcon />
              </div>
            </NavLink>
          </Grid>
          <Grid item xs={6}>
            <NavLink className={styles.card_platform}>
              <Avatar alt="Remy Sharp" src="/image/rocket.svg" />
              <p className={styles.name_platform}>رسـاجت</p>
              <div className={styles.content_platform}>
                <span>این یک متن تست است</span>
                <ArrowSmallLeftIcon />
              </div>
            </NavLink>
          </Grid>
          <Grid item xs={6}>
            <NavLink className={styles.card_platform}>
              <Avatar alt="Remy Sharp" src="/image/rocket.svg" />
              <p className={styles.name_platform}>رسـاجت</p>
              <div className={styles.content_platform}>
                <span>این یک متن تست است</span>
                <ArrowSmallLeftIcon />
              </div>
            </NavLink>
          </Grid>
          <Grid item xs={6}>
            <NavLink className={styles.card_platform}>
              <Avatar alt="Remy Sharp" src="/image/rocket.svg" />
              <p className={styles.name_platform}>رسـاجت</p>
              <div className={styles.content_platform}>
                <span>این یک متن تست است</span>
                <ArrowSmallLeftIcon />
              </div>
            </NavLink>
          </Grid>
          <Grid item xs={6}>
            <NavLink className={styles.card_platform}>
              <Avatar alt="Remy Sharp" src="/image/rocket.svg" />
              <p className={styles.name_platform}>رسـاجت</p>
              <div className={styles.content_platform}>
                <span>این یک متن تست است</span>
                <ArrowSmallLeftIcon />
              </div>
            </NavLink>
          </Grid>
        </Grid>
      </div>

      <div className={styles.box_title_study}>
        <GraduationCapIcon/>
        <h1>مرکـــز  آموزش رسادنت  🥳</h1>
      </div>


    </Box>
  );
}
