import React, { useContext, useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { Box } from "@mui/material";
import axios from "axios";
import LightStyles from "../../../../../assets/sass/light/market/landing.module.scss";
import DarkStyles from "../../../../../assets/sass/dark/market/landing.module.scss";
import ColorModeContext from "../../../../../context/color-mode-context";
import MarkProductIcon from "../../../../../assets/svg/mark-product";
import fa from "../../../../../lang/fa.json";

export default function ProductSlide({ productData, sendProduct }) {
  // start function darkmode
  const theme = useTheme();
  const { colorMode, token } = useContext(ColorModeContext);
  // end function darkmode

  // start fetch data product
  const [promotion, setPromotion] = useState([]);
  useEffect(() => {
    const handelGetPromotion = async () => {

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      }
      const bodyParameters = {
        key: "value",
      }

      try {
        const response = await axios.post('https://rasadent.reshe.ir/api/promotions', bodyParameters, config);
        // console.log(response.data.promotions_product_ids);
        setPromotion(response.data.promotions_product_ids)
      } catch (error) {
        console.error(error);
      }
    }
    handelGetPromotion();
  }, [])

  const most_sells = promotion.filter(obj => {
    return obj.lable === "most_sells";
  });

  const amazing = promotion.filter(obj => {
    return obj.lable === "amazing";
  });

  const new_product = promotion.filter(obj => {
    return obj.lable === "new_product";
  });

  console.log(most_sells)

  console.log(amazing)
  console.log(new_product)




  // end fetch data product
  return (
    <Box>
      <div data-test="data-product" className={theme.palette.mode === "light" ? LightStyles.m_b_1 : DarkStyles.m_b_1}>
        <div className={theme.palette.mode === "light" ? LightStyles.title_content_product : DarkStyles.title_content_product}>
          <h1>📍 {""}</h1>
          <NavLink to={`/shop/products`} state={""}>{fa["view all"]}</NavLink>
        </div>
        <Splide className={theme.palette.mode === "light" ? LightStyles.slider_product : DarkStyles.slider_product}
          hasTrack={false}
          options={{
            direction: "rtl",
            pagination: false,
            arrows: false,
            start: 2,
            perPage: 2,
          }}>
          <SplideTrack>
            <SplideSlide>
              <div className={theme.palette.mode === "light" ? LightStyles.card_product : DarkStyles.card_product}>
                <div className={theme.palette.mode === "light" ? LightStyles.card_img : DarkStyles.card_img}>
                  <NavLink className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                    <img  />
                  </NavLink>
                  <div className={theme.palette.mode === "light" ? LightStyles.icon_wishlist : DarkStyles.icon_wishlist}>
                    <MarkProductIcon />
                  </div>
                </div>
                <div className={theme.palette.mode === "light" ? LightStyles.shop : DarkStyles.shop}>
                  <span>{""}</span>
                </div>
                <div className={theme.palette.mode === "light" ? LightStyles.product_details : DarkStyles.product_details}>
                  <NavLink className={theme.palette.mode === "light" ? LightStyles.name_product : DarkStyles.name_product}>
                    {""}
                  </NavLink>
                  <p className={theme.palette.mode === "light" ? LightStyles.price_product : DarkStyles.price_product}>
                    {""} {fa["Toman"]}
                  </p>
                </div>
              </div>
            </SplideSlide>
          </SplideTrack>
        </Splide>
      </div>
    </Box>
  );
}
