import React , { useContext, useState } from "react";
import { Box, Card, Grid, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import LightStyles from "../../../../assets/sass/light/manage-shop.module.scss";
import DarkStyles from "../../../../assets/sass/dark/manage-shop.module.scss";
import fa from "../../../../lang/fa.json";
import ColorModeContext from "../../../../context/color-mode-context";
import EyeIcon from "../../../../assets/svg/eye";
import PencilIcon from "../../../../assets/svg/pencil";

export default function productShop() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  // start fetch data your product
  const YourProduct = [
    {id:1 , img:'/image/order.png' , name:'کامپوزیت سارمکو 1' , count:45 , status:'درانتظار تایید' , price:'120/000' , path_edit:'#' , path_see:'#'},
    {id:2 , img:'/image/order.png' , name:'کامپوزیت سارمکو 2' , count:45 , status:'درانتظار تایید' , price:'140/000' , path_edit:'#' , path_see:'#'},
    {id:3 , img:'/image/order.png' , name:'کامپوزیت سارمکو 3' , count:45 , status:'درانتظار تایید' , price:'150/000' , path_edit:'#' , path_see:'#'},
  ]
  const [product , setProduct] = useState(YourProduct);
  // end fetch data your product
  return (
    <Box>
        <Grid sx={{ mb:4 }} container>
            <Grid item xs={6}>
                <NavLink to={"/profile/shop/manage/create-product"} state={fa["Create Product"]} className={theme.palette.mode === "light" ? LightStyles.btn_create_product : DarkStyles.btn_create_product}><span>{fa["Create New Product"]}</span></NavLink>
            </Grid>
        </Grid>
        {product.map((i , index)=> {
            return(
                <Card key={i.id} className={theme.palette.mode === "light" ? LightStyles.card_product : DarkStyles.card_product}>
                    <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                        <img src={i.img} alt="" />
                    </div>
                    <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                        <h1>{i.name}</h1>
                        <p><span className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["Count Product"]}:</span><span className={theme.palette.mode === "light" ? LightStyles.counts : DarkStyles.counts}>{i.count} عدد</span></p>
                        <p><span className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["status"]}:</span><span className={theme.palette.mode === "light" ? LightStyles.status : DarkStyles.status}>{i.status}</span></p>
                        <p><span className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["price"]}:</span><span className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>{i.price} <small>{fa["Toman"]}</small></span></p>
                    </div>
                    <div className={theme.palette.mode === "light" ? LightStyles.action_card : DarkStyles.action_card}>
                        <NavLink><IconButton><EyeIcon/></IconButton></NavLink>
                        <NavLink><IconButton><PencilIcon/></IconButton></NavLink>
                    </div>
                </Card>
            )
        })}

    </Box>
  );
}
