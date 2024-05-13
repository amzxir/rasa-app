import React, { useContext, useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { Box, Skeleton, Stack } from "@mui/material";
import { toast } from 'react-toastify';
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
import LightStyles from "../../../../../assets/sass/light/market/landing.module.scss";
import DarkStyles from "../../../../../assets/sass/dark/market/landing.module.scss";
import ColorModeContext from "../../../../../context/color-mode-context";
import MarkProductIcon from "../../../../../assets/svg/mark-product";
import fa from "../../../../../lang/fa.json";


export default function NewProduct({ productData, sendProduct }) {
  // start function darkmode
  const theme = useTheme();
  const { colorMode, token } = useContext(ColorModeContext);
  // end function darkmode

  // start fetch api fake 

  const inistialState = [
    {
      id: 1,
      image: 'https://rasadent.com/storage/product/151701609258.webp',
      fa_name: 'باندینگ آمبر _FGM ',
      en_name: 'Ambar bonding APS_FGM ',
      price: 580000
    },
    {
      id: 2,
      image: 'https://rasadent.com/storage/product/171701609281.webp',
      fa_name: 'باندینگ پریمیو باند_GC',
      en_name: 'G-Premio Bond_GC',
      price: 352000
    },
    {
      id: 3,
      image: 'https://rasadent.com/storage/product/311701609336.webp',
      fa_name: 'آشکار ساز پوسیدگی _کبالت',
      en_name: 'Caries Detector Dye_Cobalt',
      price: 420000
    },
  ]


  const [arr, setArr] = useState([])
  const [isLoding, setIsLoading] = useState(true);

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

  // start fetch data product
  // const [promotion, setPromotion] = useState([]);

  // const [getProduct, setGetProduct] = useState(data);

  // const handelGetPromotion = async () => {

  //   const config = {
  //     headers: { Authorization: `Bearer ${token}` }
  //   }
  //   const bodyParameters = {
  //     key: "value",
  //   }

  //   try {
  //     const response = await axios.post('https://rasadent.com/api/promotions', bodyParameters, config);
  //     // console.log(response.data.promotions_product_ids);
  //     setPromotion(response.data.promotions_product_ids)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // useEffect(() => {
  //   handelGetPromotion();
  // }, [promotion])

  // const new_product = promotion.filter(obj => {
  //   return obj.lable === "new_product";
  // });

  // const product_id = new_product.map(obj => {
  //   return obj.product_id
  // })

  // const handelGetProducts = async () => {
  //   const config = {
  //     headers: { Authorization: `Bearer ${token}` }
  //   }
  //   const bodyParameters = {
  //     "product_ids": product_id,
  //   }

  //   try {
  //     const response = await axios.post('https://rasadent.com/api/get_products', bodyParameters, config);
  //     // console.log(response.data.Products);
  //     setGetProduct(response.data.Products)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // useEffect(() => {
  //   handelGetProducts();
  // }, [getProduct])

  // // end fetch data product

  // start function add bookmark
  const handelBookmark = async (id) => {

    const mobile = localStorage.getItem("mobile");

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    const bodyParameters = {
      key: "value",
      mobile: mobile,
      product_id: id,
    }

    try {
      const response = await axios.post("https://rasadent.com/api/CreateBookmark", bodyParameters, config);
      // console.log(response.data);
      toast.success('به علاقه مندی ها اضافه شد')
    } catch (error) {
      console.error(error);
    }
  }
  // end function add bookmark


  return (
    <Box>
      <div data-test="data-product" className={theme.palette.mode === "light" ? LightStyles.m_b_1 : DarkStyles.m_b_1}>
        <div className={theme.palette.mode === "light" ? LightStyles.title_content_product : DarkStyles.title_content_product}>
          {arr ? (<h1>📍 {"جدیدترین محصولات"}</h1>) : (<Skeleton variant="text" width={180} sx={{ fontSize: '1rem' }} />)}
          {/* {getProduct ? (<NavLink onClick={() => sendProduct(getProduct)} to={`/shop/products/جدیدترین محصولات`} state={"جدیدترین محصولات"}>{fa["view all"]}</NavLink>) : (<Skeleton variant="text" width={50} sx={{ fontSize: '.5rem' }} />)}    */}
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
            {isLoding ? (
              arr?.map((i) => {
                // // start max and min price product
                //   const array = i.value.filter((i) => {
                //       return i.selectable == 1 && i.stock > 0 && i.stock !== null 
                //   })
                //   const price = Math.min(...array.map(o => o.price));
                // // end max and min price product
                return (
                  <SplideSlide key={i.id}>
                    <div className={theme.palette.mode === "light" ? LightStyles.card_product : DarkStyles.card_product}>
                      <div className={theme.palette.mode === "light" ? LightStyles.card_img : DarkStyles.card_img}>
                        <NavLink onClick={() => sendProduct(i)} to={`/shop/single-product/${i.id}`} state={i.fa_name} className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                          <LazyLoadImage effect="blur" src={i.image} />
                        </NavLink>
                        <div onClick={() => handelBookmark(i.id)} className={theme.palette.mode === "light" ? LightStyles.icon_wishlist : DarkStyles.icon_wishlist}>
                          <MarkProductIcon />
                        </div>
                      </div>
                      <div className={theme.palette.mode === "light" ? LightStyles.shop : DarkStyles.shop}>
                        <span>{i.en_name}</span>
                      </div>
                      <div className={theme.palette.mode === "light" ? LightStyles.product_details : DarkStyles.product_details}>
                        <NavLink onClick={() => sendProduct(i)} to={`/shop/single-product/${i.id}`} state={i.fa_name} className={theme.palette.mode === "light" ? LightStyles.name_product : DarkStyles.name_product}>
                          {i.fa_name}
                        </NavLink>
                        <p className={theme.palette.mode === "light" ? LightStyles.price_product : DarkStyles.price_product}>
                          {i.price === Infinity ? 0 : i.price.toLocaleString()} {fa["Toman"]}
                        </p>
                      </div>
                    </div>
                  </SplideSlide>
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
          </SplideTrack>
        </Splide>
      </div>
    </Box>
  );
}
