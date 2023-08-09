import React, { useContext, useState } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../../context/color-mode-context";
import LightStyles from "../../../assets/sass/light/jet/home.module.scss";
import DarkStyles from "../../../assets/sass/dark/jet/home.module.scss";
import { NavLink } from "react-router-dom";
import ModeLandscapeIcon from "../../../assets/svg/mode-landscape";
import HeadsetIcon from "../../../assets/svg/headset";
import ClipIcon from "../../../assets/svg/clip";

export default function Home() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode

  //  start fetch data rasajet
  const rasajet = [
    {
      id: 1,
      name: "آنلاین عکس بگیرید",
      img_path: ModeLandscapeIcon,
      path: "/jet/jet-image",
      navigate: "ارسال تصویر برای ثبت سفارش رساجت",
    },
    {
      id: 2,
      name: "آنلاین صدا بگیرید",
      img_path: HeadsetIcon,
      path: "/jet/jet-voice",
      navigate: "ارسال صدا برای ثبت سفارش رساجت",
    },
    {
      id: 3,
      name: "ارسال متن",
      img_path: ClipIcon,
      path: "/jet/jet-text",
      navigate: "ارسال متن برای ثبت سفارش رساجت",
    },
  ];
  const [dataJet, setDataJet] = useState(rasajet);
  //  end fetch data rasajet
  return (
    <Box sx={{ mt: 5, mb: 5 }}>
      <div
        className={
          theme.palette.mode === "light"
            ? LightStyles.content
            : DarkStyles.content
        }
      >
        <div
          className={
            theme.palette.mode === "light"
              ? LightStyles.img_center
              : DarkStyles.img_center
          }
        >
          <img src="image/jet.svg" alt="" />
        </div>
        <h1>ثبت سفارش در رساجت</h1>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.{" "}
        </p>
      </div>
      {dataJet.map((i) => {
        return (
          <NavLink
            key={i.id}
            to={i.path}
            state={i.navigate}
            className={
              theme.palette.mode === "light"
                ? LightStyles.card_jet
                : DarkStyles.card_jet
            }
          >
            <span
              className={
                theme.palette.mode === "light"
                  ? LightStyles.jet_svg
                  : DarkStyles.jet_svg
              }
            >
              <i.img_path />
            </span>
            <span
              className={
                theme.palette.mode === "light"
                  ? LightStyles.jet_name
                  : DarkStyles.jet_name
              }
            >
              {i.name}
            </span>
          </NavLink>
        );
      })}
    </Box>
  );
}
