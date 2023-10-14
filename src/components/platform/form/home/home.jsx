import React, { useContext, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import ColorModeContext from "../../../../context/color-mode-context";
import LightStyles from "../../../../assets/sass/light/form/form.module.scss";
import DarkStyles from "../../../../assets/sass/dark/form/form.module.scss";
import fa from "../../../../lang/fa.json";
import SearchIcon from "../../../../assets/svg/search";

export default function Home() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode
    return (
        <FadeTransform in transformProps={{ exitTransform: 'translateX(-100px)' }}>
            <Box sx={{ mt: 5, mb: 5 }}>
                <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                    <input className={theme.palette.mode === "light" ? LightStyles.search : DarkStyles.search} placeholder="فرم مورد نظر خود را جستجو کنید" type="text" />
                    <IconButton className={theme.palette.mode === "light" ? LightStyles.position_svg_search : DarkStyles.position_svg_search}>
                        <SearchIcon />
                    </IconButton>
                </div>
                <div className={theme.palette.mode === "light" ? LightStyles.content_form : DarkStyles.content_form}>
                    <div className={theme.palette.mode === "light" ? LightStyles.input_relative : DarkStyles.input_relative}>
                        <input type="checkbox" value="High" name="flexRadioDefault0" id="form1" />
                        <label htmlFor="form1" className={theme.palette.mode === "light" ? LightStyles.label_absolute : DarkStyles.label_absolute}>
                            <img src="/image/implant.png" alt="" />
                            <p>آموزش بهداشت دهان و دندان</p>
                            <div></div>
                        </label>
                    </div>
                    <div className={theme.palette.mode === "light" ? LightStyles.input_relative : DarkStyles.input_relative}>
                        <input type="checkbox" value="High" name="flexRadioDefault0" id="form1" />
                        <label htmlFor="form1" className={theme.palette.mode === "light" ? LightStyles.label_absolute : DarkStyles.label_absolute}>
                            <img src="/image/implant.png" alt="" />
                            <p>تبخال</p>
                            <div></div>
                        </label>
                    </div>
                    <div className={theme.palette.mode === "light" ? LightStyles.input_relative : DarkStyles.input_relative}>
                        <input type="checkbox" value="High" name="flexRadioDefault0" id="form1" />
                        <label htmlFor="form1" className={theme.palette.mode === "light" ? LightStyles.label_absolute : DarkStyles.label_absolute}>
                            <img src="/image/implant.png" alt="" />
                            <p>مراقبت های پس از اعمال دندانپزشکی کودکان</p>
                            <div></div>
                        </label>
                    </div>
                    <div className={theme.palette.mode === "light" ? LightStyles.input_relative : DarkStyles.input_relative}>
                        <input type="checkbox" value="High" name="flexRadioDefault0" id="form1" />
                        <label htmlFor="form1" className={theme.palette.mode === "light" ? LightStyles.label_absolute : DarkStyles.label_absolute}>
                            <img src="/image/implant.png" alt="" />
                            <p>آموزش بهداشت دهان و دندان</p>
                            <div></div>
                        </label>
                    </div>
                    <div className={theme.palette.mode === "light" ? LightStyles.input_relative : DarkStyles.input_relative}>
                        <input type="checkbox" value="High" name="flexRadioDefault0" id="form1" />
                        <label htmlFor="form1" className={theme.palette.mode === "light" ? LightStyles.label_absolute : DarkStyles.label_absolute}>
                            <img src="/image/implant.png" alt="" />
                            <p>آموزش بهداشت دهان و دندان</p>
                            <div></div>
                        </label>
                    </div>
                    <div className={theme.palette.mode === "light" ? LightStyles.input_relative : DarkStyles.input_relative}>
                        <input type="checkbox" value="High" name="flexRadioDefault0" id="form1" />
                        <label htmlFor="form1" className={theme.palette.mode === "light" ? LightStyles.label_absolute : DarkStyles.label_absolute}>
                            <img src="/image/implant.png" alt="" />
                            <p>آموزش بهداشت دهان و دندان</p>
                            <div></div>
                        </label>
                    </div>
                </div>
                <NavLink to={"/form/create"} className={theme.palette.mode === "light" ? LightStyles.btn : DarkStyles.btn}><span>دانلود فرم های انتخابی</span></NavLink>
            </Box>
        </FadeTransform>
    )
}

