import React, { useContext, useState } from "react";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import LightStyles from "../../../../assets/sass/light/manage-shop.module.scss";
import DarkStyles from "../../../../assets/sass/dark/manage-shop.module.scss";
import fa from "../../../../lang/fa.json";
import ColorModeContext from "../../../../context/color-mode-context";
import ArrowSmallIcon from "../../../../assets/svg/arrow-small-left";
import LineChart from "../../../chart/line";
import LayoutIcon from "../../../../assets/svg/layout";
import LayersIcon from "../../../../assets/svg/layers";
import FingerIcon from "../../../../assets/svg/finger";
import BankIcon from "../../../../assets/svg/bank";
import ChartPieIcon from "../../../../assets/svg/chart-pie";
import BoxIcon from "../../../../assets/svg/box";
import TicketsIcon from "../../../../assets/svg/tickets";
import FilIcon from "../../../../assets/svg/fil";




export default function Statistics() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode

  // start fetch data card shop manage
  const CardProduct = [
    { id: 1, name: 'محصولات', link: '/profile/shop/products', icon: <LayoutIcon /> },
    { id: 2, name: 'سفارشات', link: '/profile/shop/orders', icon: <LayersIcon /> },
    { id: 3, name: 'احراز هویت', link: '/profile/shop/authentication', icon: <FingerIcon /> },
    { id: 4, name: 'شخصی سازی', link: '/profile/shop/personalization', icon: <FilIcon /> },
    { id: 5, name: 'اطلاعات بانکی', link: '/profile/shop/bank-information', icon: <BankIcon /> },
    { id: 6, name: 'گزارش مالی', link: '#', icon: <ChartPieIcon /> },
    { id: 7, name: 'آپلود مدارک', link: '/profile/shop/documents', icon: <BoxIcon /> },
    { id: 8, name: 'تخفیفات', link: '#', icon: <TicketsIcon /> },
  ]
  const [details, setDetails] = useState(CardProduct);
  // end fetch data card shop manage
  return (
    <FadeTransform in transformProps={{ exitTransform: 'translateX(-100px)' }}>
      <Box>
        <div className={theme.palette.mode === "light" ? LightStyles.card_chart : DarkStyles.card_chart}>
          <h1>درآمد شما در سال 1402</h1>
          <p>12,000</p>
          <LineChart />
        </div>
        <Grid container spacing={2}>
          {details.map((i, index) => {
            return (
              <Grid item key={i.id} xs={3}>
                <NavLink to={i.link} state={i.name} className={theme.palette.mode === "light" ? LightStyles.card_charts : DarkStyles.card_charts}>
                  <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                    {i.icon}
                    <p className={theme.palette.mode === "light" ? LightStyles.details : DarkStyles.details}>
                      <span>{i.name}</span>
                      <span><ArrowSmallIcon /></span>
                    </p>
                  </div>
                </NavLink>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </FadeTransform>
  );
}
