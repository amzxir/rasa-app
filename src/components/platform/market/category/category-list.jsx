import React , { useContext, useState } from "react";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import LightStyles from "../../../../assets/sass/light/market/category-list.module.scss";
import DarkStyles from "../../../../assets/sass/dark/market/category-list.module.scss";
import ColorModeContext from "../../../../context/color-mode-context";


export default function CategoryList() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode

  // start fetch data category list 
  const categories = [
    {id:1 , name:'نام دسته' , img:'/image/cycling.png'},
    {id:2 , name:'نام دسته' , img:'/image/cycling.png'},
    {id:3 , name:'نام دسته' , img:'/image/cycling.png'},
    {id:4 , name:'نام دسته' , img:'/image/cycling.png'},
    {id:5 , name:'نام دسته' , img:'/image/cycling.png'},
    {id:6 , name:'نام دسته' , img:'/image/cycling.png'},
    {id:7 , name:'نام دسته' , img:'/image/cycling.png'},
    {id:8 , name:'نام دسته' , img:'/image/cycling.png'},
    {id:9 , name:'نام دسته' , img:'/image/cycling.png'},
    {id:10 , name:'نام دسته' , img:'/image/cycling.png'},
    {id:11 , name:'نام دسته' , img:'/image/cycling.png'},
    {id:12 , name:'نام دسته' , img:'/image/cycling.png'},

  ]
  const [category , setCategory] = useState(categories);
  // end fetch data category list 


  return (
    <FadeTransform in transformProps={{exitTransform: 'translateX(-100px)'}} fadeProps={{enterOpacity: 0.85,}}>
      <Box sx={{ mt: 5, mb: 5 }}>
        <Grid sx={{display:'flex' , justifyContent:'center' , alignItems:'center'}} container spacing={2}>
          {category.map((i , index) => {
              return(
                  <Grid item key={i.id} xs={3}>
                      <NavLink className={theme.palette.mode === "light" ? LightStyles.category_list : DarkStyles.category_list}>
                          <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                              <img src={i.img} alt="" />
                          </div>
                          <h1>{i.name}</h1>
                      </NavLink>
                  </Grid>
              )
          })}
        </Grid>
      </Box>
    </FadeTransform>
  );
}
