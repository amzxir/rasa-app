import React, { useContext, useState } from "react";
import { Box, Card, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import ColorModeContext from "../../../../../context/color-mode-context";
import LightStyles from "../../../../../assets/sass/light/market/shopping.module.scss";
import DarkStyles from "../../../../../assets/sass/dark/market/shopping.module.scss";
import fa from "../../../../../lang/fa.json";
import PinIcon from "../../../../../assets/svg/pin";
import UnionIcon from "../../../../../assets/svg/Union";
import SendProIcon from "../../../../../assets/svg/sendpro";

export default function Shopping() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode, cardProduct , address } = useContext(ColorModeContext);
  // end function darkmode

  // start state checked input
  const [checked, setChecked] = useState(true);
  // end state checked input

  // start function total state product 
  const price_product = cardProduct?.map(item => item.price * item.quantity).reduce((a, b) => { return a + b }, 0)
  const tax = ( 9 / 100 ) * price_product ;
  const total_price = tax + price_product;
  const packing = 46000
  // end function total state product 

  return (
    <FadeTransform in transformProps={{ exitTransform: 'translateX(-100px)' }}>
      <Box sx={{ mt: 5, mb: 5 }}>
        <div className={theme.palette.mode === "light" ? LightStyles.title_address : DarkStyles.title_address}>
          <p>{fa["Order delivery address"]}</p>
          {address.length !== 0 ? 
          
            address.map((i , index) => {
              return(
                <Card key={index} sx={{ boxShadow: 0, borderRadius: '15px', p: 2 }}>
                  <div className={theme.palette.mode === "light" ? LightStyles.content_address : DarkStyles.content_address}>
                    <PinIcon />
                    <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                      <h1>{i.receiver_name}</h1>
                      <p>{i?.adress?.slice(1,30)} ...</p>
                    </div>
                    <NavLink to={"/shop/add-address"} state={fa["Select address"]}>
                      <IconButton>
                        <UnionIcon />
                      </IconButton>
                    </NavLink>
                  </div>
                </Card>
              )
            })
            :
            <Card sx={{ boxShadow: 0, borderRadius: '15px', p: 2 }}>
              <div className={theme.palette.mode === "light" ? LightStyles.content_address : DarkStyles.content_address}>
                <PinIcon />
                <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                  <h1>اضافه کردن آدرس</h1>
                </div>
                <NavLink to={"/shop/add-address"} state={fa["Select address"]}>
                  <IconButton>
                    <UnionIcon />
                  </IconButton>
                </NavLink>
              </div>
            </Card>
          }
        </div>
        <div className={theme.palette.mode === "light" ? LightStyles.title_address : DarkStyles.title_address}>
          <p>{fa["Shipping method"]}</p>
          <Card sx={{ boxShadow: 0, borderRadius: '15px', p: 2 }}>
            <div className={theme.palette.mode === "light" ? LightStyles.content_address : DarkStyles.content_address}>
              <SendProIcon />
              <label htmlFor="sendProduct" className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                <h1 style={{ marginLeft: '5rem' }}>ارسال توسط رسادنت</h1>
                <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>رایگان</p>
              </label>
              <input id="sendProduct" type="radio" defaultChecked={checked} />
            </div>
          </Card>
        </div>
        <Card sx={{ boxShadow: 0, borderRadius: '15px', p: 2 }}>
          <div className={theme.palette.mode === "light" ? LightStyles.invoice : DarkStyles.invoice}>
            <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
              <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["tax"]}</p>
              <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>{tax.toLocaleString()} {fa["Toman"]}</p>
            </div>
            <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
              <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>بسته بندی</p>
              <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>{packing.toLocaleString()} {fa["Toman"]}</p>
            </div>
            <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
              <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["discount"]}</p>
              <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>{0}</p>
            </div>
            <hr style={{ borderWidth: '.1px', borderColor: '#ffffff4d' }} />
            <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
              <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["pTotal amountay"]}</p>
              <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>{total_price.toLocaleString()} {fa["Toman"]}</p>
            </div>
          </div>
          <NavLink to={"/shop/invoice"} state={fa["invoice"]} className={theme.palette.mode === "light" ? LightStyles.btn_card : DarkStyles.btn_card}><span>{fa["Order"]}</span></NavLink>
        </Card>
      </Box>
    </FadeTransform>
  );
}
