import React, { useContext, useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { FadeTransform } from "react-animation-components";
import { Box, Grid, Skeleton, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LightStyles from "../../../../assets/sass/light/online-shops/shops.module.scss";
import DarkStyles from "../../../../assets/sass/dark/online-shops/shops.module.scss";
import ColorModeContext from "../../../../context/color-mode-context";

const ComponentShops = () => {

    // start function darkmode
    const theme = useTheme();
    const { colorMode, token } = useContext(ColorModeContext);
    // end function darkmode

    // start fetch api fake
    const inistialState = [
        {
            id: 1,
            name: 'آراد دنتال',
            icon: 'verified_7641727.png',
            banner: 'default.png',
            image: 'default.png',
        },
        {
            id: 2,
            name: 'دنتال تک',
            icon: 'verified_7641724.png',
            banner: 'default.png',
            image: 'default.png',
        },
        {
            id: 3,
            name: 'دیاکو تجارت ارسباران ',
            icon: 'verified_7641724.png',
            banner: 'default.png',
            image: 'default.png',
        },
        {
            id: 4,
            name: 'گلچای',
            icon: 'verified_7641727.png',
            banner: 'default.png',
            image: 'default.png',
        },
        {
            id: 5,
            name: 'مروابن',
            icon: 'verified_7641727.png',
            banner: 'default.png',
            image: 'default.png',
        },
        {
            id: 6,
            name: 'کبالت',
            icon: 'verified_7641727.png',
            banner: 'default.png',
            image: 'default.png',
        },
        {
            id: 7,
            name: 'اوریس تک',
            icon: 'verified_7641727.png',
            banner: 'default.png',
            image: 'default.png',
        },

    ]

    const [arr, setArr] = useState([])
    const [isLoading, setIsLoading] = useState(true)

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
    // end fetch api fake

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
                                            <NavLink to={`/online-shops/products`} state={`محصولات فروشگاه ${i.name}`} className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                                                <LazyLoadImage effect="blur" src={`https://rasadent.com/storage/shop/banner/${i.banner}`} alt={i.name} />
                                            </NavLink>
                                            <div className={theme.palette.mode === "light" ? LightStyles.icon_wishlist : DarkStyles.icon_wishlist}>
                                                <LazyLoadImage width={45} height={45} style={{ borderRadius: '50%' }} effect="blur" src={`https://rasadent.com/storage/shop/logo/${i.image}`} alt={i.name} />
                                            </div>
                                        </div>
                                        {/* <div className={theme.palette.mode === "light" ? LightStyles.shop : DarkStyles.shop}>
                                            <span>{i.en_name}</span>
                                  ّ      </div> */}
                                        <div className={theme.palette.mode === "light" ? LightStyles.product_details : DarkStyles.product_details}>
                                            <NavLink to={`/online-shops/products`} state={i.fa_name} className={theme.palette.mode === "light" ? LightStyles.name_product : DarkStyles.name_product}>
                                                <LazyLoadImage width={15} height={15} effect="blur" src={`https://rasadent.com/images/${i.icon}`} alt={i.name} />ّ
                                                <span style={{marginRight:'5px' }}>{i.name}</span>
                                            </NavLink>
                                            <p className={theme.palette.mode === "light" ? LightStyles.store_product : DarkStyles.store_product} >
                                               رفتن به فروشگاه
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

export default ComponentShops;