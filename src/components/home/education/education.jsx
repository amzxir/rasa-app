import React from "react";
import { NavLink } from "react-router-dom";
import { SplideSlide } from "@splidejs/react-splide";
import {
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";
import FireIcon from "../../../assets/svg/fire";
import ClockIcon from "../../../assets/svg/clock";
import StartIcon from "../../../assets/svg/star";
import styles from "../../../assets/sass/home.module.scss";


export default function Education({title, path, pathImg, rating, category, date}) {
  return (
    <SplideSlide>
      <NavLink to={path} target="_black" className={styles.text_dec_none}>
        <Card
          sx={{
            maxWidth: "314px",
            p: 1,
            borderRadius: "13px",
            position: "relative",
          }}
        >
          <div className={styles.rating}>
            <span className={styles.text_rating}>{rating}</span>
            <StartIcon />
          </div>
          <CardMedia
            className={styles.img_fluid}
            component="img"
            alt="green iguana"
            height="140"
            image={pathImg}
          />
          <CardContent sx={{ p: 1 }}>
            <Typography className={styles.title_card} variant="body2">
              {title}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography
              sx={{ ml: 1 }}
              className={styles.details_card}
              variant="span"
            >
              <ClockIcon />
              {date}
            </Typography>
            <Typography className={styles.details_card} variant="span">
              <FireIcon />
              {category}
            </Typography>
          </CardActions>
        </Card>
      </NavLink>
    </SplideSlide>
  );
}
