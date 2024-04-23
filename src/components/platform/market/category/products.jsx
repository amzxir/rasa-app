import React , { useContext, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useParams , NavLink } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import { toast } from 'react-toastify';
import axios from "axios";
import LightStyles from "../../../../assets/sass/light/market/category.module.scss";
import DarkStyles from "../../../../assets/sass/dark/market/category.module.scss";
import fa from "../../../../lang/fa.json";
import ColorModeContext from "../../../../context/color-mode-context";
import BookmarkIcon from "../../../../assets/svg/Bookmark";
import { LazyLoadImage } from "react-lazy-load-image-component";


export default function Products({ fetchProduct , sendProduct }) {
    // start function darkmode
    const theme = useTheme();
    const { colorMode , token } = useContext(ColorModeContext);
    // end function darkmode
    // start attribute react router dom for get params
    const params = useParams();
    // end attribute react router dom for get params

    // start fetch data product
    const [products , setProducts] = useState([]);
    useEffect(() => {
        const handelFetchProduct = () => {
            setProducts(fetchProduct)
        }
        handelFetchProduct();
    },[])

    // end fetch data product

    // start function add bookmark
    const handelBookmark = async (id) => {
        const mobile = localStorage.getItem("mobile");

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        const bodyParameters = {
            key: "value",
            mobile:mobile,
            product_id:id,
        }

        try {
            const response = await axios.post("https://test.rasadent.com/api/CreateBookmark" , bodyParameters , config);
            // console.log(response.data);
            toast.success('به علاقه مندی ها اضافه شد')
        } catch (error) {
            console.error(error);
        }
    }
    // end function add bookmark


  return (
    <FadeTransform in transformProps={{exitTransform: 'translateX(-100px)'}} >
        <Box sx={{ mt: 5, mb: 5 }}>
            <Grid container spacing={2}>
                {products && products.map && products.map((i)=> {
                    // start max and min price product
                        const array = i.value.filter((i) => {
                            return i.selectable === 1 && i.stock > 0 && i.stock !== null 
                        })
                        const price = Math.min(...array.map(o => o.price));
                    // end max and min price product
                    return(
                        <Grid item key={i.id} xs={6}>
                            <div className={ theme.palette.mode === "light" ? LightStyles.card_product : DarkStyles.card_product}>
                                <div className={ theme.palette.mode === "light" ? LightStyles.card_img : DarkStyles.card_img}>
                                    <NavLink onClick={() => sendProduct(i)} to={`/shop/single-product/${i.id}`} state={i.fa_name} className={ theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                                        <LazyLoadImage effect="blur" src={`https://rasadent.com/storage/product/${i.image}`} alt={i.fa_name} />
                                    </NavLink>
                                    <div onClick={() => handelBookmark (i.id)} className={ theme.palette.mode === "light" ? LightStyles.icon_wishlist : DarkStyles.icon_wishlist }>
                                        <BookmarkIcon />
                                    </div>
                                </div>
                                <div className= {theme.palette.mode === "light" ? LightStyles.shop : DarkStyles.shop }>
                                    <span>{i.en_name}</span>
                                </div>
                                <div className={ theme.palette.mode === "light" ? LightStyles.product_details : DarkStyles.product_details}>
                                    <NavLink onClick={() => sendProduct(i)} to={`/shop/single-product/${i.id}`} state={i.fa_name} className={ theme.palette.mode === "light" ? LightStyles.name_product : DarkStyles.name_product }>
                                        {i.fa_name}
                                    </NavLink>
                                    <p className={ theme.palette.mode === "light" ? LightStyles.price_product : DarkStyles.price_product } >
                                        {price === Infinity ? 0 : price.toLocaleString()} {fa["Toman"]}
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
