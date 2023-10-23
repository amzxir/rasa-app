import React, { useContext, useState, useEffect } from "react";
import { Box, Grid, Breadcrumbs } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink, useLocation } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import { toast } from 'react-toastify';
import axios from "axios";
import LightStyles from "../../../../assets/sass/light/market/product-category.module.scss";
import DarkStyles from "../../../../assets/sass/dark/market/product-category.module.scss";
import fa from "../../../../lang/fa.json";
import ColorModeContext from "../../../../context/color-mode-context";
import BookmarkIcon from "../../../../assets/svg/Bookmark";
import Search from "../search/search";
import Loading from "../../../loading/loading";


export default function ProductCategory({ sendProduct }) {
    // start function darkmode
    const theme = useTheme();
    const { colorMode, token, spinner, setSpinner } = useContext(ColorModeContext);
    // end function darkmode
    // start fetch data and function filter
    const [isOpen, setIsOpen] = useState(false)
    // end fetch data and function filter 

    // start state location navlink
    const location = useLocation();
    // end state location navlink 

    // start fetch product category 
    const [product, setProduct] = useState([]);

    useEffect(() => {
        setSpinner(true)
        const handelProductCategory = async () => {
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            }
            const bodyParameters = {
                key: "value",
                category_name: location.state,
            }
            try {
                const response = await axios.post("https://rasadent.reshe.ir/api/ProductCategory", bodyParameters, config);
                setSpinner(false)
                setProduct(response.data.products)
                // console.log(response);
            } catch (error) {
                setSpinner(false)
                // console.error(error);
            }
        }

        handelProductCategory();
    }, [])

    // end fetch product category 

    // start function add bookmark
    const handelBookmark = async (id) => {

        const mobile = localStorage.getItem("mobile");

        const config = {
        headers: { Authorization: `Bearer ${token}` }
        }
        const bodyParameters = {
        key: "value",
        mobile:mobile,
        product_id:id,
        }

        try {
        const response = await axios.post("https://rasadent.reshe.ir/api/CreateBookmark" , bodyParameters , config);
        // console.log(response.data);
        toast.success('به علاقه مندی ها اضافه شد')
        } catch (error) {
        console.error(error);
        }
    }
    // end function add bookmark

    // start function loading
    if (spinner) {
        return <Loading />
    }
    // end function loading

    return (
        <Box sx={{ mt: 5, mb: 5 }}>

            <Search setIsOpen={setIsOpen} />

            <Breadcrumbs className={theme.palette.mode === "light" ? LightStyles.breadcrumb : DarkStyles.breadcrumb}>
                <NavLink to={"/shop/category-list"} state={fa["category product"]}>{fa["category product"]}</NavLink>
                <p>{location.state}</p>
            </Breadcrumbs>

            <Grid container spacing={2}>
                {product && product.map && product.map((i) => {
                    return (
                        <Grid key={i.id} item xs={6}>
                            <div className={theme.palette.mode === "light" ? LightStyles.card_product : DarkStyles.card_product}>
                                <div className={theme.palette.mode === "light" ? LightStyles.card_img : DarkStyles.card_img}>
                                    <NavLink onClick={() => sendProduct(i)} to={`/shop/single-product/${i.fa_name}`} state={i.fa_name} className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                                            <img src={`https://rasadent.com/storage/product/${i.image[0]?.image}`} alt="" />
                                    </NavLink>
                                    <div onClick={() => handelBookmark(i)} className={theme.palette.mode === "light" ? LightStyles.icon_wishlist : DarkStyles.icon_wishlist}>
                                        <BookmarkIcon />
                                    </div>
                                </div>
                                <div className={theme.palette.mode === "light" ? LightStyles.shop : DarkStyles.shop}>
                                    <span>{i.shops[0]?.name}</span>
                                </div>
                                <div className={theme.palette.mode === "light" ? LightStyles.product_details : DarkStyles.product_details}>
                                    <NavLink to={`/shop/single-product/${i.fa_name}`} state={i.fa_name} className={theme.palette.mode === "light" ? LightStyles.name_product : DarkStyles.name_product}>
                                        {i.fa_name}
                                    </NavLink>
                                    <p className={theme.palette.mode === "light" ? LightStyles.price_product : DarkStyles.price_product} >
                                        {i.code} {fa["Toman"]}
                                    </p>
                                </div>
                            </div>
                        </Grid>
                    )
                })}
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

