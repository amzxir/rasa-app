import React, { useContext , useState } from "react";
import { Box , Grid , Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import LightStyles from "../../../../assets/sass/light/order.module.scss";
import DarkStyles from "../../../../assets/sass/dark/order.module.scss";
import fa from "../../../../lang/fa.json";
import ColorModeContext from "../../../../context/color-mode-context";


export default function Returned({ productOrder , sendInvoice }) {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function
  return (
    <FadeTransform in transformProps={{exitTransform: 'translateX(-100px)'}} fadeProps={{enterOpacity: 0.85,}}>
        <Box sx={{ mt: 5, mb: 5 }}>
            {productOrder.length >= 1 ?
                <Grid container>
                    {productOrder.map((i , index)=> {
                        return(
                            <Grid item key={i.id} style={{ marginBottom:'1rem' }} xs={12}>
                                <Card sx={{ boxShadow:'none' , borderRadius:'15px' , p:2 }}>
                                    <div className={theme.palette.mode === "light" ? LightStyles.delive : DarkStyles.delive}>
                                        <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                                            <h1>{i.name}</h1>
                                            <p className={theme.palette.mode === "light" ? LightStyles.traking_code : DarkStyles.traking_code}><span>{fa["tracking code"]}</span><span>{i.trakingCode}</span></p>
                                            <NavLink onClick={() => sendInvoice(i)} to={`/profile/order/details/${i.name}`} state={fa["details order"]} className={theme.palette.mode === "light" ? LightStyles.btn_order : DarkStyles.btn_order}><span>{fa["details order"]}</span></NavLink>
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
                :
                <div className={theme.palette.mode === "light" ? LightStyles.element_not_found : DarkStyles.element_not_found}>
                    <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                        <img src="/image/not.svg" alt="" />
                    </div>
                    <h1>{fa["Order not cancelled"]}</h1>
                </div>
            }
        </Box>
    </FadeTransform>
  );
}
