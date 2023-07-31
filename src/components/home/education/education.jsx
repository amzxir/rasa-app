import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { SplideSlide } from "@splidejs/react-splide";
import {
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FireIcon from "../../../assets/svg/fire";
import ClockIcon from "../../../assets/svg/clock";
import StartIcon from "../../../assets/svg/star";
import LightStyles from "../../../assets/sass/light/home.module.scss";
import DarkStyles from "../../../assets/sass/dark/home.module.scss";
import ColorModeContext from "../../../context/color-mode-context";




export default function Education({title, path, pathImg, rating, category, date}) {

  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode

  return (
    <SplideSlide>
      <NavLink to={path} target="_black" className={theme.palette.mode === "light" ? LightStyles.text_dec_none : DarkStyles.text_dec_none}>
        <Card
          sx={{
            maxWidth: "314px",
            p: 1,
            borderRadius: "13px",
            position: "relative",
          }}
        >
          <div className={theme.palette.mode === "light" ? LightStyles.rating : DarkStyles.rating}>
            <span className={theme.palette.mode === "light" ? LightStyles.text_rating : DarkStyles.text_rating}>{rating}</span>
            <StartIcon />
          </div>
          <CardMedia
            className={theme.palette.mode === "light" ? LightStyles.img_fluid : DarkStyles.img_fluid}
            component="img"
            alt="green iguana"
            height="140"
            image={pathImg}
          />
          <CardContent sx={{ p: 1 }}>
            <Typography className={theme.palette.mode === "light" ? LightStyles.title_card : DarkStyles.title_card} variant="body2">
              {title}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography
              sx={{ ml: 1 }}
              className={theme.palette.mode === "light" ? LightStyles.details_card : DarkStyles.details_card}
              variant="span"
            >
              <ClockIcon />
              {date}
            </Typography>
            <Typography className={theme.palette.mode === "light" ? LightStyles.details_card : DarkStyles.details_card} variant="span">
              <FireIcon />
              {category}
            </Typography>
          </CardActions>
        </Card>
      </NavLink>
    </SplideSlide>
  );
}
