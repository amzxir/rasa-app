import React, { useContext , useState } from "react";
import { Box , Card , IconButton } from "@mui/material";
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
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode

  // start state checked input
  const [checked, setChecked] = useState(true);
  // end state checked input
  
  
  return (
    <FadeTransform in transformProps={{exitTransform: 'translateX(-100px)'}}>
      <Box sx={{ mt: 5, mb: 5 }}>
        <div className={theme.palette.mode === "light" ? LightStyles.title_address : DarkStyles.title_address}>
          <p>{fa["Order delivery address"]}</p>
          <Card sx={{ boxShadow:0 , borderRadius:'15px' , p:2 }}>
            <div className={theme.palette.mode === "light" ? LightStyles.content_address : DarkStyles.content_address}>
              <PinIcon/>
              <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                <h1>منزل</h1>
                <p>حصارک بالا، خیابان آقا رضایی، خیابان هداوند ...</p>
              </div>
              <NavLink to={"/shop/add-address"} state={fa["Select address"]}>
                <IconButton>
                  <UnionIcon/>
                </IconButton>
              </NavLink>
            </div>
          </Card>
        </div>
        <div className={theme.palette.mode === "light" ? LightStyles.title_address : DarkStyles.title_address}>
          <p>{fa["Shipping method"]}</p>
          <Card sx={{ boxShadow:0 , borderRadius:'15px' , p:2 }}>
            <div className={theme.palette.mode === "light" ? LightStyles.content_address : DarkStyles.content_address}>
              <SendProIcon/>
              <label htmlFor="sendProduct" className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                <h1 style={{ marginLeft:'5rem' }}>ارسال توسط رسادنت</h1>
                <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>120/000 <small>{fa["Toman"]}</small></p>
              </label>
              <input id="sendProduct" type="radio" defaultChecked={checked} />
            </div>
          </Card>
        </div>
        <Card sx={{ boxShadow:0 , borderRadius:'15px' , p:2 }}>
          <div className={theme.palette.mode === "light" ? LightStyles.invoice : DarkStyles.invoice}>
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
              <hr style={{ borderWidth:'.1px' , borderColor:'#ffffff4d' }} />
              <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
                <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["pTotal amountay"]}</p>
                <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>150/000 {fa["Toman"]}</p>
              </div>
          </div>
          <NavLink to={"/shop/invoice"} state={fa["invoice"]} className={theme.palette.mode === "light" ? LightStyles.btn_card : DarkStyles.btn_card}><span>{fa["Order"]}</span></NavLink>
        </Card>
      </Box>
    </FadeTransform>
  );
}
