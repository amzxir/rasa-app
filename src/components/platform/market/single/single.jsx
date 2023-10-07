import React, { useContext, useEffect, useState , Suspense , lazy} from "react";
import { Box, IconButton , Card, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { NavLink} from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import LightStyles from "../../../../assets/sass/light/market/single.module.scss";
import DarkStyles from "../../../../assets/sass/dark/market/single.module.scss";
import ColorModeContext from "../../../../context/color-mode-context";
import AppsBarsIcon from "../../../../assets/svg/apps-bars";
import StarOneIcon from "../../../../assets/svg/star-one";
import fa from "../../../../lang/fa.json"
import CompareIcon from "../../../../assets/svg/compare";
import BookmarkIcon from "../../../../assets/svg/Bookmark";
import NegativeIcon from "../../../../assets/svg/negative";
import PlussIcon from "../../../../assets/svg/pluss";
import TicketIcon from "../../../../assets/svg/ticket";

const Description = lazy(() => import("./product/description"));
const Specifications = lazy(() => import("./product/specifications"));
const Comment = lazy(() => import("./comment/comment"));
const Create = lazy(() => import("./comment/create"));


export default function Single() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode

  // start render compoent scroll top
  useEffect(() => {
    window.scrollTo(0 , 0)
  }, [])
  // end render compoent scroll top

  // start function input number
  const stock = 10;
  let [count , setCount] = React.useState(1)
  const handelTotal = () => {
    if(count === Math.abs(count) * -1 ){
      setCount(1)
    } else {
      setCount(count === stock ? stock : (prevCount) => prevCount + 1)
    }
  }

  const handelSubtraction = () => {
    if(count === Math.abs(count) * -1 ){
      setCount(1)
    } else {
      setCount((prevCount) => prevCount - 1)
    }
  }
  // end function input number

  // start fetch data and function option product
  const [isOpen , setIsOpen] = useState(false)
  
  // end fetch data and function option product 

  // start function and state tabs 
  const [tab , setTab] = useState(<Suspense fallback={<div>Loading...</div>}><Description/></Suspense>);
  const [active , setActive] = useState(1);

  const handelTabOne = () => {
    setTab(<Suspense fallback={<div>Loading...</div>}><Description/></Suspense>);
    setActive(1);
  }

  const handelTabTwo = () => {
    setTab(<Suspense fallback={<div>Loading...</div>}><Specifications/></Suspense>);
    setActive(2);
  }

  const handelTabThree = () => {
    setTab(<Suspense fallback={<div>Loading...</div>}><Comment/></Suspense>);
    setActive(3);
  }

  const handelTabFour = () => {
    setTab(<Suspense fallback={<div>Loading...</div>}><Create/></Suspense>)
    setActive(4);
  }

  // end function and state tabs 



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
              <img className={theme.palette.mode === "light" ? LightStyles.img_product : DarkStyles.img_product} src="/image/product-slider.png" alt="" />
            </SplideSlide>
            <SplideSlide>
              <img className={theme.palette.mode === "light" ? LightStyles.img_product : DarkStyles.img_product} src="/image/product-slider.png" alt="" />
            </SplideSlide>
          </SplideTrack>
        </Splide>
      </div>
      <div className={theme.palette.mode === "light" ? LightStyles.content_name_product : DarkStyles.content_name_product}>
        <div className={theme.palette.mode === "light" ? LightStyles.name_content : DarkStyles.name_content}>
          <h1>کامپوزیت سارمکو</h1>
          <div>
          <IconButton>
            <CompareIcon/>
          </IconButton>
          <IconButton>
            <BookmarkIcon/>
          </IconButton>
          </div>
          
        </div>
        <p>SAREMCO</p>
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
              شماره سریال: 157954
            </p>
          </div>
        </div>
      </div>
      <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
        <h1><AppsBarsIcon/> {fa["Sellers of this product in Rasadnet"]} </h1>
        <p>{fa["You can choose from the sellers of this product, then order the product"]}</p>
      </div>

      <div className={theme.palette.mode === "light" ? LightStyles.card_shop : DarkStyles.card_shop}>
        <div className={theme.palette.mode === "light" ? LightStyles.content_product_shop : DarkStyles.content_product_shop}>
          <img className={theme.palette.mode === "light" ? LightStyles.img_product : DarkStyles.img_product} src="/image/profile-shop.png" alt="" />
          <div>
            <p className={theme.palette.mode === "light" ? LightStyles.name_product : DarkStyles.name_product}>
              <span>سهند تجهیز</span>
              {/* <span className={theme.palette.mode === "light" ? LightStyles.rating_position : DarkStyles.rating_position}><StarOneIcon/> 4.8</span> */}
            </p>
            <div className={theme.palette.mode === "light" ? LightStyles.content_shops : DarkStyles.content_shops}>
              <div className={theme.palette.mode === "light" ? LightStyles.stock : DarkStyles.stock}>
                <span>
                  <TicketIcon/>
                </span>
                <span>
                  <p>{fa["Available in stock"]}</p>
                </span>
              </div>
            </div>
            {/* <p className={theme.palette.mode === "light" ? LightStyles.details_shop : DarkStyles.details_shop}>فروشگاه سهند تجهیز با بهترین قیمت و خدمات میتواند بهترین محصولات را طبق نیاز شما ارائه کنید</p> */}
          </div>
        </div>
        <div className={theme.palette.mode === "light" ? LightStyles.add_card : DarkStyles.add_card}>
          <button onClick={() => setIsOpen(!isOpen)} className={theme.palette.mode === "light" ? LightStyles.btn_card : DarkStyles.btn_card}><span>{fa["Select a feature and add to cart"]}</span></button>
        </div>
        <div onClick={()=> setIsOpen(false)} className={isOpen === true ? theme.palette.mode === "light" ? LightStyles.fade_open : DarkStyles.fade_open : theme.palette.mode === "light" ? LightStyles.fade_close : DarkStyles.fade_close}>
        </div>
        <div className={isOpen === true ? theme.palette.mode === "light" ? LightStyles.card_product_open : DarkStyles.card_product_open : theme.palette.mode === "light" ? LightStyles.card_product_close : DarkStyles.card_product_close}>
          <h1>تنوع محصول خود را از فروشگاه <span>معین دنت</span> انتخاب کنید</h1>
          <hr />
          <div className={theme.palette.mode === "light" ? LightStyles.card_pro : DarkStyles.card_pro}>
            <div className={theme.palette.mode === "light" ? LightStyles.d_flex : DarkStyles.d_flex}>
              <div className={theme.palette.mode === "light" ? LightStyles.option_product : DarkStyles.option_product}>
                <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>سایز</p>
                <Grid className={theme.palette.mode === "light" ? LightStyles.row : DarkStyles.row} container spacing={2}>
                  <Grid item xs={2} className={theme.palette.mode === "light" ? LightStyles.check_box : DarkStyles.check_box}>
                    <input type="checkbox" id="s" className={theme.palette.mode === "light" ? LightStyles.check : DarkStyles.check} />
                    <label htmlFor="s" className={theme.palette.mode === "light" ? LightStyles.label_check : DarkStyles.label_check}><span>S</span></label>
                  </Grid>
                  <Grid item xs={2} className={theme.palette.mode === "light" ? LightStyles.check_box : DarkStyles.check_box}>
                    <input type="checkbox" id="m" className={theme.palette.mode === "light" ? LightStyles.check : DarkStyles.check} />
                    <label htmlFor="m" className={theme.palette.mode === "light" ? LightStyles.label_check : DarkStyles.label_check}><span>M</span></label>
                  </Grid>
                  <Grid item xs={2} className={theme.palette.mode === "light" ? LightStyles.check_box : DarkStyles.check_box}>
                    <input type="checkbox" id="l" className={theme.palette.mode === "light" ? LightStyles.check : DarkStyles.check} />
                    <label htmlFor="l" className={theme.palette.mode === "light" ? LightStyles.label_check : DarkStyles.label_check}><span>L</span></label>
                  </Grid>
                  <Grid item xs={2} className={theme.palette.mode === "light" ? LightStyles.check_box : DarkStyles.check_box}>
                    <input type="checkbox" id="xl" className={theme.palette.mode === "light" ? LightStyles.check : DarkStyles.check} />
                    <label htmlFor="xl" className={theme.palette.mode === "light" ? LightStyles.label_check : DarkStyles.label_check}><span>Xl</span></label>
                  </Grid>
                  <Grid item xs={2} className={theme.palette.mode === "light" ? LightStyles.check_box : DarkStyles.check_box}>
                    <input type="checkbox" id="xxl" className={theme.palette.mode === "light" ? LightStyles.check : DarkStyles.check} />
                    <label htmlFor="xxl" className={theme.palette.mode === "light" ? LightStyles.label_check : DarkStyles.label_check}><span>XXl</span></label>
                  </Grid>
                </Grid>
              </div>
              <div className={theme.palette.mode === "light" ? LightStyles.option_product : DarkStyles.option_product}>
                <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>رنگ</p>
                <Grid className={theme.palette.mode === "light" ? LightStyles.row : DarkStyles.row} container spacing={2}>
                  <Grid item xs={2} className={theme.palette.mode === "light" ? LightStyles.check_box : DarkStyles.check_box}>
                    <input style={{ background:"red" }} type="checkbox" id="color1" className={theme.palette.mode === "light" ? LightStyles.check : DarkStyles.check} />
                  </Grid>
                  <Grid item xs={2} className={theme.palette.mode === "light" ? LightStyles.check_box : DarkStyles.check_box}>
                    <input style={{ background:"blue" }} type="checkbox" id="color2" className={theme.palette.mode === "light" ? LightStyles.check : DarkStyles.check} />
                  </Grid>
                  <Grid item xs={2} className={theme.palette.mode === "light" ? LightStyles.check_box : DarkStyles.check_box}>
                    <input style={{ background:"black" }} type="checkbox" id="color3" className={theme.palette.mode === "light" ? LightStyles.check : DarkStyles.check} />
                  </Grid>
                  <Grid item xs={2} className={theme.palette.mode === "light" ? LightStyles.check_box : DarkStyles.check_box}>
                    <input style={{ background:"white" }} type="checkbox" id="color4" className={theme.palette.mode === "light" ? LightStyles.check : DarkStyles.check} />
                  </Grid>
                  <Grid item xs={2} className={theme.palette.mode === "light" ? LightStyles.check_box : DarkStyles.check_box}>
                    <input style={{ background:"yellow" }} type="checkbox" id="color5" className={theme.palette.mode === "light" ? LightStyles.check : DarkStyles.check} />
                  </Grid>
                </Grid>
              </div>
              <div className={theme.palette.mode === "light" ? LightStyles.input_number : DarkStyles.input_number}>
                <IconButton data-test="button-increment" onClick={handelTotal}>
                  <PlussIcon/>
                </IconButton>
                <span data-test="count-product">
                  {count === 0 ? 1 : count}
                </span>
                <IconButton onClick={handelSubtraction}>
                  <NegativeIcon/>
                </IconButton>
              </div>
            </div>
          </div>
          <div className={theme.palette.mode === "light" ? LightStyles.d_flex_btn : DarkStyles.d_flex_btn}>
            <NavLink to={"/shop/card"} state={fa["card"]} className={theme.palette.mode === "light" ? LightStyles.confirm : DarkStyles.confirm}><span>{fa["Add to card"]}</span></NavLink>
            {/* <button onClick={(s)=> setIsOpen(false)} className={theme.palette.mode === "light" ? LightStyles.cancell : DarkStyles.cancell}>{fa["no"]}</button> */}
          </div>
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
