import React , { useContext, useState } from "react";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useParams , NavLink } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import LightStyles from "../../../../assets/sass/light/market/category.module.scss";
import DarkStyles from "../../../../assets/sass/dark/market/category.module.scss";
import fa from "../../../../lang/fa.json";
import ColorModeContext from "../../../../context/color-mode-context";
import BookmarkIcon from "../../../../assets/svg/Bookmark";

export default function Products({ fetchProduct }) {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  // start attribute react router dom for get params
  const params = useParams();
  // end attribute react router dom for get params

  // start fetch data product
  const fetchData = fetchProduct.product;
  const [products , setProducts] = useState(fetchData)
  // end fetch data product

  console.log(fetchData)

  return (
    <FadeTransform in transformProps={{exitTransform: 'translateX(-100px)'}} >
        <Box sx={{ mt: 5, mb: 5 }}>
            <Grid container spacing={2}>
                {products.map((i, index)=> {
                    return(
                        <Grid item key={i.id} xs={6}>
                            <div className={ theme.palette.mode === "light" ? LightStyles.card_product : DarkStyles.card_product}>
                                <div className={ theme.palette.mode === "light" ? LightStyles.card_img : DarkStyles.card_img}>
                                    <NavLink to={i.path} state={i.name} className={ theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                                        <img src={i.path_img} alt={i.name} />
                                    </NavLink>
                                    <div className={ theme.palette.mode === "light" ? LightStyles.icon_wishlist : DarkStyles.icon_wishlist }>
                                        <BookmarkIcon />
                                    </div>
                                </div>
                                <div className= {theme.palette.mode === "light" ? LightStyles.shop : DarkStyles.shop }>
                                    <span>{i.shop_name}</span>
                                </div>
                                <div className={ theme.palette.mode === "light" ? LightStyles.product_details : DarkStyles.product_details}>
                                    <NavLink to={i.path} state={i.name} className={ theme.palette.mode === "light" ? LightStyles.name_product : DarkStyles.name_product }>
                                        {i.name}
                                    </NavLink>
                                    <p className={ theme.palette.mode === "light" ? LightStyles.price_product : DarkStyles.price_product } >
                                    {i.price} {fa["Toman"]}
                                    </p>
                                </div>
                            </div>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    </FadeTransform>
  );
}
