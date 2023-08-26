import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { SplideSlide, Splide, SplideTrack } from "@splidejs/react-splide";
import LightStyles from "../../../../../assets/sass/light/market/landing.module.scss";
import DarkStyles from "../../../../../assets/sass/dark/market/landing.module.scss";
import ColorModeContext from "../../../../../context/color-mode-context";

export default function Slide({ bannerData }) {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode

  return (
    <Splide
      hasTrack={false}
      options={{
        direction: "rtl",
        pagination: true,
        arrows: false,
        padding: { left: 70, right: 0 },
      }}
    >
      <SplideTrack
        className={
          theme.palette.mode === "light"
            ? LightStyles.slider_banner
            : DarkStyles.slider_banner
        }
      >
        {bannerData && bannerData.map((i, index) => {
          return (
            <SplideSlide key={index}>
              <img
                className={
                  theme.palette.mode === "light"
                    ? LightStyles.img_fluid
                    : DarkStyles.img_fluid
                }
                src={i.path_img}
                alt={i.name}
              />
            </SplideSlide>
          );
        })}
      </SplideTrack>
    </Splide>
  );
}
