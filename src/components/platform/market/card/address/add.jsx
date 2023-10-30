import React, { useContext, useState , useEffect } from "react";
import { Box, Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink, useNavigate } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import axios from "axios";
import ColorModeContext from "../../../../../context/color-mode-context";
import LightStyles from "../../../../../assets/sass/light/market/add-address.module.scss";
import DarkStyles from "../../../../../assets/sass/dark/market/add-address.module.scss";
import fa from "../../../../../lang/fa.json";
import PinIcon from "../../../../../assets/svg/pin";


export default function Add() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode , token , handelAddress } = useContext(ColorModeContext);
  // end function darkmode

  // start fetch use navigate
  const navigate = useNavigate();
  // end fetch use navigate

  // start fetch state address

  const [add , setAdd] = useState([]);

  useEffect(() => {

    const handelGetAddress = async () => {

      const id = localStorage.getItem("user_id")

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      }
  
      const bodyParameters = {
        key: "value",
        user_id: id,
      }
  
      try {
        const response = await axios.post("https://rasadent.reshe.ir/api/GetUserAdress", bodyParameters, config);
        setAdd(response.data.adresses)

      } catch (error) {
        console.error(error);
      }
    }

    handelGetAddress();


  },[])

  // end fetch state address

  return (
    <FadeTransform in transformProps={{exitTransform: 'translateX(-100px)'}} >
      <Box sx={{ mt:5 , mb:5 }}>
        {add ? 
          add.map((i , index)=> {
            return(
              i.address !== null && i.postalcode !== null && i.province !== null && i.receiver_mobile !== null && i.receiver_name !== null  ? 
                <Card onClick={() => handelAddress(i)} key={i.id} sx={{ boxShadow:0 , borderRadius:'15px' , p:2 , mb:4 }}>
                  <div className={theme.palette.mode === "light" ? LightStyles.content_address : DarkStyles.content_address}>
                    <PinIcon/>
                    <label htmlFor={`add_address${i.id}`} className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                      <h1 style={{ marginLeft:'5rem' }}>{i.receiver_name}</h1>
                      <p>{i.adress.slice(1,45)} ...</p>
                    </label>
                    <input name="add_address" id={`add_address${i.id}`} type="radio" />
                  </div>
                </Card>
              
              :
              <></>
            )
          })
          :
          <>loading</>
        }
        <NavLink to={"/shop/new-address"} state={fa["new address"]} className={theme.palette.mode === "light" ? LightStyles.btn_address : DarkStyles.btn_address}><span>{fa["add new address"]}</span></NavLink>
      </Box>
    </FadeTransform>
  )
}

