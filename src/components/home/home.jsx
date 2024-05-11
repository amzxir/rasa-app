import React, { useContext, useState, Suspense, lazy } from "react";
import { NavLink } from "react-router-dom";
import { Splide, SplideTrack } from "@splidejs/react-splide";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FadeTransform } from "react-animation-components";
import fa from "../../lang/fa.json";
import LightStyles from "../../assets/sass/light/home.module.scss";
import DarkStyles from "../../assets/sass/dark/home.module.scss";
import GraduationCapIcon from "../../assets/svg/graduation-cap";
import ColorModeContext from "../../context/color-mode-context";
import Education from "./education/education";



// const Education = lazy(() => import("./education/education"));
const Service = lazy(() => import("./service/service"));

export default function Home() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode

  // fetch data service
  const service = [
    {
      id: 1,
      path: "/shop",
      name: "رسـا مــارکت",
      path_img: "/image/shop.svg",
      slogan: "این یک متن تست است",
    },
    {
      id: 2,
      path: "/jet",
      name: "رسـاجت",
      path_img: "/image/rocket.svg",
      slogan: "این یک متن تست است",
    },
    {
      id: 3,
      name: "فروشگاه مجازی",
      path: "/online-shops",
      path_img: "/image/club.svg",
      slogan: "این یک متن تست است",
    },
    // {
    //   id: 3,
    //   path: "/club",
    //   name: "رسـا کلاب",
    //   path_img: "/image/club.svg",
    //   slogan: "این یک متن تست است",
    // },
    // {
    //   id: 4,
    //   path: "/blog",
    //   name: "رسـا مگ",
    //   path_img: "/image/mag.svg",
    //   slogan: "این یک متن تست است",
    // },
    {
      id: 4,
      path: "/chortkeh",
      // path:null,
      name: "رسـا چرتـکه",
      path_img: "/image/bar.svg",
      slogan: "این یک متن تست است",
    },
    {
      id: 5,
      path: "/form",
      // path:null,
      name: "رسـا فرم",
      path_img: "/image/form.svg",
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
    <FadeTransform in transformProps={{exitTransform: 'translateX(-100px)'}}>
      <Box sx={{ mt: 5, mb: 5 }}>
        <div
          className={
            theme.palette.mode === "light"
              ? LightStyles.box_title_platform
              : DarkStyles.box_title_platform
          }
        >
          <h1 data-test="type-of-text">{fa["Service Rasadent"]}</h1>
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
                <Suspense key={index} fallback={<div>Loading...</div>}>
                  <Service
                    name={i.name}
                    path={i.path}
                    pathImg={i.path_img}
                    slogan={i.slogan}
                  />
                </Suspense>
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
          <h1>{fa["Rasadent Training Center"]}</h1>
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
          <SplideTrack className={theme.palette.mode === "light" ? 'wrapper-left-light' : ''}>
            {dataEducation.map((i, index) => {
              return (
                // <Suspense key={index} fallback={<div>Loading...</div>}>
                  <Education
                    key={i.id}
                    title={i.title}
                    path={i.path}
                    pathImg={i.path_img}
                    rating={i.rating}
                    category={i.category}
                    date={i.date}
                  />
                // </Suspense>
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
              state={fa["Terms and Conditions"]}
              className={
                theme.palette.mode === "light"
                  ? LightStyles.btn_secondary
                  : DarkStyles.btn_secondary
              }
            >
              <span>{fa["Terms and Conditions"]}</span>
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
              state={fa["About Rasadent"]}
              className={
                theme.palette.mode === "light"
                  ? LightStyles.btn_primary
                  : DarkStyles.btn_primary
              }
            >
              <span>{fa["About Rasadent"]}</span>
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
              state={fa["faq"]}
              className={
                theme.palette.mode === "light"
                  ? LightStyles.btn_secondary
                  : DarkStyles.btn_secondary
              }
            >
              <span>{fa["faq"]}</span>
            </NavLink>
          </Grid>
        </Grid>
      </Box>
    </FadeTransform>
  );
}
