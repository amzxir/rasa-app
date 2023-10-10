import React, { useContext, useState , lazy , Suspense } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FadeTransform } from "react-animation-components";
import LightStyles from "../../../assets/sass/light/order.module.scss";
import DarkStyles from "../../../assets/sass/dark/order.module.scss";
import fa from "../../../lang/fa.json";
import ColorModeContext from "../../../context/color-mode-context";
import Returned from "./returned/returned";


const DeliveryOrder = lazy(() => import("./delivery/delivery"));
const CancelledOrder = lazy(() => import("./cancelled/cancelled"));


export default function Order({ sendInvoice }) {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function

  // start fetch state in product order
  const orderProduct = [
    {id:1 , name:'شماره فاکتور 1' , trakingCode:'12378' , url_img:'/image/invo.svg' , cancelled:true , delivery:false , returne:false},
    {id:2 , name:'شماره فاکتور 2' , trakingCode:'34324' , url_img:'/image/invo.svg' , cancelled:false , delivery:true , returne:true},
    {id:3 , name:'شماره فاکتور 3' , trakingCode:'23456' , url_img:'/image/invo.svg' , cancelled:false , delivery:true , returne:true},
    {id:4 , name:'شماره فاکتور 3' , trakingCode:'12335' , url_img:'/image/invo.svg' , cancelled:false , delivery:true , returne:true},
  ]
  const [productOrder , setProductOrder] = useState(orderProduct)
  // start fetch state in product order

  // start and function state nav
  const [nav , setNav] = useState(<Suspense fallback={<div>loading ...</div>}><DeliveryOrder productOrder={productOrder} sendInvoice={sendInvoice}/></Suspense>);
  const [navItem , setNavItem] = useState(1);

  const handelCompoentFirst = () => {
    setNav(<Suspense fallback={<div>loading ...</div>}><DeliveryOrder productOrder={productOrder} sendInvoice={sendInvoice}/></Suspense>)
    setNavItem(1)
  }

  const handelCompoentSecend = () => {
    setNav(<Suspense fallback={<div>Loading</div>}><CancelledOrder productOrder={productOrder} sendInvoice={sendInvoice}/></Suspense>)
    setNavItem(2)
  }

  const handelCompoentThird = () => {
    setNav(<Suspense fallback={<div>Loading</div>}><Returned productOrder={productOrder} sendInvoice={sendInvoice}/></Suspense>)
    setNavItem(3)
  }

  // end and function state nav


  return (
    <FadeTransform in transformProps={{exitTransform: 'translateX(-100px)'}}>
      <Box sx={{ mt: 5, mb: 5 }}>
        <div className={theme.palette.mode === "light" ? LightStyles.navs : DarkStyles.navs}>
          <a style={{ color:navItem === 1  ? '#113D8D' : '' }} onClick={handelCompoentFirst}><span className="span_bottom" style={{ borderBottom:navItem === 1  ? '2px solid #113D8D' : '' }}></span>{fa["Current and delivery"]}</a>
          <a style={{ color:navItem === 2 ? '#EC5A1C' : '' }} onClick={handelCompoentSecend}><span className="span_bottom" style={{ borderBottom:navItem === 2  ? '2px solid #EC5A1C' : '' }}></span>{fa["Returned"]}</a>
          <a style={{ color:navItem === 3 ? '#8D0000' : '' }} onClick={handelCompoentThird}><span className="span_bottom" style={{ borderBottom:navItem === 3  ? '2px solid #8D0000' : '' }}></span>{fa["Cancelled"]}</a>
        </div>
        {nav}
      </Box>
    </FadeTransform>
  );
}
