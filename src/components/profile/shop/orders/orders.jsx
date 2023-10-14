import React, { useContext, useState, lazy, Suspense } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LightStyles from "../../../../assets/sass/light/manage-shop.module.scss";
import DarkStyles from "../../../../assets/sass/dark/manage-shop.module.scss";
import fa from "../../../../lang/fa.json";
import ColorModeContext from "../../../../context/color-mode-context";

const All = lazy(() => import("./all/all"));
const Review = lazy(() => import("./review/review"));
const Complete = lazy(() => import("./complete/complete"));
const Cancell = lazy(() => import("./cancell/cancell"));



export default function Orders() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmodes
    // start and function state nav
    const [nav, setNav] = useState(<Suspense fallback={<div>loading ...</div>}><All/></Suspense>);
    const [navItem, setNavItem] = useState(1);

    const handelCompoentFirst = () => {
        setNav(<Suspense fallback={<div>loading ...</div>}><All/></Suspense>)
        setNavItem(1)
    }

    const handelCompoentSecend = () => {
        setNav(<Suspense fallback={<div>Loading</div>}><Review/></Suspense>)
        setNavItem(2)
    }

    const handelCompoentThird = () => {
        setNav(<Suspense fallback={<div>Loading</div>}><Complete/></Suspense>)
        setNavItem(3)
    }

    const handelCompoentFourth = () => {
        setNav(<Suspense fallback={<div>Loading</div>}><Cancell/></Suspense>)
        setNavItem(4)
      }

    // end and function state nav
    return (
        <Box sx={{ mt: 5, mb: 5 }}>
            <div className={theme.palette.mode === "light" ? LightStyles.navs : DarkStyles.navs}>
                <a style={{ color: navItem === 1 ? '#008F06' : '' }} onClick={handelCompoentFirst}><span className="span_bottom" style={{ borderBottom: navItem === 1 ? '2px solid #008F06' : '' }}></span>همه</a>
                <a style={{ color: navItem === 2 ? '#8608E9' : '' }} onClick={handelCompoentSecend}><span className="span_bottom" style={{ borderBottom: navItem === 2 ? '2px solid #8608E9' : '' }}></span>پردازش و بررسی</a>
                <a style={{ color: navItem === 3 ? '#008F06' : '' }} onClick={handelCompoentThird}><span className="span_bottom" style={{ borderBottom: navItem === 3 ? '2px solid #008F06' : '' }}></span>تکمیل و ارسال</a>
                <a style={{ color: navItem === 4 ? '#FF3030' : '' }} onClick={handelCompoentFourth}><span className="span_bottom" style={{ borderBottom: navItem === 4 ? '2px solid #FF3030' : '' }}></span>لغو شده</a>
            </div>
            {nav}
        </Box>
    )
}

