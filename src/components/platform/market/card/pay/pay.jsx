import React , { useContext , useState } from 'react'
import { Box , Card , IconButton } from '@mui/material'
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
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
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode

  // start state checked input
  const [checked, setChecked] = useState(true);
  // end state checked input


  return (
    <FadeTransform in transformProps={{exitTransform: 'translateX(-100px)'}} fadeProps={{enterOpacity: 0.85,}}>
      <Box sx={{ mt:5 , mb:5 }}>

        <div className={theme.palette.mode === "light" ? LightStyles.invoives : DarkStyles.invoives}>
          <div className={theme.palette.mode === "light" ? LightStyles.invoice_header : DarkStyles.invoice_header}>
            <div className={theme.palette.mode === "light" ? LightStyles.item_invoice : DarkStyles.item_invoice}>
              <p><CalendarIcon/></p>
              <p>
                <div style={{ marginBottom:'.3rem' }}>تاریخ :</div>
                <div>۱۴۰۲-۰۷-۰۷</div>
              </p>
            </div>
            <div className={theme.palette.mode === "light" ? LightStyles.item_invoice : DarkStyles.item_invoice}>
              <p><DocumentIcon/></p>
              <p>
                <div style={{ marginBottom:'.3rem' }}>شماره :</div>
                <div>Rasa۵۵۸۶۵۱۱۹</div>
              </p>
            </div>
            <div className={theme.palette.mode === "light" ? LightStyles.item_invoice : DarkStyles.item_invoice}>
              <p><CallIcon/></p>
              <p>
                <div style={{ marginBottom:'.3rem' }}>شماره تلفن :</div>
                <div>09199954356</div>
              </p>
            </div>
            <div className={theme.palette.mode === "light" ? LightStyles.item_invoice : DarkStyles.item_invoice}>
              <p><FingerIcon/></p>
              <p>
                <div style={{ marginBottom:'.3rem' }}>شماره / شناسه ملی :</div>
                <div>0024006464</div>
              </p>
            </div>
          </div>
          <hr />
          <div className={theme.palette.mode === "light" ? LightStyles.invoice_content : DarkStyles.invoice_content}>
            <h1>{fa["product"]}</h1>
            <Card sx={{ boxShadow:'0' , borderRadius:'16px' , p:2 , mb:3  }}>
              <div className={theme.palette.mode === "light" ? LightStyles.item : DarkStyles.item}>
                <p>{fa["Name Product"]}</p>
                <p>کامپوزیت_سارمکو,رنگ A2</p>
              </div>
              <div className={theme.palette.mode === "light" ? LightStyles.item : DarkStyles.item}>
                <p>{fa["count order"]}</p>
                <p>۱۴ عدد</p>
              </div>
              <div className={theme.palette.mode === "light" ? LightStyles.item : DarkStyles.item}>
                <p>{fa["discount"]}</p>
                <p>0 {fa["Toman"]}</p>
              </div>
              <div className={theme.palette.mode === "light" ? LightStyles.item : DarkStyles.item}>
                <p>{fa["total"]}</p>
                <p>120/000/000 {fa["Toman"]}</p>
              </div>
            </Card>
            <Card sx={{ boxShadow:'0' , borderRadius:'16px' , p:2 , mb:3  }}>
              <div className={theme.palette.mode === "light" ? LightStyles.item : DarkStyles.item}>
                <p>{fa["Name Product"]}</p>
                <p>کامپوزیت_سارمکو,رنگ A2</p>
              </div>
              <div className={theme.palette.mode === "light" ? LightStyles.item : DarkStyles.item}>
                <p>{fa["count order"]}</p>
                <p>۱۴ عدد</p>
              </div>
              <div className={theme.palette.mode === "light" ? LightStyles.item : DarkStyles.item}>
                <p>{fa["discount"]}</p>
                <p>0 {fa["Toman"]}</p>
              </div>
              <div className={theme.palette.mode === "light" ? LightStyles.item : DarkStyles.item}>
                <p>{fa["total"]}</p>
                <p>120/000/000 {fa["Toman"]}</p>
              </div>
            </Card>
          </div>
        </div>


        <Card sx={{ boxShadow:0 , borderRadius:'15px' , p:2 }}>
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
              <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
                <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["Total amount"]}</p>
                <p className={theme.palette.mode === "light" ? LightStyles.price_success : DarkStyles.price_success}>150/000 {fa["Toman"]}</p>
              </div>
              <hr style={{ borderWidth:'.1px' , borderColor:'#ffffff4d' }} />
              <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
                <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["pay"]}</p>
                <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>150/000 {fa["Toman"]}</p>
              </div>
          </div>
        </Card>
        <div className={theme.palette.mode === "light" ? LightStyles.title_address : DarkStyles.title_address}>
          <p>{fa["Choose a payment method"]}</p>
          <Card sx={{ boxShadow:0 , borderRadius:'15px' , p:2 }}>
            <div className={theme.palette.mode === "light" ? LightStyles.content_address : DarkStyles.content_address}>
              <img src="/image/pay.png" alt="" />
              {/* <PaysIcon/> */}
              <label htmlFor="sendProduct" className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                <h1 style={{ marginLeft:'5rem' }}>پرداخت اینترنتی</h1>
                <p>پرداخت آنلاین با تمامی کارت‌های بانکی</p>
              </label>
              <input id="sendProduct" type="radio" defaultChecked={checked} />
            </div>
          </Card>
        </div>
        <NavLink to={"/shop/pay/sucess"} state={fa["pay"]} className={theme.palette.mode === "light" ? LightStyles.btn_card : DarkStyles.btn_card}><span>{fa["Payment and order finalization"]}</span></NavLink>
      </Box>
    </FadeTransform>
  )
}

