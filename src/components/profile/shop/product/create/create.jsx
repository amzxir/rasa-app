import React, { useContext } from "react";
import { Box, Grid, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LightStyles from "../../../../../assets/sass/light/manage-shop.module.scss";
import DarkStyles from "../../../../../assets/sass/dark/manage-shop.module.scss";
import fa from "../../../../../lang/fa.json";
import ColorModeContext from "../../../../../context/color-mode-context";
import WizardForm from "react-wizard-form";
import OneCreateProduct from "./step/one";
import TwoCreateProduct from "./step/two";
import ThreeCreateProduct from "./step/three";

export default function CreateProduct({ isProduct , setIsProduct }) {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode
    return (
        // <Box sx={{ mt: 5, mb: 5 }}>
        //     <Grid container>
        //         <Grid item xs={12}>
        //         <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
        //             <input placeholder={fa["Name Product"]} type="text" />
        //         </div>
        //         </Grid>
        //         <Grid item xs={12}>
        //         <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
        //             <input placeholder={fa["price"]} type="text" />
        //         </div>
        //         </Grid>
        //         <Grid item xs={12}>
        //         <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
        //             <input placeholder={fa["Discount and discount period date"]} type="text" />
        //             <IconButton className={theme.palette.mode === "light" ? LightStyles.position_svg : DarkStyles.position_svg}>
        //                 <DateIcon/>
        //             </IconButton>
        //         </div>
        //         </Grid>
        //         <Grid item xs={12}>
        //         <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
        //             <input placeholder={fa["count"]} type="text" />
        //         </div>
        //         </Grid>
        //         <Grid item xs={12}>
        //         <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
        //             <select>
        //                 <option>{fa["status product"]}</option>
        //                 <option value="1">{fa["active"]}</option>
        //                 <option value="2">{fa["Not Actice"]}</option>
        //             </select>
        //         </div>
        //         </Grid>
        //     </Grid>
        //     <button className={theme.palette.mode === "light" ? LightStyles.btn_product : DarkStyles.btn_product}>
        //         <span>{fa["Create Product"]}</span>
        //     </button>
        // </Box>
        <>
            <div onClick={() => setIsProduct(false)} className={isProduct === true ? theme.palette.mode === "light" ? LightStyles.fade_open : DarkStyles.fade_open : theme.palette.mode === "light" ? LightStyles.fade_close : DarkStyles.fade_close}>
            </div>
            <div className={isProduct === true ? theme.palette.mode === "light" ? LightStyles.card_delete_open : DarkStyles.card_delete_open : theme.palette.mode === "light" ? LightStyles.card_delete_close : DarkStyles.card_delete_close}>
                <h1 className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>اضافه کردن محصول جدید به فروشکاه</h1>
                <hr />
                <WizardForm>
                    <OneCreateProduct/>
                    <TwoCreateProduct/>
                    <ThreeCreateProduct setIsProduct={setIsProduct}/>
                </WizardForm>
            </div>
        </>
    );
}
