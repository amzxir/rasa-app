import React, { useContext, useState } from 'react'
import { Box, Card, IconButton } from '@mui/material'
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import axios from 'axios';
import ColorModeContext from '../../../../../context/color-mode-context';
import LightStyles from "../../../../../assets/sass/light/market/pay.module.scss";
import DarkStyles from "../../../../../assets/sass/dark/market/pay.module.scss";
import fa from "../../../../../lang/fa.json";
import PaysIcon from '../../../../../assets/svg/pays';
import CalendarIcon from '../../../../../assets/svg/calendar';
import DocumentIcon from '../../../../../assets/svg/document';
import CallIcon from '../../../../../assets/svg/call';
import FingerIcon from '../../../../../assets/svg/finger';
import { toast } from 'react-toastify';



export default function Pay() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode, cardProduct, token } = useContext(ColorModeContext);
  // end function darkmode

  // start state checked input
  const [checked, setChecked] = useState(true);
  // end state checked input


  // start function and fetch data card product for invoice
  const mobile = localStorage.getItem("mobile");
  const price_product = cardProduct?.map(item => item.price * item.quantity).reduce((a, b) => { return a + b }, 0)
  const tax = (9 / 100) * price_product;
  const total_price = tax + price_product;
  const packing = 46000

  // end function and fetch data card product for invoice

  // start fetch product card for add to card

  const remove_item_arr = cardProduct.map((i) => {
    return delete i.updated_at && delete i.inventory && delete i.product_brand && delete i.selectable && delete i.stock && delete i.created_at
  })

  const card_pay = cardProduct.map((item, i) => ({ ...item, mobile: mobile, discount: 0, discount_price: 0, product_price: 0 }));


  const arr = card_pay.map((i) => {
    return Object.values(i).map((val, index) => {
      return val
    })
  })

  const carts = arr.map(({
    0: id,
    1: peroperty_price,
    2: shop_id,
    3: count,
    4: peroperty,
    5: value,
    6: product_id,
    7: mobile,
    8: discount,
    9: discount_price,
    10: product_price,
    ...rest
  }) => ({
    id,
    peroperty_price,
    shop_id,
    count,
    peroperty,
    value,
    product_id,
    mobile,
    discount,
    discount_price,
    product_price,
    ...rest
  }));



  // end fetch product card for add to card

  // start function create product card
  const [card, setCrad] = useState();
  const [createInvoice, setCreateInvoice] = useState();

  const handlerCreateCard = async () => {

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    const bodyParameters = {
      key: "value",
      mobile: mobile,
      carts: carts
    }

    try {
      const response = await axios.post("https://rasadent.reshe.ir/api/CreateCart", bodyParameters, config);
      console.log(response);
      if (response.data.status_code === 500) {
        setCrad(response.data.status_code)
      } else if (response.data.status_code === 422) {
        setCrad(response.data.status_code)
      } else if (response.data.status_code === 200) {
        setCrad(response.data.status_code)
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handlerCreateInvoice = async () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    const bodyParameters = {
      key: "value",
    }

    try {
      const response = await axios.post("https://rasadent.reshe.ir/api/CreateInvoice", bodyParameters, config);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }


  const handlerPay = () => {
    handlerCreateCard();

    if (card === 500) {
      toast.error('خطای سرور در ایجاد سبد خرید');
    } else if (card === 422) {
      toast.error('خطای سرور');
    } else if (card === 200) {
      handlerCreateInvoice();
    }

    if (createInvoice === 500) {
      toast.error('خطای سرور در ایجاد فاکتور');
    } else if (createInvoice === 422) {
      toast.error('خطای سرور');
    } else if (createInvoice === 200) {
      console.log('pay');
    }

  }

  // end function create product card


  return (
    <FadeTransform in transformProps={{ exitTransform: 'translateX(-100px)' }} >
      <Box sx={{ mt: 5, mb: 5 }}>

        <div className={theme.palette.mode === "light" ? LightStyles.invoives : DarkStyles.invoives}>
          <div className={theme.palette.mode === "light" ? LightStyles.invoice_header : DarkStyles.invoice_header}>
            <div className={theme.palette.mode === "light" ? LightStyles.item_invoice : DarkStyles.item_invoice}>
              <p><CalendarIcon /></p>
              <p>
                <div style={{ marginBottom: '.3rem' }}>تاریخ :</div>
                <div>۱۴۰۲-۰۷-۰۷</div>
              </p>
            </div>
            {/* <div className={theme.palette.mode === "light" ? LightStyles.item_invoice : DarkStyles.item_invoice}>
              <p><DocumentIcon/></p>
              <p>
                <div style={{ marginBottom:'.3rem' }}>شماره :</div>
                <div>Rasa۵۵۸۶۵۱۱۹</div>
              </p>
            </div> */}
            <div className={theme.palette.mode === "light" ? LightStyles.item_invoice : DarkStyles.item_invoice}>
              <p><CallIcon /></p>
              <p>
                <div style={{ marginBottom: '.3rem' }}>شماره تلفن :</div>
                <div>{mobile}</div>
              </p>
            </div>
            <div className={theme.palette.mode === "light" ? LightStyles.item_invoice : DarkStyles.item_invoice}>
              <p><FingerIcon /></p>
              <p>
                <div style={{ marginBottom: '.3rem' }}>شماره / شناسه ملی :</div>
                <div>0024006464</div>
              </p>
            </div>
          </div>
          <hr />
          <div className={theme.palette.mode === "light" ? LightStyles.invoice_content : DarkStyles.invoice_content}>
            <h1>{fa["product"]}</h1>
            {cardProduct.map((i, index) => {

              // start fetch data total price
              const total_price = i.quantity * i.price;
              // start fetch data total price

              return (
                <Card key={i.id} sx={{ boxShadow: '0', borderRadius: '16px', p: 2, mb: 3 }}>
                  <div className={theme.palette.mode === "light" ? LightStyles.item : DarkStyles.item}>
                    <p>{fa["Name Product"]}</p>
                    <p>{i.value}</p>
                  </div>
                  <div className={theme.palette.mode === "light" ? LightStyles.item : DarkStyles.item}>
                    <p>{fa["count order"]}</p>
                    <p>{i.quantity} عدد</p>
                  </div>
                  <div className={theme.palette.mode === "light" ? LightStyles.item : DarkStyles.item}>
                    <p>{fa["discount"]}</p>
                    <p>0 {fa["Toman"]}</p>
                  </div>
                  <div className={theme.palette.mode === "light" ? LightStyles.item : DarkStyles.item}>
                    <p>{fa["total"]}</p>
                    <p>{total_price.toLocaleString()} {fa["Toman"]}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>


        <Card sx={{ boxShadow: 0, borderRadius: '15px', p: 2 }}>
          <div className={theme.palette.mode === "light" ? LightStyles.invoice : DarkStyles.invoice}>
            {/* <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
                <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["price products"]}</p>
                <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>150/000 {fa["Toman"]}</p>
              </div> */}
            <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
              <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["tax"]}</p>
              <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>{tax.toLocaleString()} {fa["Toman"]}</p>
            </div>
            <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
              <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["shipping cost"]}</p>
              <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>رایگان</p>
            </div>
            <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
              <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["discount"]}</p>
              <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>0 {fa["Toman"]}</p>
            </div>
            <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
              <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["Total amount"]}</p>
              <p className={theme.palette.mode === "light" ? LightStyles.price_success : DarkStyles.price_success}>{price_product.toLocaleString()} {fa["Toman"]}</p>
            </div>
            <hr style={{ borderWidth: '.1px', borderColor: '#ffffff4d' }} />
            <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
              <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["pay"]}</p>
              <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>{total_price.toLocaleString()} {fa["Toman"]}</p>
            </div>
          </div>
        </Card>
        <div className={theme.palette.mode === "light" ? LightStyles.title_address : DarkStyles.title_address}>
          <p>{fa["Choose a payment method"]}</p>
          <Card sx={{ boxShadow: 0, borderRadius: '15px', p: 2 }}>
            <div className={theme.palette.mode === "light" ? LightStyles.content_address : DarkStyles.content_address}>
              <LazyLoadImage effect="blur" src="/image/pay.png" alt="" />
              {/* <PaysIcon/> */}
              <label htmlFor="sendProduct" className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                <h1 style={{ marginLeft: '5rem' }}>پرداخت اینترنتی</h1>
                <p>پرداخت آنلاین با تمامی کارت‌های بانکی</p>
              </label>
              <input id="sendProduct" type="radio" defaultChecked={checked} />
            </div>
          </Card>
        </div>
        <button onClick={handlerPay} className={theme.palette.mode === "light" ? LightStyles.btn_card : DarkStyles.btn_card}><span>{fa["Payment and order finalization"]}</span></button>
      </Box>
    </FadeTransform>
  )
}

