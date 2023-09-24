import React , { useContext , useState } from 'react'
import { Box , Card , IconButton } from '@mui/material'
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import ColorModeContext from '../../../../../context/color-mode-context';
import LightStyles from "../../../../../assets/sass/light/market/pay.module.scss";
import DarkStyles from "../../../../../assets/sass/dark/market/pay.module.scss";
import fa from "../../../../../lang/fa.json";
import PinIcon from "../../../../../assets/svg/pin";
import UnionIcon from "../../../../../assets/svg/Union";
import SendProIcon from "../../../../../assets/svg/sendpro";
import PaysIcon from '../../../../../assets/svg/pays';



export default function Pay() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode

  // start state checked input
  const [checked, setChecked] = useState(true);
  // end state checked input


  return (
    <FadeTransform in transformProps={{exitTransform: 'translateX(-100px)'}} fadeProps={{enterOpacity: 0.85,}}>
      <Box sx={{ mt:5 , mb:5 }}>
        <div className={theme.palette.mode === "light" ? LightStyles.title_address : DarkStyles.title_address}>
          <p>{fa["Choose a payment method"]}</p>
          <Card sx={{ boxShadow:0 , borderRadius:'15px' , p:2 }}>
            <div className={theme.palette.mode === "light" ? LightStyles.content_address : DarkStyles.content_address}>
              <PaysIcon/>
              <label htmlFor="sendProduct" className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                <h1 style={{ marginLeft:'5rem' }}>پرداخت اینترنتی</h1>
                <p>پرداخت آنلاین با تمامی کارت‌های بانکی</p>
              </label>
              <input id="sendProduct" type="radio" defaultChecked={checked} />
            </div>
          </Card>
        </div>
        <Card sx={{ boxShadow:0 , borderRadius:'15px' , p:2 }}>
          <div className={theme.palette.mode === "light" ? LightStyles.invoice : DarkStyles.invoice}>
              <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
                <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["price products"]}</p>
                <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>150/000 {fa["Toman"]}</p>
              </div>
              {/* <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
                <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["Your profit from the purchase"]}</p>
                <p className={theme.palette.mode === "light" ? LightStyles.price_red : DarkStyles.price_red}>150/000 {fa["Toman"]}</p>
              </div> */}
              <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
                <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["total card"]}</p>
                <p className={theme.palette.mode === "light" ? LightStyles.price_success : DarkStyles.price_success}>150/000 {fa["Toman"]}</p>
              </div>
              <hr style={{ borderWidth:'.1px' , borderColor:'#ffffff4d' }} />
              <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
                <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["pay"]}</p>
                <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>150/000 {fa["Toman"]}</p>
              </div>
          </div>
          <NavLink to={"/shop/pay/sucess"} state={fa["pay"]} className={theme.palette.mode === "light" ? LightStyles.btn_card : DarkStyles.btn_card}><span>{fa["pay"]}</span></NavLink>
        </Card>
      </Box>
    </FadeTransform>
  )
}

