import React, { useContext } from "react";
import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FadeTransform } from "react-animation-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";
import ColorModeContext from "../../../../context/color-mode-context";
import LightStyles from "../../../../assets/sass/light/market/compare.module.scss";
import DarkStyles from "../../../../assets/sass/dark/market/compare.module.scss";
import fa from "../../../../lang/fa.json";
import RemoveIcon from "../../../../assets/svg/remove";
import { toast } from "react-toastify";

export default function Compare() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode, compare, setCompare } = useContext(ColorModeContext);
    // end function darkmode

    console.log(compare);

    // start function delete product in card
    const handelDelete = (id) => {
        const newCompare = compare?.filter((record) => record.id !== id);
        setCompare(newCompare)
        toast.success('محصول با موفقیت حذف شد')
    }
    // end function delete product in card

    return (
        <FadeTransform in transformProps={{ exitTransform: 'translateX(-100px)' }} fadeProps={{ enterOpacity: 0.85, }}>
            <Box sx={{ mt: 5, mb: 5 }}>
                {compare.length !== 0 ?
                    <div className={theme.palette.mode === "light" ? LightStyles.responsive : DarkStyles.responsive}>
                        <div className={theme.palette.mode === "light" ? LightStyles.d_flex : DarkStyles.d_flex}>
                            {compare.map((i) => {
                                return (
                                    <div key={i.id} className={theme.palette.mode === "light" ? LightStyles.compare_card : DarkStyles.compare_card}>
                                        <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                                            <LazyLoadImage effect="blur" src={`https://rasadent.com/storage/product/${i.image}`} alt="" />
                                            <div onClick={() => handelDelete(i.id)} className={theme.palette.mode === "light" ? LightStyles.remove : DarkStyles.remove}>
                                                <RemoveIcon />
                                            </div>
                                        </div>
                                        <div className={theme.palette.mode === "light" ? LightStyles.content_product : DarkStyles.content_product}>
                                            <p className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}>{i.fa_name}</p>
                                            {/* <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>
                                                <span>7/000</span>
                                                <span>{fa["Toman"]}</span>
                                            </p> */}
                                            <NavLink to={`/shop/single-product/${i.id}`} state={i.fa_name} className={theme.palette.mode === "light" ? LightStyles.details_product : DarkStyles.details_product}><span>{fa["product details"]}</span></NavLink>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.content_compare : DarkStyles.content_compare}>
                            {compare.length !== 0 ? <h1>محتویات بسته</h1> : ''}
                            <div className={theme.palette.mode === "light" ? LightStyles.flex_content : DarkStyles.flex_content}>
                                {compare.map((i, index) => {
                                    return (
                                        <div key={i.id} className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله ستون و سطرآنچنان که لازم است</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.content_compare : DarkStyles.content_compare}>
                            {compare.length !== 0 ? <h1>شرکت سازنده</h1> : ''}
                            <div className={theme.palette.mode === "light" ? LightStyles.flex_content : DarkStyles.flex_content}>
                                {compare.map((i, index) => {
                                    return (
                                        <div key={i.id} className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                                            <p>Dental Technologies</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.content_compare : DarkStyles.content_compare}>
                            {compare.length !== 0 ? <h1>موارد مصرفی مورد استفاده شده</h1> : ''}
                            <div className={theme.palette.mode === "light" ? LightStyles.flex_content : DarkStyles.flex_content}>
                                {compare.map((i, index) => {
                                    return (
                                        <div key={i.id} className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله ستون و سطرآنچنان که لازم است</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    :
                    <div className={theme.palette.mode === "light" ? LightStyles.not_found : DarkStyles.not_found}>
                        <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                            <img src="/image/not-found.svg" alt="" />
                        </div>
                        <p>مقایسه شما خالی است</p>
                    </div>
                }
            </Box>
        </FadeTransform>
    )
}

