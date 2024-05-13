import React, { useContext, useEffect, useState, Suspense, lazy, useLayoutEffect } from "react";
import { Box, IconButton, Card, Grid, Skeleton, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { NavLink, useParams } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import { toast } from 'react-toastify'
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
import LightStyles from "../../../../assets/sass/light/market/single.module.scss";
import DarkStyles from "../../../../assets/sass/dark/market/single.module.scss";
import ColorModeContext from "../../../../context/color-mode-context";
import AppsBarsIcon from "../../../../assets/svg/apps-bars";
import fa from "../../../../lang/fa.json";
import CompareIcon from "../../../../assets/svg/compare";
import BookmarkIcon from "../../../../assets/svg/Bookmark";
import NegativeIcon from "../../../../assets/svg/negative";
import PlussIcon from "../../../../assets/svg/pluss";
import TicketIcon from "../../../../assets/svg/ticket";
import HistogramIcon from "../../../../assets/svg/histogram";
import CircleLeftIcon from "../../../../assets/svg/circle-left";
import BagIcon from "../../../../assets/svg/bag";




const Description = lazy(() => import("./product/description"));
const Specifications = lazy(() => import("./product/specifications"));
const Comment = lazy(() => import("./comment/comment"));
const Create = lazy(() => import("./comment/create"));


export default function Single() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode, token, handlerCard, handelCompare } = useContext(ColorModeContext);
  // end function darkmode

  // start fetch use params
  const { id } = useParams();
  // end fetch use params

  // start fetch details product 
  const [detailsProduct, setDetailsProduct] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    const handelDetails = async () => {

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      }
      const bodyParameters = {
        key: "value",
        product_id: id,
      }

      try {
        const response = await axios.post("https://rasadent.com/api/get_product", bodyParameters, config);
        // console.log(response.data.products);
        // localStorage.setItem("product" , JSON.stringify(response.data.products))
        setDetailsProduct(response.data.products);
        setCategory(response.data.category)
      } catch (error) {
        console.error(error);
      }
    }
    handelDetails();
  }, [])


  // end fetch details product 


  // start function add to bokmark 
  const handelCreateBookmark = async () => {

    const mobile = localStorage.getItem("mobile");

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    const bodyParameters = {
      key: "value",
      product_id: id,
      mobile: mobile,
    }

    try {
      const response = await axios.post("https://rasadent.com/api/CreateBookmark", bodyParameters, config);
      // console.log(response.data);
      toast.success('به علاقه مندی ها اضافه شد')
    } catch (error) {
      console.error(error);
    }
  }
  // end function add to bokmark 

  // start fetch data and function option product
  const [isOpen, setIsOpen] = useState(false)

  // end fetch data and function option product 

  // start function filter value data in details product
  const [value, setValue] = useState([]);

  if (detailsProduct && detailsProduct.length > 0) {
    const value_filter = detailsProduct[0]?.values?.filter((v) => {
      return v.selectable == 1 && v.stock > 0 && v.stock !== null
    });
    var values = [...value_filter];
  }

  const handelValue = () => {
    setValue(values)
  }

  useEffect(() => {
    handelValue();
  }, [])

  const increment = (value, id, stoke) => {
    const arr = [...value]
    const newQuantity = arr.map(obj => {
      if (obj.id == id && obj.quantity < stoke) {
        return { ...obj, quantity: Number(obj.quantity) + 1 };
      }
      return obj;
    });
    setValue(newQuantity);
  }

  const decrement = (value, id) => {
    const arr = [...value]
    const newQuantity = arr.map(obj => {
      if (obj.id == id && obj.quantity > 1) {
        return { ...obj, quantity: Number(obj.quantity) - 1 };
      }
      return obj;
    });

    setValue(newQuantity);
  }

  // end function filter value data in details product

  return (
    <Box data-test="component-single" sx={{ mt: 5, mb: 5 }}>
      {detailsProduct ? (
        detailsProduct.map((i) => {
          return (
            <div key={i.id}>
              <div className={theme.palette.mode === "light" ? LightStyles.slider_product : DarkStyles.slider_product}>
                <Splide
                  hasTrack={false}
                  options={{
                    direction: "rtl",
                    pagination: true,
                    arrows: false,
                  }}>
                  <SplideTrack>
                    {i?.images.map((images) => {
                      return (
                        <SplideSlide key={images.id}>
                          <img className={theme.palette.mode === "light" ? LightStyles.img_product : DarkStyles.img_product} src={`https://rasadent.com/storage/product/${images.image}`} alt="" />
                        </SplideSlide>
                      )
                    })}
                  </SplideTrack>
                </Splide>
              </div>
              <div className={theme.palette.mode === "light" ? LightStyles.content_name_product : DarkStyles.content_name_product}>
                <div className={theme.palette.mode === "light" ? LightStyles.name_content : DarkStyles.name_content}>
                  <h1>{i.fa_name}</h1>
                  <div>
                    {/* <NavLink  to={"/shop/compare"} state={fa["product compare"]}> */}
                    <IconButton onClick={() => handelCompare(i, i.id)}>
                      <CompareIcon />
                    </IconButton>
                    {/* </NavLink> */}
                    <IconButton onClick={handelCreateBookmark}>
                      <BookmarkIcon />
                    </IconButton>
                  </div>

                </div>
                <p>{i.en_name}</p>
                <div className={theme.palette.mode === "light" ? LightStyles.shop_content : DarkStyles.shop_content}>
                  <div className={theme.palette.mode === "light" ? LightStyles.alert_primary : DarkStyles.alert_primary}>
                    <span>3,284 رضایت مشتری</span>
                  </div>
                  <div className={theme.palette.mode === "light" ? LightStyles.shop_profiel : DarkStyles.shop_profiel}>
                    <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                      <LazyLoadImage effect="blur" src="/image/shop-profile.png" alt="" />
                    </div>
                    <p>
                      دسته بندی: {category}
                      <br />
                      شماره سریال: {i.code}
                    </p>
                  </div>
                </div>
              </div>
              {
                i.shops.length !== 0 ?
                  <>
                    <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                      <h1><AppsBarsIcon /> {fa["Sellers of this product in Rasadnet"]} </h1>
                      <p>{fa["You can choose from the sellers of this product, then order the product"]}</p>
                    </div>

                    {i.shops?.map((shop, index) => {

                      // start max and min price product
                      const prices = i.values.filter((i) => {
                        if (i.shop_id == shop.id) {
                          return i.selectable == 1 && i.stock > 0 && i.stock !== null
                        }
                      })

                      const price = Math.min(...prices?.map(o => o.price));

                      const stocks = i.values.filter((i) => {
                        if (i.shop_id == shop.id) {
                          return i.stock
                        }
                      })

                      const stock_product = Math.min(...stocks?.map(o => o.stock));

                      // end max and min price product

                      return (

                        price !== Infinity && stocks !== Infinity &&
                        <div key={index} style={{ background: stock_product === 0 ? '#FF000012' : '' }} className={theme.palette.mode === "light" ? LightStyles.card_shop : DarkStyles.card_shop}>
                          <Grid container spacing={2} className={theme.palette.mode === "light" ? LightStyles.content_product_shop : DarkStyles.content_product_shop}>
                            <Grid item xs={3}>
                              <LazyLoadImage effect="blur" className={theme.palette.mode === "light" ? LightStyles.img_product : DarkStyles.img_product} src="/image/profile-shop.png" alt="" />
                            </Grid>

                            <Grid item xs={9}>
                              <p className={theme.palette.mode === "light" ? LightStyles.name_product : DarkStyles.name_product}>
                                <span>{shop.name}</span>
                              </p>
                              <div className={theme.palette.mode === "light" ? LightStyles.content_shops : DarkStyles.content_shops}>
                                <div className={theme.palette.mode === "light" ? LightStyles.stock : DarkStyles.stock}>
                                  <span>
                                    <TicketIcon />
                                  </span>
                                  <span>
                                    <p>{fa["Available in stock"]}</p>
                                    <p style={{ color: stock_product === 0 ? '#FF0000' : '' }}>{stock_product} عدد</p>
                                  </span>
                                </div>
                                <div className={theme.palette.mode === "light" ? LightStyles.stock : DarkStyles.stock}>
                                  <span>
                                    <HistogramIcon />
                                  </span>
                                  <span>
                                    <p>{fa["From the price"]}</p>
                                    <p style={{ color: stock_product === 0 ? '#FF0000' : '' }}>{stock_product === 0 ? 'ناموجود' : `${price.toLocaleString()} ${fa["Toman"]}`}</p>
                                  </span>
                                </div>
                              </div>
                            </Grid>
                          </Grid>
                          <div onClick={() => handelValue()} className={theme.palette.mode === "light" ? LightStyles.add_card : DarkStyles.add_card}>
                            {stock_product === 0 ?
                              <button style={{ background: '#B81515', borderColor: '#B81515' }} className={theme.palette.mode === "light" ? LightStyles.btn_card : DarkStyles.btn_card}><span>{fa["Out of stock"]}</span></button>
                              :
                              <button onClick={() => setIsOpen(index)} className={theme.palette.mode === "light" ? LightStyles.btn_card : DarkStyles.btn_card}><span>{fa["Select a feature and add to cart"]}</span></button>
                            }
                          </div>

                          <div onClick={() => setIsOpen(false)} className={isOpen === index ? theme.palette.mode === "light" ? LightStyles.fade_open : DarkStyles.fade_open : theme.palette.mode === "light" ? LightStyles.fade_close : DarkStyles.fade_close}>
                          </div>
                          <div className={isOpen === index ? theme.palette.mode === "light" ? LightStyles.card_product_open : DarkStyles.card_product_open : theme.palette.mode === "light" ? LightStyles.card_product_close : DarkStyles.card_product_close}>
                            <div>

                            <h1>تنوع محصول خود را از فروشگاه <span>{shop.name}</span> انتخاب کنید</h1>
                            <hr />
                            <div className={theme.palette.mode === "light" ? LightStyles.card_pro : DarkStyles.card_pro}>
                              {value?.map((i, index) => {

                                // start fetch data total price
                                const total_price = i.quantity * i.price;
                                // start fetch data total price
                                return (
                                  i.shop_id == shop.id && <div key={index} className={theme.palette.mode === "light" ? LightStyles.card : DarkStyles.card}>
                                    <div className={theme.palette.mode === "light" ? LightStyles.option_prodeuct : DarkStyles.option_prodeuct}>
                                      <p className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}><CircleLeftIcon />{i.value}</p>
                                      <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}><BagIcon /><span>{fa["price"]} :</span> <span>{total_price.toLocaleString()} {fa["Toman"]}</span></p>
                                    </div>
                                    <div className={theme.palette.mode === "light" ? LightStyles.item_product : DarkStyles.item_product}>
                                      <div className={theme.palette.mode === "light" ? LightStyles.input_number : DarkStyles.input_number}>
                                        <IconButton data-test="button-increment" onClick={() => increment(value, i.id, i.stock)}>
                                          <PlussIcon />
                                        </IconButton>
                                        <span data-test="count-product">
                                          {i.quantity}
                                        </span>
                                        <IconButton onClick={() => decrement(value, i.id)}>
                                          <NegativeIcon />
                                        </IconButton>
                                      </div>
                                      <button onClick={() => handlerCard(i, i.id)} className={theme.palette.mode === "light" ? LightStyles.confirm : DarkStyles.confirm}><span>{fa["Add to card"]}</span></button>
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                            </div>
                            <div style={{ width:'100%' , position:'sticky' , bottom:'-25px' , boxSizing:'border-box' , borderRadius:'10px' , display:'flex' , alignItems:'end' }}>
                              <button style={{ 
                                background:'#f44336',
                                border:'1px solid #f44336',
                                display:'block',
                                boxSizing:'border-box',
                                padding:'0.5rem',
                                color:'#fff',
                                textAlign:'center',
                                borderRadius:'100px',
                                width:'100%',
                                cursor:'pointer'
                               }}
                               onClick={() => setIsOpen(false)}>بستن</button>
                            </div>
                          </div>

                        </div>

                      )
                    })}
                  </>
                  :
                  <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                    <h1 style={{ justifyContent:'center' , margin:'1rem 0rem' }}>{"این محصول در فروشگاهی موجود نیست ."}</h1>
                  </div>
                  
              }


              <Tabs>
                <TabList className={theme.palette.mode === "light" ? LightStyles.tabs : DarkStyles.tabs}>
                  <Tab>{fa["Description"]}</Tab>
                  <Tab>{fa["Specifications"]}</Tab>
                  <Tab>{fa["User comments"]}</Tab>
                  <Tab>{fa["Register a comment"]}</Tab>
                </TabList>

                <TabPanel>
                  <Suspense fallback={<div>Loading...</div>}><Description des={i.product_description} /></Suspense>
                </TabPanel>
                <TabPanel>
                  <Suspense fallback={<div>Loading...</div>}><Specifications /></Suspense>
                </TabPanel>
                <TabPanel>
                  <Suspense fallback={<div>Loading...</div>}><Comment id={id} /></Suspense>
                </TabPanel>
                <TabPanel>
                  <Suspense fallback={<div>Loading...</div>}><Create id={id} /></Suspense>
                </TabPanel>
              </Tabs>


            </div>
          )
        })
      ) : (
        <Stack sx={{ mb: 2 }} spacing={1}>
          <Skeleton variant="rounded" width={400} height={350} />
          <Grid container spacing={2}>
            <Grid xs={9} item>
              <Skeleton variant="text" width={200} sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" width={200} sx={{ fontSize: '1rem' }} />
            </Grid>
            <Grid sx={{ display: 'flex' }} xs={3} item>
              <Skeleton sx={{ ml: 1 }} variant="circular" width={35} height={35} />
              <Skeleton variant="circular" width={35} height={35} />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid xs={9} item>
              <Skeleton variant="text" width={200} sx={{ fontSize: '1rem' }} />
            </Grid>
            <Grid sx={{ display: 'flex', alignItems: 'center' }} xs={3} item>
              <Skeleton sx={{ ml: 1 }} variant="circular" width={25} height={25} />
              <Skeleton variant="text" width={30} height={10} />
            </Grid>
          </Grid>
          <Skeleton sx={{ mt: 1, mb: 1 }} variant="rounded" width={400} height={125} />
          <Skeleton sx={{ mt: 1, mb: 1 }} variant="rounded" width={400} height={125} />
        </Stack>
      )
      }
    </Box>
  );
}
