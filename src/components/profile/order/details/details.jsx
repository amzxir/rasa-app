import React, { useContext, useState } from "react";
import { Box , Grid , Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LightStyles from "../../../../assets/sass/light/order.module.scss";
import DarkStyles from "../../../../assets/sass/dark/order.module.scss";
import ColorModeContext from "../../../../context/color-mode-context";
import fa from "../../../../lang/fa.json";
import CloseBoxIcon from "../../../../assets/svg/close-box";
import CheckIcon from "../../../../assets/svg/check";
import CarIcon from "../../../../assets/svg/car";
import PersonIcon from "../../../../assets/svg/person";
import OpenBoxIcon from "../../../../assets/svg/open-box";
import CarBigIcon from "../../../../assets/svg/car-big";

export default function Details() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function

  // start fetch array product details
  const ProductDetails = new Array(1).fill(null).map((i ,  p) => ({
    id:`${p}`,
    name:`کامپوزیت سارمکو ${p}`,
    price:`1${p}100`,
    url_img:'/image/order.png',
  }))
  const [product , setProduct] = useState(ProductDetails);
  // end fetch array product details 
  return (
    <Box sx={{ mt: 5, mb: 5 }}>
        <Grid container>
          {product.map((i , index)=> {
            return(
              <Grid key={i.id} style={{ marginBottom:'1rem' }} item xs={12}>
                  <Card sx={{ boxShadow:'none' , borderRadius:'15px' , p:2 }}>
                      <div className={theme.palette.mode === "light" ? LightStyles.delive : DarkStyles.delive}>
                          <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                              <h1>{i.name}</h1>
                              <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}><span>{i.price}</span><span>{fa["Toman"]}</span></p>
                          </div>
                          <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                              <img width="120" height="120" src={i.url_img} alt="" />
                          </div>
                      </div>
                  </Card>
              </Grid>
            )
          })}
        </Grid>

        <ul className="progressbar">
          <li className="active">
            <div><OpenBoxIcon/></div>
            <div className={theme.palette.mode === "light" ? LightStyles.check : DarkStyles.check}><CheckIcon/></div>
          </li>
          <li>
            <div><PersonIcon/></div>
            <div className={theme.palette.mode === "light" ? LightStyles.check : DarkStyles.check}><CheckIcon/></div>
          </li>
          <li>
            <div><CarIcon/></div>
            <div className={theme.palette.mode === "light" ? LightStyles.check : DarkStyles.check}><CheckIcon/></div>
          </li>
          <li>
            <div><CloseBoxIcon/></div>
            <div className={theme.palette.mode === "light" ? LightStyles.check : DarkStyles.check}><CheckIcon/></div>
          </li>
        </ul>
        <div className={theme.palette.mode === "light" ? LightStyles.content_send : DarkStyles.content_send}>
          <h1 className={theme.palette.mode === "light" ? LightStyles.title_send : DarkStyles.title_send}>{fa["Delivery to the customer"]}</h1>
        </div>
        <hr />
        <div className={theme.palette.mode === "light" ? LightStyles.content_title : DarkStyles.content_title}>
          <CarBigIcon/>
          <span>{fa["send normal"]}</span>
        </div>
        <ul className={theme.palette.mode === "light" ? LightStyles.details_send : DarkStyles.details_send}>
          <li className={theme.palette.mode === "light" ? LightStyles.details_items : DarkStyles.details_items}>
            <p>{fa["Order tracking code"]} : <span>1283881</span></p>
            <p>{fa["Order history submit"]} : <span>1402/2/3</span></p>
          </li>
          <li className={theme.palette.mode === "light" ? LightStyles.details_items : DarkStyles.details_items}>
            <p>{fa["Transferee"]} : <span>پویا رستمی</span></p>
            <p>{fa["Delivery time"]} : <span>1402/2/3</span></p>
          </li>
          <li className={theme.palette.mode === "light" ? LightStyles.details_items : DarkStyles.details_items}>
            <p>{fa["Product Price"]} : <span>1283881</span></p>
            <p>{fa["Your profit from the purchase"]} : <span>120/222/000</span></p>
          </li>
          <li className={theme.palette.mode === "light" ? LightStyles.details_items : DarkStyles.details_items}>
            <p>{fa["shipping costs"]} </p>
            <p>{fa["shipping cost"]} : <span>320/000</span></p>
          </li>
          
        </ul>
 
    </Box>
  );
}
