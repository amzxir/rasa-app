import React, { useContext, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import ColorModeContext from "../../../../context/color-mode-context";
import LightStyles from "../../../../assets/sass/light/market/notification.module.scss";
import DarkStyles from "../../../../assets/sass/dark/market/notification.module.scss";
import ArrowLeft from "../../../../assets/svg/arrow-left";
import fa from "../../../../lang/fa.json";

export default function Notification({ sendNotif }) {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  // start fetch data notification
  const notification = [
    {
      id: 1,
      title: " تخفیف 30 درصدی رسادنت",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    },
    {
      id: 2,
      title: " تخفیف 15 درصدی رسادنت",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    },
    {
      id: 3,
      title: " تخفیف 28 درصدی رسادنت",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    },
    {
      id: 4,
      title: " تخفیف 45 درصدی رسادنت",
      description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک",
    },
    {
      id: 5,
      title: " تخفیف 12 درصدی رسادنت",
      description: "به مناسبت جشن قربان تا قدیر برای شما همراهان عزیز",
    },
    {
      id: 6,
      title: " تخفیف 76 درصدی رسادنت",
      description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده",
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
    <FadeTransform in transformProps={{exitTransform: 'translateX(-100px)'}} fadeProps={{enterOpacity: 0.85,}}>
      <Box sx={{ mt: 5, mb: 5 }}>
        {notifData.map((i) => {
          return (
            <NavLink key={i.id} to={`/shop/notification-single/${i.title}`} state={fa["notif"]} onClick={() => sendNotif(i)} className={theme.palette.mode === "light" ? LightStyles.card_notif : DarkStyles.card_notif}>
              <div className={theme.palette.mode === "light" ? LightStyles.border_notif : DarkStyles.border_notif}>
              </div>
              <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>
                  {i.title}
                </p>
                <p className={theme.palette.mode === "light" ? LightStyles.des : DarkStyles.des}>
                  {i.description.slice(0 , 43)}...
                </p>
              </div>
              <IconButton className={theme.palette.mode === "light" ? LightStyles.icon_arrow_left : DarkStyles.icon_arrow_left}>
                <ArrowLeft/>
              </IconButton>
            </NavLink>
          );
        })}
      </Box>
    </FadeTransform>
  );
}
