import React, { useContext, useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import axios from "axios";
import ColorModeContext from "../../../../context/color-mode-context";
import LightStyles from "../../../../assets/sass/light/market/notification.module.scss";
import DarkStyles from "../../../../assets/sass/dark/market/notification.module.scss";
import ArrowLeft from "../../../../assets/svg/arrow-left";
import fa from "../../../../lang/fa.json";

export default function Notification({ sendNotif }) {
  // start function darkmode
  const theme = useTheme();
  const { colorMode, token } = useContext(ColorModeContext);
  // end function darkmode

  // start fetch message notification
  const [notifData, setNotifData] = useState([]);

  const handelMessage = async () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    const bodyParameters = {
      key: "value",
    }

    try {
      const response = await axios.post('https://test.rasadent.com/api/ShowList', bodyParameters, config);
      // console.log(response.data.messages);
      setNotifData(response.data.messages)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    handelMessage();
  }, [notifData])
  // end fetch message notification

  return (
    <FadeTransform in transformProps={{ exitTransform: 'translateX(-100px)' }} >
      <Box sx={{ mt: 5, mb: 5 }}>
        {notifData.length !== 0 ?
          notifData && notifData.map && notifData.map((i) => {
            return (
              <NavLink key={i.id} to={`/shop/notification-single/${i.title}`} state={fa["notif"]} onClick={() => sendNotif(i)} className={theme.palette.mode === "light" ? LightStyles.card_notif : DarkStyles.card_notif}>
                <div className={theme.palette.mode === "light" ? LightStyles.border_notif : DarkStyles.border_notif}>
                </div>
                <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                  <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>
                    {i.title}
                  </p>
                  <p className={theme.palette.mode === "light" ? LightStyles.des : DarkStyles.des}>
                    {i.description.slice(0, 43)}...
                  </p>
                </div>
                <IconButton className={theme.palette.mode === "light" ? LightStyles.icon_arrow_left : DarkStyles.icon_arrow_left}>
                  <ArrowLeft />
                </IconButton>
              </NavLink>
            );
          })
          :
          <div style={{ display:'grid' , justifyContent:'center' , marginTop:'3rem' }}>
            <img style={{ maxWidth:'100%' , height:'auto' , marginBottom:'.5rem' }} src="/image/message.svg" alt="" />
            <p style={{ color:theme.palette.mode === "light" ? '#000' : '#fff' , textAlign:'center' }}>پیام های شما خالیه</p>
          </div>
        }

      </Box>
    </FadeTransform>
  );
}
