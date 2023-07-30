import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Splide, SplideTrack } from "@splidejs/react-splide";
import { Box, Grid } from "@mui/material";
import styles from "../../assets/sass/home.module.scss";
import GraduationCapIcon from "../../assets/svg/graduation-cap";

import Service from "./service/service";
import Education from "./education/education";

export default function Home() {
  // fetch data service
  const service = [
    {
      id: 1,
      path: "/",
      name: "رسـاجت",
      path_img: "/image/rocket.svg",
      slogan: "این یک متن تست است",
    },
    {
      id: 2,
      path: "/",
      name: "رسـا چرتـکه",
      path_img: "/image/bar.svg",
      slogan: "این یک متن تست است",
    },
    {
      id: 3,
      path: "/",
      name: "رسـا فرم",
      path_img: "/image/form.svg",
      slogan: "این یک متن تست است",
    },
    {
      id: 4,
      path: "/",
      name: "رسـا کلاب",
      path_img: "/image/club.svg",
      slogan: "این یک متن تست است",
    },
    {
      id: 5,
      path: "/",
      name: "رسـا مگ",
      path_img: "/image/mag.svg",
      slogan: "این یک متن تست است",
    },
    {
      id: 6,
      path: "/",
      name: "رسـا شــــاپ",
      path_img: "/image/shop.svg",
      slogan: "این یک متن تست است",
    },
  ];
  const [dataService, setDataService] = useState(service);

  // fetch data education
  const education = [
    {
      id: 1,
      title: "آموزش بخش ثبت سفارش در رساجت",
      category: "آموزش و توسعه",
      date: "1h 25min",
      path_img: "/image/Image-Heart.png",
      rating: "4.0",
      path: "https://mag.rasadent.com/clear-aligners/",
    },
    {
      id: 2,
      title: "آموزش بخش ثبت سفارش در رساجت",
      category: "آموزش",
      date: "2h 25min",
      path_img: "/image/Image-Heart.png",
      rating: "2.0",
      path: "https://mag.rasadent.com/clear-aligners/",
    },
    {
      id: 3,
      title: "آموزش بخش ثبت سفارش در رساجت",
      category: "آموزش و توسعه",
      date: "4h 25min",
      path_img: "/image/Image-Heart.png",
      rating: "4.5",
      path: "https://mag.rasadent.com/clear-aligners/",
    },
  ];
  const [dataEducation, setDataEducation] = useState(education);

  return (
    <Box sx={{ mt: 5, mb: 5 }}>
      <div className={styles.box_title_platform}>
        <h1>📍خدمات رسادنت</h1>
        <NavLink>+ خدمات بیشتر ...</NavLink>
      </div>
      <div className={styles.box_platform}>
        <Grid container spacing={2}>
          {dataService.map((i, index) => {
            return (
              <Service
                key={index}
                name={i.name}
                path={i.path}
                pathImg={i.path_img}
                slogan={i.slogan}
              />
            );
          })}
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
          {dataEducation.map((i, index) => {
            return (
              <Education
                key={index}
                title={i.title}
                path={i.path}
                pathImg={i.path_img}
                rating={i.rating}
                category={i.category}
                date={i.date}
              />
            );
          })}
        </SplideTrack>
      </Splide>

      <Grid sx={{ mt: 5 }} container spacing={3}>
        <Grid item xs={4} className={styles.p_0}>
          <NavLink className={styles.btn_secondary}>
            <span>قوانین و مقررات</span>
          </NavLink>
        </Grid>
        <Grid item xs={4} className={styles.p_0}>
          <NavLink className={styles.btn_primary}>
            <span>درباره رسادنت</span>
          </NavLink>
        </Grid>
        <Grid item xs={4} className={styles.p_0}>
          <NavLink className={styles.btn_secondary}>
            <span>حریم خصوصی</span>
          </NavLink>
        </Grid>
      </Grid>
    </Box>
  );
}
