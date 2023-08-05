import React, { useContext, useState } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../../../context/color-mode-context";
import LightStyles from "../../../../assets/sass/light/market/notification.module.scss";
import DarkStyles from "../../../../assets/sass/dark/market/notification.module.scss";
import Exclude from "../../../../assets/svg/exclude";
import { NavLink } from "react-router-dom";

export default function Notification() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  // start fetch data notification
  const notification = [
    {
      id: 1,
      title: " تخفیف 30 درصدی رسادنت",
      description: "به مناسبت جشن قربان تا قدیر برای شما همراهان عزیز",
    },
    {
      id: 2,
      title: " تخفیف 15 درصدی رسادنت",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      id: 3,
      title: " تخفیف 28 درصدی رسادنت",
      description: "به مناسبت جشن قربان تا قدیر برای شما همراهان عزیز",
    },
    {
      id: 4,
      title: " تخفیف 45 درصدی رسادنت",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک",
    },
    {
      id: 5,
      title: " تخفیف 12 درصدی رسادنت",
      description: "به مناسبت جشن قربان تا قدیر برای شما همراهان عزیز",
    },
    {
      id: 6,
      title: " تخفیف 76 درصدی رسادنت",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده",
    },
    {
      id: 7,
      title: " تخفیف 45 درصدی رسادنت",
      description: "به مناسبت جشن قربان تا قدیر برای شما همراهان عزیز",
    },
  ];
  const [notifData, setNotifData] = useState(notification);
  // end fetch data notification
  return (
    <Box sx={{ mt: 5, mb: 5 }}>
      {notifData.map((i) => {
        return (
          <NavLink
          key={i.id}
            className={
              theme.palette.mode === "light"
                ? LightStyles.card_notif
                : DarkStyles.card_notif
            }
          >
            <div
              className={
                theme.palette.mode === "light"
                  ? LightStyles.icon_notif
                  : DarkStyles.icon_notif
              }
            >
              <Exclude />
            </div>
            <div
              className={
                theme.palette.mode === "light"
                  ? LightStyles.content
                  : DarkStyles.content
              }
            >
              <p
                className={
                  theme.palette.mode === "light"
                    ? LightStyles.title
                    : DarkStyles.title
                }
              >
                {i.title}
              </p>
              <p
                className={
                  theme.palette.mode === "light"
                    ? LightStyles.des
                    : DarkStyles.des
                }
              >
                {i.description.slice(0 , 45)}...
              </p>
            </div>
          </NavLink>
        );
      })}
    </Box>
  );
}
