import React, { useContext, Suspense, lazy, useState } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FadeTransform } from "react-animation-components";
import ColorModeContext from "../../../../context/color-mode-context";
import Search from "../search/search";

const Banner = lazy(() => import("./banner/banner"));
const Slide = lazy(() => import("./banner/slide"));
const MostProduct = lazy(() => import("./product/most"));
const AmazingProduct = lazy(() => import("./product/amazing"));
const NewProduct = lazy(() => import("./product/new"));
const Categories = lazy(() => import("./category/category"));

export default function LandingShop({sendProduct}) {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode

  // start fetch data bennr slide
  const bannerSlide = [
    { id: 1, name: "رسادنت", path_img: "/image/chortke.png" , path:"https://chortkeh.rasadent.com/" },
    { id: 2, name: "رسادنت", path_img: "/image/form.png" , path:"https://forms.rasadent.com/" },
    { id: 3, name: "رسادنت", path_img: "/image/jet.png" , path:"http://rasadent.com/rasajet-panel" },
    { id: 4, name: "رسادنت", path_img: "/image/Untitled-6.gif" , path:"https://pol.rasadent.com/" },
  ];
  const [bannerData, setBannerData] = useState(bannerSlide);
  // end fetch data bennr slide

  return (
    <FadeTransform in transformProps={{exitTransform: 'translateX(-100px)'}} >
      <Box sx={{ mt: 5, mb: 5 }}>
        <Search />

        <Suspense fallback={<div>Loading...</div>}>
          <Slide bannerData={bannerData} />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Categories/>
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <MostProduct sendProduct={sendProduct} />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <AmazingProduct sendProduct={sendProduct} />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <NewProduct sendProduct={sendProduct} />
        </Suspense>

        {/* <Suspense fallback={<div>Loading...</div>}>
          <Banner />
        </Suspense> */}
      </Box>
    </FadeTransform>
  );
}
