import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar, Grid } from "@mui/material";
import styles from "../../../assets/sass/home.module.scss";
import ArrowSmallLeftIcon from "../../../assets/svg/arrow-small-left";

export default function Service({ name, path, pathImg, slogan }) {
  return (
    <Grid item xs={6}>
      <NavLink to={path} className={styles.card_platform}>
        <Avatar alt="Remy Sharp" src={pathImg} />
        <p className={styles.name_platform}>{name}</p>
        <div className={styles.content_platform}>
          <span>{slogan}</span>
          <ArrowSmallLeftIcon />
        </div>
      </NavLink>
    </Grid>
  );
}
