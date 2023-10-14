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
