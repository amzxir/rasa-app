import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Box, Rating } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import LightStyles from "../../../../assets/sass/light/market/landing.module.scss";
import DarkStyles from "../../../../assets/sass/dark/market/landing.module.scss";
import ColorModeContext from "../../../../context/color-mode-context";
import Search from "./search/search";
import Heart from "../../../../assets/svg/heart";
import VerifyIcon from "../../../../assets/svg/verify";

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
          <SplideSlide>
            <img
              className={
                theme.palette.mode === "light"
                  ? LightStyles.img_fluid
                  : DarkStyles.img_fluid
              }
              src="image/slider1.png"
              alt=""
            />
          </SplideSlide>
          <SplideSlide>
            <img
              className={
                theme.palette.mode === "light"
                  ? LightStyles.img_fluid
                  : DarkStyles.img_fluid
              }
              src="image/slider1.png"
              alt=""
            />
          </SplideSlide>
        </SplideTrack>
      </Splide>

      <div
        className={
          theme.palette.mode === "light"
            ? LightStyles.title_content_product
            : DarkStyles.title_content_product
        }
      >
        <h1>📍 پیشنهاد شگقت انگیز</h1>
        <NavLink>مشاهده همه</NavLink>
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
          <SplideSlide>
            <div
              className={
                theme.palette.mode === "light"
                  ? LightStyles.card_product
                  : DarkStyles.card_product
              }
            >
              <NavLink
                className={
                  theme.palette.mode === "light"
                    ? LightStyles.img_center
                    : DarkStyles.img_center
                }
              >
                <img src="image/product-1.png" alt="" />
                <div
                  className={
                    theme.palette.mode === "light"
                      ? LightStyles.icon_wishlist
                      : DarkStyles.icon_wishlist
                  }
                >
                  <Heart />
                </div>
              </NavLink>
              <div
                className={
                  theme.palette.mode === "light"
                    ? LightStyles.rating
                    : DarkStyles.rating
                }
              >
                <span
                  className={
                    theme.palette.mode === "light"
                      ? LightStyles.text_rating
                      : DarkStyles.text_rating
                  }
                >
                  (10)
                </span>
                <Rating name="read-only" value={5} readOnly size="small" />
              </div>
              <div
                className={
                  theme.palette.mode === "light"
                    ? LightStyles.shop
                    : DarkStyles.shop
                }
              >
                <img src="image/Ellips.png" alt="" />
                <span>فروشگاه مانگو طب</span>
                <VerifyIcon />
              </div>
              <div
                className={
                  theme.palette.mode === "light"
                    ? LightStyles.product_details
                    : DarkStyles.product_details
                }
              >
                <NavLink
                  className={
                    theme.palette.mode === "light"
                      ? LightStyles.name_product
                      : DarkStyles.name_product
                  }
                >
                  باندینگ نسل 8 اف جی ام
                </NavLink>
                <p
                  className={
                    theme.palette.mode === "light"
                      ? LightStyles.price_product
                      : DarkStyles.price_product
                  }
                >
                  7000 تومان
                </p>
              </div>
            </div>
          </SplideSlide>
        </SplideTrack>
      </Splide>

      <div className={theme.palette.mode === "light" ? LightStyles.banner_shop : DarkStyles.banner_shop}>
        <img src="image/banner.png" alt="" />
      </div>

      <div
        className={
          theme.palette.mode === "light"
            ? LightStyles.title_content_product
            : DarkStyles.title_content_product
        }
      >
        <h1>📍 آخرین محصولات رسادنت</h1>
        <NavLink>مشاهده همه</NavLink>
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
          <SplideSlide>
            <div
              className={
                theme.palette.mode === "light"
                  ? LightStyles.card_product
                  : DarkStyles.card_product
              }
            >
              <NavLink
                className={
                  theme.palette.mode === "light"
                    ? LightStyles.img_center
                    : DarkStyles.img_center
                }
              >
                <img src="image/product-1.png" alt="" />
                <div
                  className={
                    theme.palette.mode === "light"
                      ? LightStyles.icon_wishlist
                      : DarkStyles.icon_wishlist
                  }
                >
                  <Heart />
                </div>
              </NavLink>
              <div
                className={
                  theme.palette.mode === "light"
                    ? LightStyles.rating
                    : DarkStyles.rating
                }
              >
                <span
                  className={
                    theme.palette.mode === "light"
                      ? LightStyles.text_rating
                      : DarkStyles.text_rating
                  }
                >
                  (10)
                </span>
                <Rating name="read-only" value={5} readOnly size="small" />
              </div>
              <div
                className={
                  theme.palette.mode === "light"
                    ? LightStyles.shop
                    : DarkStyles.shop
                }
              >
                <img src="image/Ellips.png" alt="" />
                <span>فروشگاه مانگو طب</span>
                <VerifyIcon />
              </div>
              <div
                className={
                  theme.palette.mode === "light"
                    ? LightStyles.product_details
                    : DarkStyles.product_details
                }
              >
                <NavLink
                  className={
                    theme.palette.mode === "light"
                      ? LightStyles.name_product
                      : DarkStyles.name_product
                  }
                >
                  باندینگ نسل 8 اف جی ام
                </NavLink>
                <p
                  className={
                    theme.palette.mode === "light"
                      ? LightStyles.price_product
                      : DarkStyles.price_product
                  }
                >
                  7000 تومان
                </p>
              </div>
            </div>
          </SplideSlide>
        </SplideTrack>
      </Splide>
    </Box>
  );
}
