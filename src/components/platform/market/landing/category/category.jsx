import React, { useContext, useState } from "react";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import LightStyles from "../../../../../assets/sass/light/market/categorys.module.scss";
import DarkStyles from "../../../../../assets/sass/dark/market/categorys.module.scss";
import ColorModeContext from "../../../../../context/color-mode-context";
import CategorysIcon from "../../../../../assets/svg/categorys";
import fa from "../../../../../lang/fa.json";

export default function Category() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode
    // start fetch data category list 
    const categories = [
        { id: 1, name: 'نام دسته', img: '/image/cycling.png' },
        { id: 2, name: 'نام دسته', img: '/image/cycling.png' },
        { id: 3, name: 'نام دسته', img: '/image/cycling.png' },
        { id: 4, name: 'نام دسته', img: '/image/cycling.png' },
        { id: 5, name: 'نام دسته', img: '/image/cycling.png' },
        { id: 6, name: 'نام دسته', img: '/image/cycling.png' },
        { id: 7, name: 'نام دسته', img: '/image/cycling.png' },
    ]
    const [category, setCategory] = useState(categories);
    // end fetch data category list 
    return (
        <Box sx={{ mt: 5, mb: 5 }}>
            <Grid sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }} container spacing={2}>
                {category.map((i, index) => {
                    return (
                        <Grid item key={i.id} xs={3}>
                            <NavLink to={`/shop/product-category/${i.name}`} className={theme.palette.mode === "light" ? LightStyles.category_list : DarkStyles.category_list}>
                                <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                                    <img src={i.img} alt="" />
                                </div>
                                <h1>{i.name}</h1>
                            </NavLink>
                        </Grid>
                    )
                })}
                <Grid item xs={3}>
                    <NavLink to={"/shop/category-list"} state={fa["category product"]} className={theme.palette.mode === "light" ? LightStyles.category_list : DarkStyles.category_list}>
                        <div className={theme.palette.mode === "light" ? LightStyles.bg_dark : DarkStyles.bg_dark}>
                            <CategorysIcon/>
                        </div>
                        <h1>{fa["more"]}</h1>
                    </NavLink>
                </Grid>
            </Grid>
        </Box>
    )
}

