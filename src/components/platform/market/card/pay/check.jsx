import React, { useContext, useEffect } from 'react'
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FadeTransform } from "react-animation-components";
import { useNavigate } from 'react-router-dom';
import ColorModeContext from '../../../../../context/color-mode-context';
import axios from 'axios';


export default function CheckPay() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode, token } = useContext(ColorModeContext);
    // end function darkmode

    // start use navigate
    const navigate = useNavigate();
    // end use navigate

    // start check api payment
    useEffect(() => {
        const handelCheckPayment = async () => {

            const invoice = localStorage.getItem("invoice_number");

            const config = {
                headers: { Authorization: `Bearer ${token}` }
            }
            const bodyParameters = {
                key: "value",
                invoice_number: invoice,
            }
            try {
                const response = await axios.post("https://test.rasadent.com/api/CheckPayInvoice", bodyParameters, config);
                // console.log(response);
                if (response.data.status_code === 200) {
                    setTimeout(() => {
                        navigate("/shop/pay/sucess");
                    }, 2500)
                } else if (response.data.status_code === 422) {
                    setTimeout(() => {
                        navigate("/shop/pay/error");
                    }, 2500)
                }
            } catch (error) {
                console.error(error);
            }
        }

        handelCheckPayment();
    }, [])

    // end check api payment

    return (
        <FadeTransform in transformProps={{ exitTransform: 'translateX(-100px)' }} >
            <Box sx={{ mt: 5, mb: 5 }}>
                <p style={{ textAlign: 'center' }}>در حال بررسی پرداخت لطفا منتظر بمانید</p>
            </Box>
        </FadeTransform>
    )
}

