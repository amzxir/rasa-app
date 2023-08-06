import React, { useContext , useState } from "react";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LightStyles from "../../../../assets/sass/light/market/wishlist.module.scss";
import DarkStyles from "../../../../assets/sass/dark/market/wishlist.module.scss";
import ColorModeContext from "../../../../context/color-mode-context";
import { NavLink } from "react-router-dom";
import Heart from "../../../../assets/svg/heart";

export default function Wishlist() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode

  // start fetch data title and wishlist
  const wishlist = [
    {
      id: 1,
      name: "کامپوزیت سارمکو",
      path: "/single-product",
      path_img: "image/product-1.png",
      shop_name: "فروشگاه مانگو طب",
      price: "12000",
      rating: 3,
      comment: "12",
    },
    {
      id: 2,
      name: "باندینگ نسل 8 اف جی ام",
      path: "/single-product",
      path_img: "image/product-2.png",
      shop_name: "فروشگاه طب",
      price: "7000",
      rating: 5,
      comment: "10",
    },
    {
      id: 3,
      name: "آلژینات بایر  کولزر",
      path: "/single-product",
      path_img: "image/product-2.png",
      shop_name: "فروشگاه مانگو",
      price: "3000",
      rating: 3,
      comment: "2",
    },
    {
      id: 4,
      name: "آلژینات زرماخ",
      path: "/single-product",
      path_img: "image/product-1.png",
      shop_name: "فروشگاه رسادنت",
      price: "34000",
      rating: 2,
      comment: "5",
    },
    {
      id: 5,
      name: "کامپوزیت سارمکو",
      path: "/single-product",
      path_img: "image/product-2.png",
      shop_name: "فروشگاه مانگو طب",
      price: "56000",
      rating: 1,
      comment: "6",
    },
  ];
  const [wishlistData, setWishlistData] = useState(wishlist);
  // end fetch data title and wishlist
  return (
    <Box sx={{ mt: 5, mb: 5 }}>
      <Grid container spacing={2}>
        {wishlistData.map((i)=> {
          return(
          <Grid key={i.id} item xs={6}>
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
                  {i.price} تومان
                </p>
              </div>
            </div>
          </Grid>
          )
        })}
      </Grid>
    </Box>
  );
}