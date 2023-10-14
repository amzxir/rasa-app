import React, { useContext } from "react";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FadeTransform } from "react-animation-components";
import LightStyles from "../../../../assets/sass/light/manage-shop.module.scss";
import DarkStyles from "../../../../assets/sass/dark/manage-shop.module.scss";
import fa from "../../../../lang/fa.json";
import ColorModeContext from "../../../../context/color-mode-context";

export default function Documents() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmodes
    return (
        <FadeTransform in transformProps={{ exitTransform: 'translateX(-100px)' }}>
            <Box sx={{ mt: 5, mb: 5 }}>
                <Grid sx={{ mb: 4 }} container spacing={2}>
                    <Grid item xs={12}>
                        <label className={theme.palette.mode === "light" ? LightStyles.labels : DarkStyles.labels}>* ارسال مدرک</label>
                        <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                            <input accept="image" id="upload" placeholder="" className="d-none" type="file" />
                            <small className={theme.palette.mode === "light" ? LightStyles.small : DarkStyles.small}> اگر محصولاتی که در فروشگاهت می‌فروشی ، برای فروش نیاز به مجوز داره، تصویر اون مجوزها رو از طریق دکمه زیر بارگذاری کن. تذکر: تصاویر بی‌کیفیت یا ناخوانا تأیید نمی‌شن. صحت، اصالت و اعتبار مدارک بارگذاری‌شده را ۱۰۰ درصد تأیید می‌کنم و مسئولیت هر گونه مغایرت یا عدم صحت اطلاعات را می‌پذیرم.</small>
                        </div>
                        <label htmlFor="upload" className={theme.palette.mode === "light" ? LightStyles.label_upload : DarkStyles.label_upload}>
                            <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                                <img src="/image/Image.png" alt="" />
                            </div>
                            <p className={theme.palette.mode === "light" ? LightStyles.upload_text : DarkStyles.upload_text}>لطفا از رسانه ها و یا دوربین خود تصویر خود را بارگذاری کنید</p>
                            <small>Max file size : 5MB. File format : png and jpeg</small>
                        </label>
                    </Grid>
                </Grid>
                <button className={theme.palette.mode === "light" ? LightStyles.btn : DarkStyles.btn}><span>ذخیره اطلاعات</span></button>
            </Box>
        </FadeTransform>
    )
}

