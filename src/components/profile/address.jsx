import React, { useContext, useState, useEffect } from "react";
import { Box, Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink, useNavigate } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import LightStyles from "../../assets/sass/light/market/add-address.module.scss";
import DarkStyles from "../../assets/sass/dark/market/add-address.module.scss";
import fa from "../../lang/fa.json";
import PinIcon from "../../assets/svg/pin";
import ColorModeContext from "../../context/color-mode-context";

const ComponentAddress = () => {

    // start function darkmode
    const theme = useTheme();
    const { SetAddress } = useContext(ColorModeContext);
    // end function darkmode

    // start fetch use navigate
    const navigate = useNavigate();
    // end fetch use navigate

    // start fetch state address

    const [add, setAdd] = useState([]);

    useEffect(() => {
        const address = localStorage.getItem("address");
        setAdd(JSON.parse(address))
    }, [])


    // end fetch state address

    return (
        <div>
            <FadeTransform in transformProps={{ exitTransform: 'translateX(-100px)' }} >
                <Box sx={{ mt: 5, mb: 5 }}>
                    {
                        add === null ?
                            <div style={{ display: 'grid', justifyContent: 'center', marginTop: '3rem', marginBottom: '3rem' }}>
                                <img style={{ maxWidth: '100%', height: 'auto', marginBottom: '.5rem' }} src="/image/address-svg.svg" alt="" />
                                <span style={{ color: theme.palette.mode === "light" ? '#000' : '#fff', textAlign: 'center' }}>آدرس یافت نشد برای ثبت ادرس روی دکمه زیر بروید</span>
                            </div>
                            :
                            add?.map((i) => {
                                return (
                                    i.address !== null && i.postalcode !== null && i.province !== null && i.receiver_mobile !== null && i.receiver_name !== null &&
                                    <Card key={i.id} sx={{ boxShadow: 0, borderRadius: '15px', p: 2, mb: 4 }}>
                                        <div className={theme.palette.mode === "light" ? LightStyles.content_address : DarkStyles.content_address}>
                                            <PinIcon />
                                            <label htmlFor={`add_address${i.id}`} className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                                                <h1 style={{ marginLeft: '5rem' }}>{i.receiver_name}</h1>
                                                <p>{i.adress.slice(1, 45)} ...</p>
                                            </label>
                                            <input name="add_address" id={`add_address${i.id}`} type="radio" />
                                        </div>
                                    </Card>
                                )
                            })
                    }
                    <NavLink to={"/shop/new-address"} state={fa["new address"]} className={theme.palette.mode === "light" ? LightStyles.btn_address : DarkStyles.btn_address}><span>{fa["add new address"]}</span></NavLink>
                </Box>
            </FadeTransform>
        </div>
    )
}

export default ComponentAddress;