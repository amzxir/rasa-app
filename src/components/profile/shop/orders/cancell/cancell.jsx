import React, { useContext } from "react";
import { Card, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FadeTransform } from "react-animation-components";
import LightStyles from "../../../../../assets/sass/light/manage-shop.module.scss";
import DarkStyles from "../../../../../assets/sass/dark/manage-shop.module.scss";
import fa from "../../../../../lang/fa.json";
import ColorModeContext from "../../../../../context/color-mode-context";
import CalenderIcon from "../../../../../assets/svg/calendar";
import ChartIcon from "../../../../../assets/svg/chart-pie";
import BagsIcon from "../../../../../assets/svg/bag";
import ArrowBtnIcon from "../../../../../assets/svg/arrow-btn";

export default function Cancell() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmodes
    return (
        <FadeTransform in transformProps={{ exitTransform: 'translateX(-100px)' }}>
            <div className={theme.palette.mode === "light" ? LightStyles.tab : DarkStyles.tab}>
                <Card className={theme.palette.mode === "light" ? LightStyles.card_orders : DarkStyles.card_orders}>
                    <Grid container spacing={2}>
                        <Grid item className={theme.palette.mode === "light" ? LightStyles.items_orders : DarkStyles.items_orders} xs={10}>
                            <div className={theme.palette.mode === "light" ? LightStyles.name_order : DarkStyles.name_order}>
                                <div className={theme.palette.mode === "light" ? LightStyles.staus_orders_five : DarkStyles.staus_orders_five}>لغو شده</div>
                                <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>شماره فاکتور :</p>
                                <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>12121324</p>
                            </div>
                            <div className={theme.palette.mode === "light" ? LightStyles.details_orders : DarkStyles.details_orders}>
                                <div className={theme.palette.mode === "light" ? LightStyles.items_or : DarkStyles.items_or}>
                                    <CalenderIcon />
                                    <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>تاریخ</p>
                                    <p className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}>1398/2/3</p>
                                </div>
                                <div className={theme.palette.mode === "light" ? LightStyles.items_or : DarkStyles.items_or}>
                                    <ChartIcon />
                                    <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>تعداد سبد محصول</p>
                                    <p className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}>12</p>
                                </div>
                                <div className={theme.palette.mode === "light" ? LightStyles.items_or : DarkStyles.items_or}>
                                    <BagsIcon />
                                    <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>مبلغ کل سبد مشتری</p>
                                    <p className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}>140/000 {fa["Toman"]}</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <button className={theme.palette.mode === "light" ? LightStyles.btn_order : DarkStyles.btn_order}><ArrowBtnIcon /></button>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        </FadeTransform>
    )
}

