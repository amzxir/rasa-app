import React, { useContext, useEffect, useState } from "react";
import { Box, Grid , Skeleton , Stack} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
import LightStyles from "../../../../assets/sass/light/market/wishlist.module.scss";
import DarkStyles from "../../../../assets/sass/dark/market/wishlist.module.scss";
import ColorModeContext from "../../../../context/color-mode-context";
import fa from '../../../../lang/fa.json';


export default function Wishlist({ sendProduct }) {
  // start function darkmode
  const theme = useTheme();
  const { colorMode , token } = useContext(ColorModeContext);
  // end function darkmode

  // start fetch data title and wishlist
  const [wishlistData, setWishlistData] = useState();
  const [bookmark , setBookmark] = useState([]);

  useEffect(() => {
    const handelGetBookmark = async () => {

      const mobile = localStorage.getItem("mobile");

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      }
      const bodyParameters = {
        "mobile":mobile,
      }

      try {
        const response = await axios.post("https://rasadent.com/api/Bookmarks" , bodyParameters , config);
        // console.log(response.data.products_id);
        setBookmark(response.data.products_id)
      } catch (error) {
        console.error(error);
      }
    }

    handelGetBookmark();
  },[bookmark])
  

  useEffect(() => {

    const handelGetProduct = async () => {

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      }
      const bodyParameters = {
        "product_ids":bookmark,
      }

      try {
        const response = await axios.post("https://rasadent.com/api/get_products" , bodyParameters , config);
        // console.log(response.data.Products);
        setWishlistData(response.data.Products)
      } catch (error) {
        console.error(error);
      }
    }

    handelGetProduct();
  },[wishlistData])

  // end fetch data title and wishlist
  return (
    <FadeTransform in transformProps={{exitTransform: 'translateX(-100px)'}} >
      <Box sx={{ mt: 5, mb: 5 }}>
        <Grid container spacing={2}>
          {wishlistData ? (

              wishlistData.map((i) => {
                return (
                  <Grid item key={i.id} xs={6}>
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
                          onClick={() => sendProduct(i)}
                          to={`/shop/single-product/${i.id}`}
                          state={i.fa_name}
                          className={
                            theme.palette.mode === "light"
                              ? LightStyles.img_center
                              : DarkStyles.img_center
                          }
                        >
                          <LazyLoadImage effect="blur" src={`https://rasadent.com/storage/product/${i.image}`} alt={i.fa_name} />
                        </NavLink>
                        <div
                          className={
                            theme.palette.mode === "light"
                              ? LightStyles.icon_wishlist
                              : DarkStyles.icon_wishlist
                          }
                        >
                          <small style={{ color:'red' }}>X</small>
                        </div>
                      </div>
                      <div
                        className={
                          theme.palette.mode === "light"
                            ? LightStyles.shop
                            : DarkStyles.shop
                        }
                      >
                        <span>{i.en_name}</span>
                      </div>
                      <div
                        className={
                          theme.palette.mode === "light"
                            ? LightStyles.product_details
                            : DarkStyles.product_details
                        }
                      >
                        <NavLink
                          onClick={() => sendProduct(i)}
                          to={`/shop/single-product/${i.id}`}
                          state={i.fa_name}
                          className={
                            theme.palette.mode === "light"
                              ? LightStyles.name_product
                              : DarkStyles.name_product
                          }
                        >
                          {i.fa_name}
                        </NavLink>
                        <p
                          className={
                            theme.palette.mode === "light"
                              ? LightStyles.price_product
                              : DarkStyles.price_product
                          }
                        >
                          {i.code} {fa["Toman"]}
                        </p>
                      </div>
                    </div>
                  </Grid>
                );
              })

          ) : (
            <Grid container sx={{ mt:2 }} spacing={2}>
                <Grid item sx={{ mb:1 }} xs={6} >
                    <Stack spacing={1}>
                        <Skeleton variant="text" width={180} sx={{ fontSize: '1rem' }} />

                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="rectangular" width={180} height={60} />
                        <Skeleton variant="rounded" width={180} height={60} />
                    </Stack>
                </Grid>
                <Grid item sx={{ mb:1 }} xs={6} >
                    <Stack spacing={1}>
                        <Skeleton variant="text" width={180} sx={{ fontSize: '1rem' }} />

                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="rectangular" width={180} height={60} />
                        <Skeleton variant="rounded" width={180} height={60} />
                    </Stack>
                </Grid>
                <Grid item sx={{ mb:1 }} xs={6} >
                    <Stack spacing={1}>
                        <Skeleton variant="text" width={180} sx={{ fontSize: '1rem' }} />

                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="rectangular" width={180} height={60} />
                        <Skeleton variant="rounded" width={180} height={60} />
                    </Stack>
                </Grid>
                <Grid item sx={{ mb:1 }} xs={6} >
                    <Stack spacing={1}>
                        <Skeleton variant="text" width={180} sx={{ fontSize: '1rem' }} />

                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="rectangular" width={180} height={60} />
                        <Skeleton variant="rounded" width={180} height={60} />
                    </Stack>
                </Grid>
            </Grid>
          )
          
          }

        </Grid>
      </Box>
    </FadeTransform>
  );
}
