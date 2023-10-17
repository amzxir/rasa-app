import React, { useContext, useState } from "react";
import { Box, Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink, useNavigate } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import ColorModeContext from "../../../../../context/color-mode-context";
import LightStyles from "../../../../../assets/sass/light/market/add-address.module.scss";
import DarkStyles from "../../../../../assets/sass/dark/market/add-address.module.scss";
import fa from "../../../../../lang/fa.json";
import PinIcon from "../../../../../assets/svg/pin";


export default function Add() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode

  // start fetch use navigate
  const navigate = useNavigate();
  // end fetch use navigate

  // start fetch state address
  const address = [
    {id:1 , name:'خانه' , location:'حصارک بالا، خیابان آقا رضایی، خیابان هداوند، کوچه قلندری، از سمت راست درب سوم، پلاک 3'},
    {id:2 , name:'محل کارم' , location:'کرج ، جهانشهر ، بلوار استانداری ، روبروی استنداری ، مجتمع رفاهی میلاد ، خانه استارتاپ کرج'},
  ]
  const [add , setAdd] = useState(address)
  // end fetch state address

  return (
    <FadeTransform in transformProps={{exitTransform: 'translateX(-100px)'}} >
      <Box sx={{ mt:5 , mb:5 }}>
        {add.map((i , index)=> {
          return(
            <Card key={i.id} sx={{ boxShadow:0 , borderRadius:'15px' , p:2 , mb:4 }}>
              <div className={theme.palette.mode === "light" ? LightStyles.content_address : DarkStyles.content_address}>
                <PinIcon/>
                <label onClick={()=> navigate("/shop/shopping")} htmlFor={`add_address${i.id}`} className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                  <h1 style={{ marginLeft:'5rem' }}>{i.name}</h1>
                  <p>{i.location.slice(1,45)} ...</p>
                </label>
                <input onClick={()=> navigate("/shop/shopping")} name="add_address" id={`add_address${i.id}`} type="radio" />
              </div>
            </Card>
          )
        })}
        <NavLink to={"/shop/new-address"} state={fa["new address"]} className={theme.palette.mode === "light" ? LightStyles.btn_address : DarkStyles.btn_address}><span>{fa["add new address"]}</span></NavLink>
      </Box>
    </FadeTransform>
  )
}

