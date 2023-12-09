import React, { useContext, useState } from 'react'
import { Box, Card, IconButton } from '@mui/material'
import { useTheme } from "@mui/material/styles";
import { FadeTransform } from "react-animation-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { toast } from 'react-toastify';
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






export default function Pay() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode, cardProduct, token, spinner, setSpinner } = useContext(ColorModeContext);
  // end function darkmode

  // start state checked input
  const [checked, setChecked] = useState(true);
  // end state checked input

  // start function and fetch data card product for invoice
  const mobile = localStorage.getItem("mobile");
  const user_id = localStorage.getItem("user_id");
  const price_product = cardProduct?.map(item => item.price * item.quantity).reduce((a, b) => { return a + b }, 0)
  const tax = (9 / 100) * price_product;
  const total_price = tax + price_product;
  const packing = 46000

  // end function and fetch data card product for invoice

  // start fetch product card for add to card

  const remove_item_arr = cardProduct.map((i) => {
    return delete i.updated_at && delete i.inventory && delete i.product_brand && delete i.selectable && delete i.stock && delete i.created_at && delete i.type_order && delete i.image
  })

  const card_pay = cardProduct.map((item, i) => ({ ...item, discount: 0, discount_price: 0, product_price: 0, user_id: user_id }));

  const arr = card_pay.map((i) => {
    return Object.values(i).map((val, index) => {
      return val
    })
  })

  const cards = arr.map(({
    0: id,
    1: peroperty_price,
    2: shop_id,
    3: count,
    4: peroperty,
    5: value,
    6: product_id,
    7: discount,
    8: discount_price,
    9: product_price,
    10: user_id,
    ...rest
  }) => ({
    user_id,
    product_id,
    product_price,
    peroperty_price,
    peroperty,
    value,
    count,
    discount_price,
    discount,
    shop_id,
    id,
    ...rest
  }));

  // console.log(cards);


  // const array = cards.map((i) => {
  //   return Object.values(i).map((val, index) => {
  //     return val
  //   })
  // })

  // console.log(array);

  const carts = cards.map(({ user_id, product_id, product_price,
    peroperty_price,
    peroperty,
    value,
    count,
    discount_price,
    discount,
    shop_id }) => `${user_id}_${product_id}_${product_price}_${peroperty_price}_${peroperty}_${value}_${count}_${discount_price}_${discount}_${shop_id} `);


  const handlerPay = async () => {
    setSpinner(true)

    const address = localStorage.getItem("address_id")

    const config = {
      headers: { Authorization: `Bearer ${token}`, "Access-Control-Allow-Origin": "*" }
    }

    const bodyParameters = {
      key: "value",
      mobile: mobile,
      carts: carts
    }

    const invoice = {
      key: "value",
      mobile: mobile,
      address_id: address,
      price: total_price
    }

    await axios.post("https://rasadent.reshe.ir/api/CreateCart", bodyParameters, config)
      .then(
        responseA =>
          Promise.all([
            responseA,
            axios.post("https://rasadent.reshe.ir/api/CreateInvoice", invoice, config)
          ])
      )
      .then(
        ([responseA, responseB]) => {
          localStorage.setItem("invoice_number", responseB.data.invoice_number)
          if (responseA.data.status_code === 200 && responseB.data.status_code === 200) {
            const invoice_number = localStorage.getItem("invoice_number");
            console.log(responseA, responseB);

            window.location.assign(`https://rasadent.reshe.ir/pay_invoice_application/${invoice_number}`, '_blank', 'noopener,noreferrer');
            setSpinner(false)
          }
          // console.log(responseA, responseB);
        })
      .catch((err) => {
        setSpinner(false)
        console.log(err.message);
      });

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
        <button onClick={handlerPay} className={theme.palette.mode === "light" ? LightStyles.btn_card : DarkStyles.btn_card}><span>{fa["Payment and order finalization"]} {spinner ? <div className="lds-dual-ring"></div> : ''}</span></button>
      </Box>
    </FadeTransform>
  )
}

