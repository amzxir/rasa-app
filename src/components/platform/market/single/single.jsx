import React, { useContext, useEffect, useState, Suspense, lazy } from "react";
import { Box, IconButton, Card, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { NavLink } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import LightStyles from "../../../../assets/sass/light/market/single.module.scss";
import DarkStyles from "../../../../assets/sass/dark/market/single.module.scss";
import ColorModeContext from "../../../../context/color-mode-context";
import AppsBarsIcon from "../../../../assets/svg/apps-bars";
import fa from "../../../../lang/fa.json"
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
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode

  // start render compoent scroll top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // end render compoent scroll top

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
    setTab(<Suspense fallback={<div>Loading...</div>}><Description /></Suspense>);
    setActive(1);
  }

  const handelTabTwo = () => {
    setTab(<Suspense fallback={<div>Loading...</div>}><Specifications /></Suspense>);
    setActive(2);
  }

  const handelTabThree = () => {
    setTab(<Suspense fallback={<div>Loading...</div>}><Comment /></Suspense>);
    setActive(3);
  }

  const handelTabFour = () => {
    setTab(<Suspense fallback={<div>Loading...</div>}><Create /></Suspense>)
    setActive(4);
  }

  // end function and state tabs 

  console.log(fetchProduct)

  return (
    <Box data-test="component-single" sx={{ mt: 5, mb: 5 }}>
      <div className={theme.palette.mode === "light" ? LightStyles.slider_product : DarkStyles.slider_product}>
        <Splide
          hasTrack={false}
          options={{
            direction: "rtl",
            pagination: true,
            arrows: false,
          }}>
          <SplideTrack>
            <SplideSlide>
              <img className={theme.palette.mode === "light" ? LightStyles.img_product : DarkStyles.img_product} src={`https://rasadent.com/storage/product/${fetchProduct.image}`} alt="" />
            </SplideSlide>
          </SplideTrack>
        </Splide>
      </div>
      <div className={theme.palette.mode === "light" ? LightStyles.content_name_product : DarkStyles.content_name_product}>
        <div className={theme.palette.mode === "light" ? LightStyles.name_content : DarkStyles.name_content}>
          <h1>{fetchProduct.fa_name}</h1>
          <div>
            <NavLink to={"/shop/compare"} state={fa["product compare"]}>
              <IconButton>
                <CompareIcon />
              </IconButton>
            </NavLink>
            <IconButton>
              <BookmarkIcon />
            </IconButton>
          </div>

        </div>
        <p>{fetchProduct.en_name}</p>
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
              شماره سریال: {fetchProduct.code}
            </p>
          </div>
        </div>
      </div>
      <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
        <h1><AppsBarsIcon /> {fa["Sellers of this product in Rasadnet"]} </h1>
        <p>{fa["You can choose from the sellers of this product, then order the product"]}</p>
      </div>

      <div className={theme.palette.mode === "light" ? LightStyles.card_shop : DarkStyles.card_shop}>
        <Grid container spacing={2} className={theme.palette.mode === "light" ? LightStyles.content_product_shop : DarkStyles.content_product_shop}>
          <Grid item xs={3}>
            <img className={theme.palette.mode === "light" ? LightStyles.img_product : DarkStyles.img_product} src="/image/profile-shop.png" alt="" />
          </Grid>

          <Grid item xs={9}>
            <p className={theme.palette.mode === "light" ? LightStyles.name_product : DarkStyles.name_product}>
              <span>سهند تجهیز</span>
            </p>
            <div className={theme.palette.mode === "light" ? LightStyles.content_shops : DarkStyles.content_shops}>
              <div className={theme.palette.mode === "light" ? LightStyles.stock : DarkStyles.stock}>
                <span>
                  <TicketIcon />
                </span>
                <span>
                  <p>{fa["Available in stock"]}</p>
                  <p>۱۰ عدد</p>
                </span>
              </div>
              <div className={theme.palette.mode === "light" ? LightStyles.stock : DarkStyles.stock}>
                <span>
                  <HistogramIcon />
                </span>
                <span>
                  <p>{fa["From the price"]}</p>
                  <p>550/000{fa["Toman"]}</p>
                </span>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className={theme.palette.mode === "light" ? LightStyles.add_card : DarkStyles.add_card}>
          <button onClick={() => setIsOpen(!isOpen)} className={theme.palette.mode === "light" ? LightStyles.btn_card : DarkStyles.btn_card}><span>{fa["Select a feature and add to cart"]}</span></button>
        </div>
        <div onClick={() => setIsOpen(false)} className={isOpen === true ? theme.palette.mode === "light" ? LightStyles.fade_open : DarkStyles.fade_open : theme.palette.mode === "light" ? LightStyles.fade_close : DarkStyles.fade_close}>
        </div>
        <div className={isOpen === true ? theme.palette.mode === "light" ? LightStyles.card_product_open : DarkStyles.card_product_open : theme.palette.mode === "light" ? LightStyles.card_product_close : DarkStyles.card_product_close}>
          <h1>تنوع محصول خود را از فروشگاه <span>معین دنت</span> انتخاب کنید</h1>
          <hr />
          <div className={theme.palette.mode === "light" ? LightStyles.card_pro : DarkStyles.card_pro}>
            <div className={theme.palette.mode === "light" ? LightStyles.card : DarkStyles.card}>
              <div className={theme.palette.mode === "light" ? LightStyles.option_prodeuct : DarkStyles.option_prodeuct}>
                <p className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}><CircleLeftIcon />رنگ A1</p>
                <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}><BagIcon /><span>{fa["price"]} :</span> <span>180/000 {fa["Toman"]}</span></p>
              </div>
              <div className={theme.palette.mode === "light" ? LightStyles.item_product : DarkStyles.item_product}>
                <div className={theme.palette.mode === "light" ? LightStyles.input_number : DarkStyles.input_number}>
                  <IconButton data-test="button-increment" onClick={handelTotal}>
                    <PlussIcon />
                  </IconButton>
                  <span data-test="count-product">
                    {count === 0 ? 1 : count}
                  </span>
                  <IconButton onClick={handelSubtraction}>
                    <NegativeIcon />
                  </IconButton>
                </div>
                <NavLink to={"/shop/card"} state={fa["card"]} className={theme.palette.mode === "light" ? LightStyles.confirm : DarkStyles.confirm}><span>{fa["Add to card"]}</span></NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: '#FF000012' }} className={theme.palette.mode === "light" ? LightStyles.card_shop : DarkStyles.card_shop}>
        <Grid container spacing={2} className={theme.palette.mode === "light" ? LightStyles.content_product_shop : DarkStyles.content_product_shop}>
          <Grid item xs={3}>
            <img className={theme.palette.mode === "light" ? LightStyles.img_product : DarkStyles.img_product} src="/image/profile-shop.png" alt="" />
          </Grid>

          <Grid item xs={9}>
            <p className={theme.palette.mode === "light" ? LightStyles.name_product : DarkStyles.name_product}>
              <span>سهند تجهیز</span>
            </p>
            <div className={theme.palette.mode === "light" ? LightStyles.content_shops : DarkStyles.content_shops}>
              <div className={theme.palette.mode === "light" ? LightStyles.stock : DarkStyles.stock}>
                <span>
                  <TicketIcon />
                </span>
                <span>
                  <p>{fa["Available in stock"]}</p>
                  <p style={{ color: '#FF0000' }}>0 عدد</p>
                </span>
              </div>
              <div className={theme.palette.mode === "light" ? LightStyles.stock : DarkStyles.stock}>
                <span>
                  <HistogramIcon />
                </span>
                <span>
                  <p>{fa["From the price"]}</p>
                  <p style={{ color: '#FF0000' }}>ناموجود</p>
                </span>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className={theme.palette.mode === "light" ? LightStyles.add_card : DarkStyles.add_card}>
          <button style={{ background: '#B81515', borderColor: '#B81515' }} className={theme.palette.mode === "light" ? LightStyles.btn_card : DarkStyles.btn_card}><span>{fa["Out of stock"]}</span></button>
        </div>
      </div>

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
