import React, { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Splide, SplideTrack } from "@splidejs/react-splide";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LightStyles from "../../assets/sass/light/home.module.scss";
import DarkStyles from "../../assets/sass/dark/home.module.scss";
import GraduationCapIcon from "../../assets/svg/graduation-cap";
import Service from "./service/service";
import Education from "./education/education";
import ColorModeContext from "../../context/color-mode-context";

export default function Home() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode

  // fetch data service
  const service = [
    {
      id: 1,
      path: null,
      name: "رسـاجت",
      path_img: "/image/rocket.svg",
      slogan: "این یک متن تست است",
    },
    {
      id: 2,
      path: null,
      name: "رسـا چرتـکه",
      path_img: "/image/bar.svg",
      slogan: "این یک متن تست است",
    },
    {
      id: 3,
      path: null,
      name: "رسـا فرم",
      path_img: "/image/form.svg",
      slogan: "این یک متن تست است",
    },
    {
      id: 4,
      path: null,
      name: "رسـا کلاب",
      path_img: "/image/club.svg",
      slogan: "این یک متن تست است",
    },
    {
      id: 5,
      path: null,
      name: "رسـا مگ",
      path_img: "/image/mag.svg",
      slogan: "این یک متن تست است",
    },
    {
      id: 6,
      path: null,
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
      <div
        className={
          theme.palette.mode === "light"
            ? LightStyles.box_title_platform
            : DarkStyles.box_title_platform
        }
      >
        <h1>📍خدمات رسادنت</h1>
        <NavLink>+ خدمات بیشتر ...</NavLink>
      </div>
      <div
        className={
          theme.palette.mode === "light"
            ? LightStyles.box_platform
            : DarkStyles.box_platform
        }
      >
        <Grid sx={{ width: "100%" }} container spacing={2}>
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

      <div
        className={
          theme.palette.mode === "light"
            ? LightStyles.box_title_study
            : DarkStyles.box_title_study
        }
      >
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

      <Grid sx={{ mt: 5, width: "100%" }} container spacing={3}>
        <Grid
          item
          xs={4}
          className={
            theme.palette.mode === "light" ? LightStyles.p_0 : DarkStyles.p_0
          }
        >
          <NavLink
            to={"/terms"}
            state={"قوانین و مقررات"}
            className={
              theme.palette.mode === "light"
                ? LightStyles.btn_secondary
                : DarkStyles.btn_secondary
            }
          >
            <span>قوانین و مقررات</span>
          </NavLink>
        </Grid>
        <Grid
          item
          xs={4}
          className={
            theme.palette.mode === "light" ? LightStyles.p_0 : DarkStyles.p_0
          }
        >
          <NavLink
            to={"/about"}
            state={"درباره رسادنت"}
            className={
              theme.palette.mode === "light"
                ? LightStyles.btn_primary
                : DarkStyles.btn_primary
            }
          >
            <span>درباره رسادنت</span>
          </NavLink>
        </Grid>
        <Grid
          item
          xs={4}
          className={
            theme.palette.mode === "light" ? LightStyles.p_0 : DarkStyles.p_0
          }
        >
          <NavLink
            to={"/faq"}
            state={"حریم خصوصی"}
            className={
              theme.palette.mode === "light"
                ? LightStyles.btn_secondary
                : DarkStyles.btn_secondary
            }
          >
            <span>حریم خصوصی</span>
          </NavLink>
        </Grid>
      </Grid>
    </Box>
  );
}
