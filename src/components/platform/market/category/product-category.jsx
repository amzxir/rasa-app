import React, { useContext, useState } from "react";
import { Box, Grid, Breadcrumbs } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import LightStyles from "../../../../assets/sass/light/market/product-category.module.scss";
import DarkStyles from "../../../../assets/sass/dark/market/product-category.module.scss";
import fa from "../../../../lang/fa.json";
import ColorModeContext from "../../../../context/color-mode-context";
import BookmarkIcon from "../../../../assets/svg/Bookmark";
import Search from "../search/search";


export default function ProductCategory() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode
    // start fetch data and function filter
    const [isOpen, setIsOpen] = useState(false)
    // end fetch data and function filter 
    return (
        <Box sx={{ mt: 5, mb: 5 }}>

            <Search setIsOpen={setIsOpen} />

            <Breadcrumbs className={theme.palette.mode === "light" ? LightStyles.breadcrumb : DarkStyles.breadcrumb}>
                <NavLink to={"/shop/category-list"} state={fa["category product"]}>{fa["category product"]}</NavLink>
                <p>کبالت</p>
            </Breadcrumbs>

            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div className={theme.palette.mode === "light" ? LightStyles.card_product : DarkStyles.card_product}>
                        <div className={theme.palette.mode === "light" ? LightStyles.card_img : DarkStyles.card_img}>
                            <NavLink to={"/shop/single-product"} state={"کامپوزیت سارمکو"} className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                                <img src={"/image/product-2.png"} alt="" />
                            </NavLink>
                            <div className={theme.palette.mode === "light" ? LightStyles.icon_wishlist : DarkStyles.icon_wishlist}>
                                <BookmarkIcon />
                            </div>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.shop : DarkStyles.shop}>
                            <span>{"فروشگاه مانگو"}</span>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.product_details : DarkStyles.product_details}>
                            <NavLink to={"/shop/single-product"} state={"کامپوزیت سارمکو"} className={theme.palette.mode === "light" ? LightStyles.name_product : DarkStyles.name_product}>
                                {"آلژینات بایر  کولزر"}
                            </NavLink>
                            <p className={theme.palette.mode === "light" ? LightStyles.price_product : DarkStyles.price_product} >
                                {"3000"} {fa["Toman"]}
                            </p>
                        </div>
                    </div>
                </Grid>
            </Grid>


            <div onClick={() => setIsOpen(false)} className={isOpen === true ? theme.palette.mode === "light" ? LightStyles.fade_open : DarkStyles.fade_open : theme.palette.mode === "light" ? LightStyles.fade_close : DarkStyles.fade_close}>
            </div>
            <div className={isOpen === true ? theme.palette.mode === "light" ? LightStyles.card_delete_open : DarkStyles.card_delete_open : theme.palette.mode === "light" ? LightStyles.card_delete_close : DarkStyles.card_delete_close}>
                <h1 className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["Categories filter"]}</h1>
                <hr />
                <div className={theme.palette.mode === "light" ? LightStyles.category_filter : DarkStyles.category_filter}>
                    <h1>{fa["category all"]}</h1>
                    <div className={theme.palette.mode === "light" ? LightStyles.input_relative : DarkStyles.input_relative}>
                        <input type="radio" value="High" name="flexRadioDefault0" id="category1" />
                        <label htmlFor="category1" className={theme.palette.mode === "light" ? LightStyles.label_absolute : DarkStyles.label_absolute}>
                            <p>اندو دانتیکس</p>
                        </label>
                    </div>
                    <div className={theme.palette.mode === "light" ? LightStyles.input_relative : DarkStyles.input_relative}>
                        <input type="radio" value="High" name="flexRadioDefault0" id="category2" />
                        <label htmlFor="category2" className={theme.palette.mode === "light" ? LightStyles.label_absolute : DarkStyles.label_absolute}>
                            <p>شستشو و ضد عفونی کننده کانال</p>
                        </label>
                    </div>
                    <div className={theme.palette.mode === "light" ? LightStyles.input_relative : DarkStyles.input_relative}>
                        <input type="radio" value="High" name="flexRadioDefault0" id="category3" />
                        <label htmlFor="category3" className={theme.palette.mode === "light" ? LightStyles.label_absolute : DarkStyles.label_absolute}>
                            <p>اسپریدر و پلاگر</p>
                        </label>
                    </div>
                    <div className={theme.palette.mode === "light" ? LightStyles.input_relative : DarkStyles.input_relative}>
                        <input type="radio" value="High" name="flexRadioDefault0" id="category4" />
                        <label htmlFor="category4" className={theme.palette.mode === "light" ? LightStyles.label_absolute : DarkStyles.label_absolute}>
                            <p>پرکننده موقت کانال</p>
                        </label>
                    </div>
                </div>

                <hr />
                <div className={theme.palette.mode === "light" ? LightStyles.d_flex_btn : DarkStyles.d_flex_btn}>
                    <button className={theme.palette.mode === "light" ? LightStyles.confirm : DarkStyles.confirm}>{fa["Run the filter"]}</button>
                    <button onClick={() => setIsOpen(false)} className={theme.palette.mode === "light" ? LightStyles.cancell : DarkStyles.cancell}>{fa["Remove the filter"]}</button>
                </div>
            </div>
        </Box>
    )
}

