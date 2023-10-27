import React, { useContext, useEffect, useState } from "react";
import { Box, Card, Grid, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import LightStyles from "../../../../../assets/sass/light/market/card.module.scss";
import DarkStyles from "../../../../../assets/sass/dark/market/card.module.scss";
import ColorModeContext from "../../../../../context/color-mode-context";
import DeleteIcone from "../../../../../assets/svg/delete";
import AddIcon from "../../../../../assets/svg/add";
import MinusIcon from "../../../../../assets/svg/minus";
import fa from "../../../../../lang/fa.json";

export default function Cards() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode, cardProduct, setCardProduct } = useContext(ColorModeContext);
  // end function darkmode

  useEffect(() => { }, [cardProduct])


  // start fetch data and function delete
  const [isOpen, setIsOpen] = useState(false)
  // end fetch data and function delete 

  // start function and state discount
  const [input, setInput] = useState("");
  const [color, setColor] = useState("");

  let inputLength;
  const handleChange = (e) => {
    setInput(e.target.value);
    if (e.target.value.length === 10) {
      setColor(theme.palette.mode === "light" ? "#113D8D" : "#3282F9");
    }
    else if (e.target.value.length < 10) {
      setColor(theme.palette.mode === "light" ? "#D8D8D8" : "#222222");
    }
    else if (e.target.value.length > 10) {
      setColor(theme.palette.mode === "light" ? "#D8D8D8" : "#222222");
    }
  };
  // end function and state discount 

  // start function total state product 
  const price_product = cardProduct?.map(item => item.price * item.quantity).reduce((a, b) => { return a + b }, 0)
  // end function total state product 

  // start function delete product in card
  const handelDelete = (id) => {
    const newProduct = cardProduct?.filter((record) => record.id !== id);
    setCardProduct(newProduct)

  }
  // end function delete product in card



  // console.log(cardProduct)

  const increment = (id , stoke) => {
    const newQuantity = cardProduct.map(obj => {
      if (obj.id === id && obj.quantity < stoke) {
        return { ...obj, quantity: obj.quantity + 1 };
      }
      return obj;
    });
    setCardProduct(newQuantity);
  }

  const decrement = (id) => {
    const newQuantity = cardProduct.map(obj => {
      if (obj.id === id && obj.quantity > 1) {
        return { ...obj, quantity: obj.quantity - 1 };
      }
      return obj;
    });
    setCardProduct(newQuantity);
  }

  return (
    <Box sx={{ mt: 5, mb: 5 }}>
      <Grid sx={{ mb: 5 }} container spacing={2}>
        {cardProduct.length !== 0 ?
          cardProduct.map((i, index) => {

            // start fetch data total price
            const total_price = i.quantity * i.price;
            // start fetch data total price

            return (
              <Grid key={i.id} item xs={12}>
                <Card sx={{ boxShadow: 0, borderRadius: "15px" }}>
                  <div className={theme.palette.mode === "light" ? LightStyles.flexItem : DarkStyles.flexItem}>
                    {/* <figure>
                      <img src={i.img} alt={i.value} />
                    </figure> */}
                    <div style={{ marginRight: '2rem' }} className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                      <h1 className={theme.palette.mode === "light" ? LightStyles.name_product : DarkStyles.name_product}>{i.value}</h1>
                      <div className={theme.palette.mode === "light" ? LightStyles.count_product : DarkStyles.count_product}>
                        <IconButton onClick={() => increment(i.id , i.stock)}><AddIcon /></IconButton>
                        <span>{i.quantity}</span>
                        <IconButton onClick={() => decrement(i.id)}><MinusIcon /></IconButton>
                      </div>
                      <div className={theme.palette.mode === "light" ? LightStyles.details_product : DarkStyles.details_product}>
                        <p className={theme.palette.mode === "light" ? LightStyles.price_product : DarkStyles.price_product}>{total_price.toLocaleString()} {fa["Toman"]}</p>
                        <IconButton onClick={() => setIsOpen(index)}><DeleteIcone /></IconButton>
                      </div>
                    </div>
                  </div>
                </Card>
                <div onClick={() => setIsOpen(false)} className={isOpen === index ? theme.palette.mode === "light" ? LightStyles.fade_open : DarkStyles.fade_open : theme.palette.mode === "light" ? LightStyles.fade_close : DarkStyles.fade_close}>
                </div>
                <div className={isOpen === index ? theme.palette.mode === "light" ? LightStyles.card_delete_open : DarkStyles.card_delete_open : theme.palette.mode === "light" ? LightStyles.card_delete_close : DarkStyles.card_delete_close}>
                  <h1 className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["Product removed from cart?"]}</h1>
                  <hr />
                  <Card className={theme.palette.mode === "light" ? LightStyles.card_pro : DarkStyles.card_pro}>
                    <div className={theme.palette.mode === "light" ? LightStyles.d_flex : DarkStyles.d_flex}>
                      {/* <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                        <img src={i.img} alt={i.name} />
                      </div> */}
                      <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                        <h2>{i.value}</h2>
                        <p>{i.price.toLocaleString()} <span>{fa["Toman"]}</span></p>
                      </div>
                    </div>
                  </Card>
                  <div className={theme.palette.mode === "light" ? LightStyles.d_flex_btn : DarkStyles.d_flex_btn}>
                    <button onClick={() => handelDelete(i.id)} className={theme.palette.mode === "light" ? LightStyles.confirm : DarkStyles.confirm}>{fa["yes"]}</button>
                    <button onClick={() => setIsOpen(false)} className={theme.palette.mode === "light" ? LightStyles.cancell : DarkStyles.cancell}>{fa["no"]}</button>
                  </div>
                </div>
              </Grid>
            )
          })
          :
          <div className={theme.palette.mode === "light" ? LightStyles.not_found : DarkStyles.not_found}>
            <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
              <img src="/image/not-found.svg" alt="" />
            </div>
            <p>سبد خرید شما خالی است</p>
          </div>
        }
      </Grid>

      {cardProduct.length !== 0 ?
        <Card sx={{ boxShadow: 0, borderRadius: '15px', p: 2, position: 'sticky', bottom: '0' }}>
          <div className={theme.palette.mode === "light" ? LightStyles.formDiscount : DarkStyles.formDiscount}>
            <input value={input} onChange={handleChange} type="text" placeholder={fa["enter discount code"]} />
            <button style={{ background: color ? color : "" }} disabled={input.length === 10}><span>{fa["submit"]}</span></button>
          </div>
          <div className={theme.palette.mode === "light" ? LightStyles.invoice : DarkStyles.invoice}>
            <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
              <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["Number of items"]}</p>
              <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>{cardProduct.length} عدد</p>
            </div>
            <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
              <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["Total shopping cart"]}</p>
              <p className={theme.palette.mode === "light" ? LightStyles.price_success : DarkStyles.price_success}>{price_product.toLocaleString()} {fa["Toman"]}</p>
            </div>
          </div>
          <NavLink to={"/shop/shopping"} state={fa["Time and method of sending"]} className={theme.palette.mode === "light" ? LightStyles.btn_card : DarkStyles.btn_card}><span>{fa["Order"]}</span></NavLink>
        </Card>
        :
        <></>
      }


    </Box>
  );
}
