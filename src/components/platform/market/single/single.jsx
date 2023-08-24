import React, { useContext, useState} from "react";
import { Box, IconButton   } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import LightStyles from "../../../../assets/sass/light/market/single.module.scss";
import DarkStyles from "../../../../assets/sass/dark/market/single.module.scss";
import ColorModeContext from "../../../../context/color-mode-context";
import HeartSingleIcon from "../../../../assets/svg/heart-single";
import AppsBarsIcon from "../../../../assets/svg/apps-bars";
import StarOneIcon from "../../../../assets/svg/star-one";
import CartIcon from "../../../../assets/svg/cart";
import NegativeIcon from "../../../../assets/svg/negative";
import PlussIcon from "../../../../assets/svg/pluss";

export default function Single() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode

  // start function input number
  let [count , setCount] = React.useState(1)
  const handelTotal = () => {
    if(count === Math.abs(count) * -1 ){
      setCount(1)
    } else {
      setCount((prevCount) => prevCount + 1)
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
          <IconButton>
            <HeartSingleIcon/>
          </IconButton>
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
        <h1><AppsBarsIcon/> فروشندگان این کالا در رسادنت </h1>
        <p>از بین فروشندگان این محصول می توانید انتخاب کنید ، سپس سفارش محصول را بزنید</p>
      </div>
      <div className={theme.palette.mode === "light" ? LightStyles.card_shop : DarkStyles.card_shop}>
        <div className={theme.palette.mode === "light" ? LightStyles.content_product_shop : DarkStyles.content_product_shop}>
          <img className={theme.palette.mode === "light" ? LightStyles.img_product : DarkStyles.img_product} src="/image/profile-shop.png" alt="" />
          <div>
            <p className={theme.palette.mode === "light" ? LightStyles.name_product : DarkStyles.name_product}>
              <span>سهند تجهیز</span>
              <span className={theme.palette.mode === "light" ? LightStyles.rating_position : DarkStyles.rating_position}><StarOneIcon/> 4.8</span>
            </p>
            <p className={theme.palette.mode === "light" ? LightStyles.status_product : DarkStyles.status_product}><CartIcon/>موجود 10 عدد</p>
          </div>
        </div>
        <div className={theme.palette.mode === "light" ? LightStyles.price_shop : DarkStyles.price_shop}>
          <div className={theme.palette.mode === "light" ? LightStyles.input_number : DarkStyles.input_number}>
            <IconButton data-test="button-increment" onClick={handelTotal}>
              <PlussIcon/>
            </IconButton>
            <span data-test="count-product">
              {count}
            </span>
            <IconButton onClick={handelSubtraction}>
              <NegativeIcon/>
            </IconButton>
          </div>
          <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>125/000 <small>تومان</small></p>
        </div>
        <div className={theme.palette.mode === "light" ? LightStyles.add_card : DarkStyles.add_card}>
          <button className={theme.palette.mode === "light" ? LightStyles.btn_card : DarkStyles.btn_card}><span>افزودن به سبد خرید</span></button>
        </div>
      </div>
      <div className={theme.palette.mode === "light" ? LightStyles.comment : DarkStyles.comment}>
        <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>توضیحات</p>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
      </div>
    </Box>
  );
}
