import React, { useContext, useState } from "react";
import { Box, Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FadeTransform } from "react-animation-components";
import { NavLink } from "react-router-dom";
import LightStyles from "../../../../assets/sass/light/invoice.module.scss";
import DarkStyles from "../../../../assets/sass/dark/invoice.module.scss";
import ColorModeContext from "../../../../context/color-mode-context";
import fa from "../../../../lang/fa.json";

export default function Invoice({ fetchProduct }) {

    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function
    return (
        <FadeTransform in transformProps={{ exitTransform: 'translateX(-100px)' }}>
            <Box sx={{ mt: 5, mb: 5 }}>
                <div className={theme.palette.mode === "light" ? LightStyles.img_qr : DarkStyles.img_qr}>
                    <img src="/image/qr.png" alt="" />
                </div>
                <div className={theme.palette.mode === "light" ? LightStyles.invoice_content : DarkStyles.invoice_content}>
                    <Card sx={{ boxShadow: '0', borderRadius: '16px', p: 2, mb: 3 }}>
                        <div className={theme.palette.mode === "light" ? LightStyles.item : DarkStyles.item}>
                            <p>{fa["Name Product"]}</p>
                            <p>کامپوزیت_سارمکو,رنگ A2</p>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.item : DarkStyles.item}>
                            <p>{fa["count order"]}</p>
                            <p>۱۴ عدد</p>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.item : DarkStyles.item}>
                            <p>{fa["discount"]}</p>
                            <p>0 {fa["Toman"]}</p>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.item : DarkStyles.item}>
                            <p>{fa["total"]}</p>
                            <p>120/000/000 {fa["Toman"]}</p>
                        </div>
                    </Card>
                    <Card sx={{ boxShadow: '0', borderRadius: '16px', p: 2, mb: 3 }}>
                        <div className={theme.palette.mode === "light" ? LightStyles.item : DarkStyles.item}>
                            <p>{fa["Name Product"]}</p>
                            <p>کامپوزیت_سارمکو,رنگ A2</p>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.item : DarkStyles.item}>
                            <p>{fa["count order"]}</p>
                            <p>۱۴ عدد</p>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.item : DarkStyles.item}>
                            <p>{fa["discount"]}</p>
                            <p>0 {fa["Toman"]}</p>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.item : DarkStyles.item}>
                            <p>{fa["total"]}</p>
                            <p>120/000/000 {fa["Toman"]}</p>
                        </div>
                    </Card>
                </div>
                <hr />
                <Card sx={{ boxShadow: 0, borderRadius: '15px', p:2 , mb:4 }}>
                    <div className={theme.palette.mode === "light" ? LightStyles.invoice : DarkStyles.invoice}>
                        <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
                            <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["price products"]}</p>
                            <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>150/000 {fa["Toman"]}</p>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
                            <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["tax"]}</p>
                            <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>150/00 {fa["Toman"]}</p>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
                            <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["shipping cost"]}</p>
                            <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>100/00 {fa["Toman"]}</p>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
                            <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["discount"]}</p>
                            <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>500 {fa["Toman"]}</p>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
                            <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["Total amount"]}</p>
                            <p className={theme.palette.mode === "light" ? LightStyles.price_success : DarkStyles.price_success}>150/000 {fa["Toman"]}</p>
                        </div>
                        <hr style={{ borderWidth: '.1px', borderColor: '#ffffff4d' }} />
                        <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
                            <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["pay"]}</p>
                            <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>150/000 {fa["Toman"]}</p>
                        </div>
                    </div>
                </Card>
                <div className={theme.palette.mode === "light" ? LightStyles.invoice_content : DarkStyles.invoice_content}>
                    <Card sx={{ boxShadow: '0', borderRadius: '16px', p: 2, mb: 3 }}>
                        <div className={theme.palette.mode === "light" ? LightStyles.item : DarkStyles.item}>
                            <p>روش پرداخت</p>
                            <p>ملت - آنلاین</p>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.item : DarkStyles.item}>
                            <p>زمان تحویل</p>
                            <p>15 ادیبهشت 1402 | 10:00:27 AM</p>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.item : DarkStyles.item}>
                            <p>هزینه ارسال</p>
                            <p>15/000 {fa["Toman"]}</p>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.item : DarkStyles.item}>
                            <p>مالیات و عوارض</p>
                            <p>19/000 {fa["Toman"]}</p>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.item : DarkStyles.item}>
                            <p>وضعیت سفارش</p>
                            <p style={{ color:theme.palette.mode === "light" ? '#113D8D' : '#3282F9' }}>موفق</p>
                        </div>
                    </Card>
                </div>
            </Box>
        </FadeTransform>
    )
}

