import React from "react";
import { NavLink } from "react-router-dom";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import {
  Box,
  Grid,
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import styles from "../../assets/sass/home.module.scss";
import ArrowSmallLeftIcon from "../../assets/svg/arrow-small-left";
import GraduationCapIcon from "../../assets/svg/graduation-cap";
import FireIcon from "../../assets/svg/fire";
import ClockIcon from "../../assets/svg/clock";
import StartIcon from "../../assets/svg/star";

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
        <GraduationCapIcon />
        <h1>مرکـــز آموزش رسادنت 🥳</h1>
      </div>
      <Splide
        hasTrack={false}
        options={{
          direction: "rtl",
          pagination: false,
          arrows: false,
          padding: { left: 40, right: 0 },
        }}
      >
        <SplideTrack>
          <SplideSlide>
            <NavLink className={styles.text_dec_none}>
              <Card
                sx={{
                  maxWidth: "314px",
                  p: 1,
                  borderRadius: "13px",
                  position: "relative",
                }}
              >
                <div className={styles.rating}>
                  <span className={styles.text_rating}>4.0</span>
                  <StartIcon />
                </div>
                <CardMedia
                  className={styles.img_fluid}
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="/image/Image-Heart.png"
                />
                <CardContent sx={{ p: 1 }}>
                  <Typography className={styles.title_card} variant="body2">
                    آموزش بخش ثبت سفارش در رساجت
                  </Typography>
                </CardContent>
                <CardActions>
                  <Typography
                    sx={{ ml: 1 }}
                    className={styles.details_card}
                    variant="span"
                  >
                    <ClockIcon />
                    1h 25min
                  </Typography>
                  <Typography className={styles.details_card} variant="span">
                    <FireIcon />
                    آموزش و توسعه
                  </Typography>
                </CardActions>
              </Card>
            </NavLink>
          </SplideSlide>
        </SplideTrack>
      </Splide>

      <Grid sx={{ mt: 5 }} container spacing={3}>
        <Grid  xs={4}>
          <NavLink className={styles.btn_secondary}><span>قوانین و مقررات</span></NavLink>
        </Grid>
        <Grid  xs={4}>
          <NavLink className={styles.btn_primary}><span>درباره رسادنت</span></NavLink>
        </Grid>
        <Grid  xs={4}>
          <NavLink className={styles.btn_secondary}><span>حریم خصوصی</span></NavLink>
        </Grid>
      </Grid>
    </Box>
  );
}
