import React, { useContext, useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { FadeTransform } from "react-animation-components";
import { Box, Grid, Skeleton, Stack } from "@mui/material";
import { useParams, NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LightStyles from "../../../../assets/sass/light/online-shops/shops.module.scss";
import DarkStyles from "../../../../assets/sass/dark/online-shops/shops.module.scss";
import ColorModeContext from "../../../../context/color-mode-context";
import Bookmark from "../../../../assets/svg/Bookmark";
import fa from "../../../../lang/fa.json";


const ComponentProducts = ({ fetchProduct , sendProduct }) => {

    // start function darkmode
    const theme = useTheme();
    const { colorMode, token } = useContext(ColorModeContext);
    // end function darkmode

    // start attribute react router dom for get params
    const params = useParams();
    // end attribute react router dom for get params

    // start fetch data product
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const handelFetchProduct = () => {
            setProducts(fetchProduct)
        }
        handelFetchProduct();
    }, [])

    // end fetch data product

    const inistialState = [
        {
            id: 1,
            image: 'https://rasadent.com/storage/product/101691919767.jpg',
            fa_name: 'کاغذ آرتیکولاسیون _Dentacomp',
            en_name: 'Articulating paper_Dentacomp',
            price: 110000
        },
        {
            id: 2,
            image: 'https://rasadent.com/storage/product/111701609231.webp',
            fa_name: 'اسید اچ جامبو _مروابن',
            en_name: 'Phosphoric acid 37% Etching Gel _Morvabon',
            price: 353000
        },
        {
            id: 3,
            image: 'https://rasadent.com/storage/product/131695461639.webp',
            fa_name: 'اسید اچ _کبالت ',
            en_name: 'Phosphoric acid  Gel 37%_Cobalt',
            price: 185000
        },
    ]

    const [arr, setArr] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const handlerFeach = () => new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: { data: inistialState } })
        }, 2000);
    })

    useEffect(() => {
        setIsLoading(false);
        handlerFeach().then(resulte => {
            setArr(resulte.data.data)
            setIsLoading(true)
        }, error => {
            console.log('error 500')
        })
    }, [])


    return (
        <FadeTransform in transformProps={{ exitTransform: 'translateX(-100px)' }} >
            <Box sx={{ mt: 5, mb: 5 }}>
                <Grid container spacing={2}>
                    {isLoading ? (
                        arr?.map((i) => {
                            // // start max and min price product
                            //   const array = i.value.filter((i) => {
                            //         return i.selectable == 1 && i.stock > 0 && i.stock !== null 
                            //     })
                            //     const price = Math.min(...array.map(o => o.price));
                            // // end max and min price product
                            return (
                                <Grid item key={i.id} xs={6}>
                                    <div className={theme.palette.mode === "light" ? LightStyles.card_product : DarkStyles.card_product}>
                                        <div className={theme.palette.mode === "light" ? LightStyles.card_img : DarkStyles.card_img}>
                                            <NavLink to={`/shop/single-product/11`} state={i.fa_name} className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                                                <LazyLoadImage effect="blur" src={i.image} alt={i.fa_name} />
                                            </NavLink>
                                            <div onClick={() => handelBookmark(11)} className={theme.palette.mode === "light" ? LightStyles.icon_wishlist : DarkStyles.icon_wishlist}>
                                                <Bookmark />
                                            </div>
                                        </div>
                                        <div className={theme.palette.mode === "light" ? LightStyles.shop : DarkStyles.shop}>
                                            <span>{i.en_name}</span>
                                        </div>
                                        <div className={theme.palette.mode === "light" ? LightStyles.product_details : DarkStyles.product_details}>
                                            <NavLink to={`/shop/single-product/11`} state={i.fa_name} className={theme.palette.mode === "light" ? LightStyles.name_product : DarkStyles.name_product}>
                                                {i.fa_name}
                                            </NavLink>
                                            <p className={theme.palette.mode === "light" ? LightStyles.price_product : DarkStyles.price_product} >
                                                {i.price} {fa["Toman"]}
                                            </p>
                                        </div>
                                    </div>
                                </Grid>
                            )
                        })
                    ) : (
                        <>
                            <Stack sx={{ ml: 2 }} spacing={1}>
                                {/* For variant="text", adjust the height via font-size */}
                                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

                                {/* For other variants, adjust the size with `width` and `height` */}
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="rectangular" width={210} height={60} />
                                <Skeleton variant="rounded" width={210} height={60} />
                            </Stack>
                            <Stack sx={{ ml: 2 }} spacing={1}>
                                {/* For variant="text", adjust the height via font-size */}
                                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

                                {/* For other variants, adjust the size with `width` and `height` */}
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="rectangular" width={210} height={60} />
                                <Skeleton variant="rounded" width={210} height={60} />
                            </Stack>
                        </>
                    )}
                </Grid>
            </Box>
        </FadeTransform>
    )
}

export default ComponentProducts;