import React, { useContext } from "react";
import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FadeTransform } from "react-animation-components";
import ColorModeContext from "../../../../context/color-mode-context";
import LightStyles from "../../../../assets/sass/light/market/compare.module.scss";
import DarkStyles from "../../../../assets/sass/dark/market/compare.module.scss";
import fa from "../../../../lang/fa.json";
import { NavLink } from "react-router-dom";
import RemoveIcon from "../../../../assets/svg/remove";

export default function Compare() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode
    return (
        <FadeTransform in transformProps={{ exitTransform: 'translateX(-100px)' }} fadeProps={{ enterOpacity: 0.85, }}>
            <Box sx={{ mt: 5, mb: 5 }}>
                <div className={theme.palette.mode === "light" ? LightStyles.responsive : DarkStyles.responsive}>
                    <div className={theme.palette.mode === "light" ? LightStyles.d_flex : DarkStyles.d_flex}>
                        <div className={theme.palette.mode === "light" ? LightStyles.compare_card : DarkStyles.compare_card}>
                            <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                                <img src="/image/product-2.png" alt="" />
                                <div className={theme.palette.mode === "light" ? LightStyles.remove : DarkStyles.remove}>
                                    <RemoveIcon />
                                </div>
                            </div>
                            <div className={theme.palette.mode === "light" ? LightStyles.content_product : DarkStyles.content_product}>
                                <p className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}>کامپوزیت سارمکو</p>
                                <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>
                                    <span>7/000</span>
                                    <span>{fa["Toman"]}</span>
                                </p>
                                <NavLink to={"/shop/single-product"} state={"کامپوزیت سارمکو"} className={theme.palette.mode === "light" ? LightStyles.details_product : DarkStyles.details_product}><span>{fa["product details"]}</span></NavLink>
                            </div>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.compare_card : DarkStyles.compare_card}>
                            <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                                <img src="/image/product-2.png" alt="" />
                                <div className={theme.palette.mode === "light" ? LightStyles.remove : DarkStyles.remove}>
                                    <RemoveIcon />
                                </div>
                            </div>
                            <div className={theme.palette.mode === "light" ? LightStyles.content_product : DarkStyles.content_product}>
                                <p className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}>کامپوزیت سارمکو</p>
                                <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>
                                    <span>7/000</span>
                                    <span>{fa["Toman"]}</span>
                                </p>
                                <NavLink to={"/shop/single-product"} state={"کامپوزیت سارمکو"} className={theme.palette.mode === "light" ? LightStyles.details_product : DarkStyles.details_product}><span>{fa["product details"]}</span></NavLink>
                            </div>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.compare_card : DarkStyles.compare_card}>
                            <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                                <img src="/image/product-2.png" alt="" />
                                <div className={theme.palette.mode === "light" ? LightStyles.remove : DarkStyles.remove}>
                                    <RemoveIcon />
                                </div>
                            </div>
                            <div className={theme.palette.mode === "light" ? LightStyles.content_product : DarkStyles.content_product}>
                                <p className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}>کامپوزیت سارمکو</p>
                                <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>
                                    <span>7/000</span>
                                    <span>{fa["Toman"]}</span>
                                </p>
                                <NavLink to={"/shop/single-product"} state={"کامپوزیت سارمکو"} className={theme.palette.mode === "light" ? LightStyles.details_product : DarkStyles.details_product}><span>{fa["product details"]}</span></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className={theme.palette.mode === "light" ? LightStyles.content_compare : DarkStyles.content_compare}>
                        <h1>محتویات بسته</h1>
                        <div className={theme.palette.mode === "light" ? LightStyles.flex_content : DarkStyles.flex_content}>
                            <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله ستون و سطرآنچنان که لازم است</p>
                            </div>
                            <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله ستون و سطرآنچنان که لازم است</p>
                            </div>
                            <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله ستون و سطرآنچنان که لازم است</p>
                            </div>
                        </div>
                    </div>
                    <div className={theme.palette.mode === "light" ? LightStyles.content_compare : DarkStyles.content_compare}>
                        <h1>شرکت سازنده</h1>
                        <div className={theme.palette.mode === "light" ? LightStyles.flex_content : DarkStyles.flex_content}>
                            <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                                <p>Dental Technologies</p>
                            </div>
                            <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                                <p>Dental Technologies</p>
                            </div>
                            <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                                <p>Dental Technologies</p>
                            </div>
                        </div>
                    </div>
                    <div className={theme.palette.mode === "light" ? LightStyles.content_compare : DarkStyles.content_compare}>
                        <h1>موارد مصرفی مورد استفاده شده</h1>
                        <div className={theme.palette.mode === "light" ? LightStyles.flex_content : DarkStyles.flex_content}>
                            <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله ستون و سطرآنچنان که لازم است</p>
                            </div>
                            <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله ستون و سطرآنچنان که لازم است</p>
                            </div>
                            <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله ستون و سطرآنچنان که لازم است</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </FadeTransform>
    )
}

