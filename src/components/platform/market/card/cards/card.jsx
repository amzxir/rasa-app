import React, { useContext, useState } from "react";
import { Box, Card, Grid , IconButton } from "@mui/material";
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
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode

  // start state product card
  const productCard = new Array(2).fill(null).map((p , i)=> ({
    id:i,
    name:`کامپوزیت سارمکو ${i}`,
    count:2,
    price:'120/000/000',
    img:'/image/card1.png',
  }));

  const [product , setProduct] = useState(productCard);

  // end state product card

  // start finction count product
  const stock = 10;
  let [count , setCount] = useState(1);

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
  // end finction count product

  // start fetch data and function delete
  const [isOpen , setIsOpen] = useState(false)
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

  return (
      <Box sx={{ mt: 5, mb: 5 }}>
        <Grid sx={{ mb:5 }} container spacing={2}>
          {product.map((i , index)=> {
            return(
              <Grid key={i.id} item xs={12}>
                <Card sx={{ boxShadow:0 , borderRadius:"15px" }}>
                  <div className={theme.palette.mode === "light" ? LightStyles.flexItem : DarkStyles.flexItem}>
                    <figure>
                      <img src={i.img} alt={i.name} />
                    </figure>
                    <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                      <h1 className={theme.palette.mode === "light" ? LightStyles.name_product : DarkStyles.name_product}>{i.name}</h1>
                      <div className={theme.palette.mode === "light" ? LightStyles.count_product : DarkStyles.count_product}>
                        <IconButton onClick={handelTotal}><AddIcon/></IconButton>
                        <span>{count}</span>
                        <IconButton onClick={handelSubtraction}><MinusIcon/></IconButton>
                      </div>
                      <div className={theme.palette.mode === "light" ? LightStyles.details_product : DarkStyles.details_product}>
                        <p className={theme.palette.mode === "light" ? LightStyles.price_product : DarkStyles.price_product}>{i.price}</p>
                        <IconButton onClick={() => setIsOpen(index)}><DeleteIcone/></IconButton>
                      </div>
                    </div>
                  </div>
                </Card>
                  <div onClick={()=> setIsOpen(false)} className={isOpen === index ? theme.palette.mode === "light" ? LightStyles.fade_open : DarkStyles.fade_open : theme.palette.mode === "light" ? LightStyles.fade_close : DarkStyles.fade_close}>
                  </div>
                  <div className={isOpen === index ? theme.palette.mode === "light" ? LightStyles.card_delete_open : DarkStyles.card_delete_open : theme.palette.mode === "light" ? LightStyles.card_delete_close : DarkStyles.card_delete_close}>
                    <h1 className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["Product removed from cart?"]}</h1>
                    <hr />
                    <Card className={theme.palette.mode === "light" ? LightStyles.card_pro : DarkStyles.card_pro}>
                      <div className={theme.palette.mode === "light" ? LightStyles.d_flex : DarkStyles.d_flex}>
                        <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                          <img src={i.img} alt={i.name} />
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                          <h2>{i.name}</h2>
                          <p>{i.price} <span>{fa["Toman"]}</span></p>
                        </div>
                      </div>
                    </Card>
                    <div className={theme.palette.mode === "light" ? LightStyles.d_flex_btn : DarkStyles.d_flex_btn}>
                      <button className={theme.palette.mode === "light" ? LightStyles.confirm : DarkStyles.confirm}>{fa["yes"]}</button>
                      <button onClick={()=> setIsOpen(false)} className={theme.palette.mode === "light" ? LightStyles.cancell : DarkStyles.cancell}>{fa["no"]}</button>
                    </div>
                  </div>
              </Grid>
            )
          })}
        </Grid>

        <Card sx={{ boxShadow:0 , borderRadius:'15px' , p:2 }}>
          <div className={theme.palette.mode === "light" ? LightStyles.formDiscount : DarkStyles.formDiscount}>
            <input value={input} onChange={handleChange} type="text" placeholder={fa["enter discount code"]} />
            <button  style={{ background: color ? color : "" }} disabled={input.length === 10}><span>{fa["submit"]}</span></button>
          </div>
          <div className={theme.palette.mode === "light" ? LightStyles.invoice : DarkStyles.invoice}>
            <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
              <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["price products"]}</p>
              <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>150/000 {fa["Toman"]}</p>
            </div>
            <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
              <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["tax"]}</p>
              <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>150/00 {fa["Toman"]}</p>
            </div>
            <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
              <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["shipping cost"]}</p>
              <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>100/00 {fa["Toman"]}</p>
            </div>
            <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
              <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["discount"]}</p>
              <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>500 {fa["Toman"]}</p>
            </div>
            {/* <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
              <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["Your profit from the purchase"]}</p>
              <p className={theme.palette.mode === "light" ? LightStyles.price_red : DarkStyles.price_red}>150/000 {fa["Toman"]}</p>
            </div> */}
            <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
              <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["Total amount"]}</p>
              <p className={theme.palette.mode === "light" ? LightStyles.price_success : DarkStyles.price_success}>150/000 {fa["Toman"]}</p>
            </div>
          </div>
          <NavLink to={"/shop/shopping"} state={fa["Time and method of sending"]} className={theme.palette.mode === "light" ? LightStyles.btn_card : DarkStyles.btn_card}><span>{fa["Order"]}</span></NavLink>
        </Card>


      </Box>
  );
}
