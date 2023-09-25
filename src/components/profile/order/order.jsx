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


export default function Order() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function

  // start and function state nav
  const [nav , setNav] = useState(<Suspense fallback={<div>loading ...</div>}><DeliveryOrder/></Suspense>);
  const [navItem , setNavItem] = useState(1);

  const handelCompoentFirst = () => {
    setNav(<Suspense fallback={<div>loading ...</div>}><DeliveryOrder/></Suspense>)
    setNavItem(1)
  }

  const handelCompoentSecend = () => {
    setNav(<Suspense fallback={<div>Loading</div>}><CancelledOrder/></Suspense>)
    setNavItem(2)
  }

  const handelCompoentThird = () => {
    setNav(<Suspense fallback={<div>Loading</div>}><Returned/></Suspense>)
    setNavItem(3)
  }

  // end and function state nav


  return (
    <FadeTransform in transformProps={{exitTransform: 'translateX(-100px)'}} fadeProps={{enterOpacity: 0.85,}}>
      <Box sx={{ mt: 5, mb: 5 }}>
        <div className={theme.palette.mode === "light" ? LightStyles.navs : DarkStyles.navs}>
          <a style={{ color:navItem === 1  ? '#113D8D' : '' }} onClick={handelCompoentFirst}><span className="span_bottom" style={{ borderBottom:navItem === 1  ? '2px solid #113D8D' : '' }}></span>{fa["Current and delivery"]}</a>
          <a style={{ color:navItem === 2 ? '#113D8D' : '' }} onClick={handelCompoentSecend}><span className="span_bottom" style={{ borderBottom:navItem === 2  ? '2px solid #113D8D' : '' }}></span>{fa["Returned"]}</a>
          <a style={{ color:navItem === 3 ? '#113D8D' : '' }} onClick={handelCompoentThird}><span className="span_bottom" style={{ borderBottom:navItem === 3  ? '2px solid #113D8D' : '' }}></span>{fa["Cancelled"]}</a>
        </div>
        {nav}
      </Box>
    </FadeTransform>
  );
}
