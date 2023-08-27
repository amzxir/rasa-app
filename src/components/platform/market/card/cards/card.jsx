import React, { useContext, useState } from "react";
import { Box, Card, Grid , IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import LightStyles from "../../../../../assets/sass/light/market/card.module.scss";
import Darkstyles from "../../../../../assets/sass/dark/market/card.module.scss";
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
    name:`محصول شماره ${i}`,
    count:2,
    price:'120/000/000',
    img:'/image/card1.png',
  }));

  const [product , setProduct] = useState(productCard);

  // end state product card

  // start finction count product

  let [count , setCount] = useState(1);

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

  // end finction count product

  return (
    <Box sx={{ mt: 5, mb: 5 }}>
      <Grid sx={{ mb:5 }} container spacing={2}>
        {product.map((i , index)=> {
          return(
            <Grid key={i.id} item xs={12}>
              <Card sx={{ boxShadow:0 , borderRadius:"15px" }}>
                <div className={theme.palette.mode === "light" ? LightStyles.flexItem : Darkstyles.flexItem}>
                  <figure>
                    <img src={i.img} alt={i.name} />
                  </figure>
                  <div className={theme.palette.mode === "light" ? LightStyles.content : Darkstyles.content}>
                    <h1 className={theme.palette.mode === "light" ? LightStyles.name_product : Darkstyles.name_product}>{i.name}</h1>
                    <div className={theme.palette.mode === "light" ? LightStyles.count_product : Darkstyles.count_product}>
                      <IconButton onClick={handelTotal}><AddIcon/></IconButton>
                      <span>{i.count}</span>
                      <IconButton onClick={handelSubtraction}><MinusIcon/></IconButton>
                    </div>
                    <div className={theme.palette.mode === "light" ? LightStyles.details_product : Darkstyles.details_product}>
                      <p className={theme.palette.mode === "light" ? LightStyles.price_product : Darkstyles.price_product}>{i.price}</p>
                      <IconButton><DeleteIcone/></IconButton>
                    </div>
                  </div>
                </div>
              </Card>
            </Grid>
          )
        })}
      </Grid>

      <Card sx={{ boxShadow:0 , borderRadius:'15px' , p:2 }}>
        <div className={theme.palette.mode === "light" ? LightStyles.formDiscount : Darkstyles.formDiscount}>
          <input type="text" placeholder={fa["enter discount code"]} />
          <button><span>{fa["submit"]}</span></button>
        </div>
        <div className={theme.palette.mode === "light" ? LightStyles.invoice : Darkstyles.invoice}>
          <div className={theme.palette.mode === "light" ? LightStyles.total : Darkstyles.total}>
            <p className={theme.palette.mode === "light" ? LightStyles.title : Darkstyles.title}>{fa["price products"]}</p>
            <p className={theme.palette.mode === "light" ? LightStyles.price : Darkstyles.price}>150/000 {fa["Toman"]}</p>
          </div>
          <div className={theme.palette.mode === "light" ? LightStyles.total : Darkstyles.total}>
            <p className={theme.palette.mode === "light" ? LightStyles.title : Darkstyles.title}>{fa["Your profit from the purchase"]}</p>
            <p className={theme.palette.mode === "light" ? LightStyles.price_red : Darkstyles.price_red}>150/000 {fa["Toman"]}</p>
          </div>
          <div className={theme.palette.mode === "light" ? LightStyles.total : Darkstyles.total}>
            <p className={theme.palette.mode === "light" ? LightStyles.title : Darkstyles.title}>{fa["price products"]}</p>
            <p className={theme.palette.mode === "light" ? LightStyles.price_success : Darkstyles.price_success}>150/000 {fa["Toman"]}</p>
          </div>
        </div>
        <NavLink to={"/shop/shopping"} state={fa["Time and method of sending"]} className={theme.palette.mode === "light" ? LightStyles.btn_card : Darkstyles.btn_card}><span>{fa["Order"]}</span></NavLink>
      </Card>
    </Box>
  );
}
