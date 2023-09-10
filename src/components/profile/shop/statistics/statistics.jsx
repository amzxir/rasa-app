import React , { useContext, useState } from "react";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LightStyles from "../../../../assets/sass/light/manage-shop.module.scss";
import DarkStyles from "../../../../assets/sass/dark/manage-shop.module.scss";
import fa from "../../../../lang/fa.json";
import ColorModeContext from "../../../../context/color-mode-context";
import FiRrShopIcon from "../../../../assets/svg/fi-rr-shop";
import ShoppingCardIcon from "../../../../assets/svg/fi-rr-shopping-cart-check";
import SignInIcon from "../../../../assets/svg/fi-rr-sign-in-alt";


export default function Statistics() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode

  // start fetch data card shop manage
  const CardProduct = [
    {id:1 , name:fa["count products"] , count:25 , icon :<FiRrShopIcon/>},
    {id:2 , name:fa["count buy"] , count:25 , icon :<ShoppingCardIcon/>},
    {id:3 , name:fa["count back"] , count:25 , icon :<SignInIcon/>},
  ]
  const [details , setDetails] = useState(CardProduct);
  // end fetch data card shop manage
  return (
    <Box>
      <div className={theme.palette.mode === "light" ? LightStyles.card_chart : DarkStyles.card_chart}>
        <h1>درآمد شما در سال 1402</h1>
        <p>12,000</p>
      </div>
      <Grid container spacing={2}>
        {details.map((i , index)=> {
            return(
                <Grid key={i.id} item xs={4}>
                    <div className={theme.palette.mode === "light" ? LightStyles.card_charts : DarkStyles.card_charts}>
                        <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                            {i.icon}
                            <p className={theme.palette.mode === "light" ? LightStyles.number : DarkStyles.number}>{i.count}</p>
                            <p className={theme.palette.mode === "light" ? LightStyles.details : DarkStyles.details}>{i.name}</p>
                        </div>
                    </div>
                </Grid>
            )
        })}
      </Grid>
    </Box>
  );
}
