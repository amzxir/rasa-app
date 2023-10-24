import React, { useContext, useEffect, useState, Suspense, lazy } from "react";
import { Box, IconButton, Card, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { NavLink } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import { toast } from 'react-toastify'
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


export default function Single({ fetchProduct }) {
  // start function darkmode
  const theme = useTheme();
  const { colorMode , token } = useContext(ColorModeContext);
  // end function darkmode

  // start fetch details product 
  const [detailsProduct , setDetailsProduct] = useState([]);

  useEffect(() => {
    const handelDetails = async () => {

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      }
      const bodyParameters = {
        key: "value",
        product_id:fetchProduct.id,
      }

      try {
        const response = await axios.post("https://rasadent.reshe.ir/api/get_product" , bodyParameters , config);
        // console.log(response.data.products);
        setDetailsProduct(response.data.products);
      } catch (error) {
        console.error(error);
      }
    }

    handelDetails();
  },[])

  // end fetch details product 

  // start function add to bokmark 
  const handelCreateBookmark = async () => {

    const mobile = localStorage.getItem("mobile");

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    const bodyParameters = {
      key: "value",
      product_id:fetchProduct.id,
      mobile:mobile,
    }

    try {
      const response = await axios.post("https://rasadent.reshe.ir/api/CreateBookmark" , bodyParameters , config);
      console.log(response.data);
      toast.success('به علاقه مندی ها اضافه شد')
    } catch (error) {
      console.error(error);
    }
  } 
  // end function add to bokmark 

  // start function add to card
  const handelCard = async (res) => {
    
    const mobile = localStorage.getItem("mobile");

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    const bodyParameters = {
      key: "value",
      mobile:mobile,
      count:2,
      discount:0,
      discount_price:0,
      shop_id:res.shop_id,
      product_id:res.product_id,
      product_price:res.price,
      peroperty_price:0,
      peroperty:res.peroperty,
      value:res.value,
    }

    try {
      const response = await axios.post("https://rasadent.reshe.ir/api/CreateCart" , bodyParameters , config);
      console.log(response);
      if(response.data.status_code === 422){
        toast.error(response.data.msg)
      } else if (response.data.status_code === 200) {
        toast.success(response.data.msg)
      }
    } catch (error) {
      console.error(error);
    }
  }
  // end function add to card

  // start function input number
  const stock = 10;
  let [count, setCount] = React.useState(1)
  const handelTotal = () => {
    if (count === Math.abs(count) * -1) {
      setCount(1)
    } else {
      setCount(count === stock ? stock : (prevCount) => prevCount + 1)
    }
  }

  const handelSubtraction = () => {
    if (count === Math.abs(count) * -1) {
      setCount(1)
    } else {
      setCount((prevCount) => prevCount - 1)
    }
  }
  // end function input number

  // start fetch data and function option product
  const [isOpen, setIsOpen] = useState(false)

  // end fetch data and function option product 

  // start function and state tabs 
  const [tab, setTab] = useState(<Suspense fallback={<div>Loading...</div>}><Description /></Suspense>);
  const [active, setActive] = useState(1);

  const handelTabOne = () => {
    setTab(<Suspense fallback={<div>Loading...</div>}><Description des={fetchProduct.product_description} /></Suspense>);
    setActive(1);
  }

  const handelTabTwo = () => {
    setTab(<Suspense fallback={<div>Loading...</div>}><Specifications /></Suspense>);
    setActive(2);
  }

  const handelTabThree = () => {
    setTab(<Suspense fallback={<div>Loading...</div>}><Comment id={fetchProduct.id} /></Suspense>);
    setActive(3);
  }

  const handelTabFour = () => {
    setTab(<Suspense fallback={<div>Loading...</div>}><Create id={fetchProduct.id} /></Suspense>)
    setActive(4);
  }

  // end function and state tabs 
  

  // console.log(fetchProduct)

  return (
    <Box data-test="component-single" sx={{ mt: 5, mb: 5 }}>
      {detailsProduct.map((it , index) => {
        return(
          <div key={it.id}>
            <div className={theme.palette.mode === "light" ? LightStyles.slider_product : DarkStyles.slider_product}>
              <Splide
                hasTrack={false}
                options={{
                  direction: "rtl",
                  pagination: true,
                  arrows: false,
                }}>
                <SplideTrack>
                  {it.image.map((i) => {
                    return(
                      <SplideSlide key={i.id}>
                        <img className={theme.palette.mode === "light" ? LightStyles.img_product : DarkStyles.img_product} src={`https://rasadent.com/storage/product/${i.image}`} alt="" />
                      </SplideSlide>
                    )
                  })}
                </SplideTrack>
              </Splide>
            </div>
            <div className={theme.palette.mode === "light" ? LightStyles.content_name_product : DarkStyles.content_name_product}>
              <div className={theme.palette.mode === "light" ? LightStyles.name_content : DarkStyles.name_content}>
                <h1>{it.fa_name}</h1>
                <div>
                  <NavLink to={"/shop/compare"} state={fa["product compare"]}>
                    <IconButton>
                      <CompareIcon />
                    </IconButton>
                  </NavLink>
                  <IconButton onClick={handelCreateBookmark}>
                    <BookmarkIcon />
                  </IconButton>
                </div>

              </div>
              <p>{it.en_name}</p>
              <div className={theme.palette.mode === "light" ? LightStyles.shop_content : DarkStyles.shop_content}>
                <div className={theme.palette.mode === "light" ? LightStyles.alert_primary : DarkStyles.alert_primary}>
                  <span>3,284 رضایت مشتری</span>
                </div>
                <div className={theme.palette.mode === "light" ? LightStyles.shop_profiel : DarkStyles.shop_profiel}>
                  <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                    <img src="/image/shop-profile.png" alt="" />
                  </div>
                  <p>
                    دسته بندی: کامپوزیت
                    <br />
                    شماره سریال: {it.code}
                  </p>
                </div>
              </div>
            </div>
            <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
              <h1><AppsBarsIcon /> {fa["Sellers of this product in Rasadnet"]} </h1>
              <p>{fa["You can choose from the sellers of this product, then order the product"]}</p>
            </div>


            {it.shops.map((i , index) => {
              return(
                <div key={index} style={{ background:i.pivot.product_stock === 0 ? '#FF000012' : '' }} className={theme.palette.mode === "light" ? LightStyles.card_shop : DarkStyles.card_shop}>
                  <Grid container spacing={2} className={theme.palette.mode === "light" ? LightStyles.content_product_shop : DarkStyles.content_product_shop}>
                    <Grid item xs={3}>
                      <img className={theme.palette.mode === "light" ? LightStyles.img_product : DarkStyles.img_product} src="/image/profile-shop.png" alt="" />
                    </Grid>

                    <Grid item xs={9}>
                      <p className={theme.palette.mode === "light" ? LightStyles.name_product : DarkStyles.name_product}>
                        <span>{i.name}</span>
                      </p>
                      <div className={theme.palette.mode === "light" ? LightStyles.content_shops : DarkStyles.content_shops}>
                        <div className={theme.palette.mode === "light" ? LightStyles.stock : DarkStyles.stock}>
                          <span>
                            <TicketIcon />
                          </span>
                          <span>
                            <p>{fa["Available in stock"]}</p>
                            <p style={{ color:i.pivot.product_stock === 0 ? '#FF0000' : '' }}>{i.pivot.product_stock} عدد</p>
                          </span>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.stock : DarkStyles.stock}>
                          <span>
                            <HistogramIcon />
                          </span>
                          <span>
                            <p>{fa["From the price"]}</p>
                            <p style={{ color:i.pivot.product_stock === 0 ? '#FF0000' : '' }}>{i.pivot.product_stock === 0 ? 'ناموجود' : `${i.pivot.price} ${fa["Toman"]}`}</p>
                          </span>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                  <div className={theme.palette.mode === "light" ? LightStyles.add_card : DarkStyles.add_card}>
                    {i.pivot.product_stock === 0 ? 
                        <button style={{ background: '#B81515', borderColor: '#B81515' }} className={theme.palette.mode === "light" ? LightStyles.btn_card : DarkStyles.btn_card}><span>{fa["Out of stock"]}</span></button>
                        :
                        <button onClick={() => setIsOpen(index)} className={theme.palette.mode === "light" ? LightStyles.btn_card : DarkStyles.btn_card}><span>{fa["Select a feature and add to cart"]}</span></button>
                    }
                  </div>
                  <div onClick={() => setIsOpen(false)} className={isOpen === index ? theme.palette.mode === "light" ? LightStyles.fade_open : DarkStyles.fade_open : theme.palette.mode === "light" ? LightStyles.fade_close : DarkStyles.fade_close}>
                  </div>
                  <div className={isOpen === index ? theme.palette.mode === "light" ? LightStyles.card_product_open : DarkStyles.card_product_open : theme.palette.mode === "light" ? LightStyles.card_product_close : DarkStyles.card_product_close}>
                    <h1>تنوع محصول خود را از فروشگاه <span>{i.name}</span> انتخاب کنید</h1>
                    <hr />
                    <div className={theme.palette.mode === "light" ? LightStyles.card_pro : DarkStyles.card_pro}>
                      {it.value.map((i , index) => {
                        return(
                          <div className={theme.palette.mode === "light" ? LightStyles.card : DarkStyles.card}>
                            <div className={theme.palette.mode === "light" ? LightStyles.option_prodeuct : DarkStyles.option_prodeuct}>
                              <p className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}><CircleLeftIcon />{i.value}</p>
                              <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}><BagIcon /><span>{fa["price"]} :</span> <span>{i.price} {fa["Toman"]}</span></p>
                            </div>
                            <div className={theme.palette.mode === "light" ? LightStyles.item_product : DarkStyles.item_product}>
                              <div className={theme.palette.mode === "light" ? LightStyles.input_number : DarkStyles.input_number}>
                                <IconButton data-test="button-increment" onClick={handelTotal}>
                                  <PlussIcon />
                                </IconButton>
                                <span data-test="count-product">
                                  {count === 0 ? 1 : count}
                                  {/* {i.stock} */}
                                </span>
                                <IconButton onClick={handelSubtraction}>
                                  <NegativeIcon />
                                </IconButton>
                              </div>
                              <button onClick={() => handelCard(i)} className={theme.palette.mode === "light" ? LightStyles.confirm : DarkStyles.confirm}><span>{fa["Add to card"]}</span></button>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )
      })}

      <div className={theme.palette.mode === "light" ? LightStyles.tabs : DarkStyles.tabs}>
        <a className={active === 1 ? "active-tab-single" : ""} onClick={handelTabOne}>{fa["Description"]}</a>
        <span className={theme.palette.mode === "light" ? LightStyles.border_tab : DarkStyles.border_tab}></span>
        <a className={active === 2 ? "active-tab-single" : ""} onClick={handelTabTwo}>{fa["Specifications"]}</a>
        <span className={theme.palette.mode === "light" ? LightStyles.border_tab : DarkStyles.border_tab}></span>
        <a className={active === 3 ? "active-tab-single" : ""} onClick={handelTabThree}>{fa["User comments"]}</a>
        <span className={theme.palette.mode === "light" ? LightStyles.border_tab : DarkStyles.border_tab}></span>
        <a className={active === 4 ? "active-tab-single" : ""} onClick={handelTabFour}>{fa["Register a comment"]}</a>
      </div>


      {tab}

    </Box>
  );
}
