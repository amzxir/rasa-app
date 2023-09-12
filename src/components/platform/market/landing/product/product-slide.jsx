import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { Rating, Box } from "@mui/material";
import LightStyles from "../../../../../assets/sass/light/market/landing.module.scss";
import DarkStyles from "../../../../../assets/sass/dark/market/landing.module.scss";
import ColorModeContext from "../../../../../context/color-mode-context";
import Heart from "../../../../../assets/svg/heart";
import fa from "../../../../../lang/fa.json";

export default function ProductSlide({ productData , sendProduct }) {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  return (
    <Box>
      {productData && productData.map((i, index) => {
        return (
          <div
            key={index}
            data-test="data-product"
            className={
              theme.palette.mode === "light"
                ? LightStyles.m_b_1
                : DarkStyles.m_b_1
            }
          >
            <div
              className={
                theme.palette.mode === "light"
                  ? LightStyles.title_content_product
                  : DarkStyles.title_content_product
              }
            >
              <h1>📍 {i.title}</h1>
              <NavLink onClick={()=> sendProduct(i)} to={i.path} state={i.title}>{fa["view all"]}</NavLink>
            </div>
            <Splide
              className={
                theme.palette.mode === "light"
                  ? LightStyles.slider_product
                  : DarkStyles.slider_product
              }
              hasTrack={false}
              options={{
                direction: "rtl",
                pagination: false,
                arrows: false,
                start: 2,
                perPage: 2,
              }}
            >
              <SplideTrack>
                {i.product.map((i) => {
                  return (
                    <SplideSlide key={i.id}>
                      <div
                        className={
                          theme.palette.mode === "light"
                            ? LightStyles.card_product
                            : DarkStyles.card_product
                        }
                      >
                        <div
                          className={
                            theme.palette.mode === "light"
                              ? LightStyles.card_img
                              : DarkStyles.card_img
                          }
                        >
                          <NavLink
                            state={i.name}
                            to={i.path}
                            className={
                              theme.palette.mode === "light"
                                ? LightStyles.img_center
                                : DarkStyles.img_center
                            }
                          >
                            <img src={i.path_img} alt={i.name} />
                          </NavLink>
                          <div
                            className={
                              theme.palette.mode === "light"
                                ? LightStyles.icon_wishlist
                                : DarkStyles.icon_wishlist
                            }
                          >
                            <Heart />
                          </div>
                        </div>
                        <div
                          className={
                            theme.palette.mode === "light"
                              ? LightStyles.shop
                              : DarkStyles.shop
                          }
                        >
                          <span>{i.shop_name}</span>
                        </div>
                        <div
                          className={
                            theme.palette.mode === "light"
                              ? LightStyles.product_details
                              : DarkStyles.product_details
                          }
                        >
                          <NavLink
                            state={i.name}
                            to={i.path}
                            className={
                              theme.palette.mode === "light"
                                ? LightStyles.name_product
                                : DarkStyles.name_product
                            }
                          >
                            {i.name}
                          </NavLink>
                          <p
                            className={
                              theme.palette.mode === "light"
                                ? LightStyles.price_product
                                : DarkStyles.price_product
                            }
                          >
                            {i.price} {fa["Toman"]}
                          </p>
                        </div>
                      </div>
                    </SplideSlide>
                  );
                })}
              </SplideTrack>
            </Splide>
          </div>
        );
      })}
    </Box>
  );
}
