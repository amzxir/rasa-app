import React, { useContext } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Splide, SplideTrack } from "@splidejs/react-splide";
import LightStyles from "../../../../assets/sass/light/market/landing.module.scss";
import DarkStyles from "../../../../assets/sass/dark/market/landing.module.scss";
import ColorModeContext from "../../../../context/color-mode-context";
import Search from "../search/search";
import Banner from "./banner/banner";
import Slide from "./banner/slide";
import ProductSlide from "./product/product-slide";

export default function LandingShop() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  return (
    <Box sx={{ mt: 5, mb: 5 }}>
      <Search />

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
          <Slide />
        </SplideTrack>
      </Splide>

      <ProductSlide/>

      <Banner />
    </Box>
  );
}
