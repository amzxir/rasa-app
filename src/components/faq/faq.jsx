import React, { useContext } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LightStyles from "../../assets/sass/light/terms.module.scss";
import DarkStyles from "../../assets/sass/dark/terms.module.scss";
import TouchIcon from "../../assets/svg/touch";
import ColorModeContext from "../../context/color-mode-context";
import fa from "../../lang/fa.json";

export default function Faq() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  return (
    <Box sx={{ mt: 5, mb: 5 }}>
      <div
        className={
          theme.palette.mode === "light"
            ? LightStyles.img_content
            : DarkStyles.img_content
        }
      >
        <img
          className={
            theme.palette.mode === "light"
              ? LightStyles.img_fluid
              : DarkStyles.img_fluid
          }
          src="/image/terms.svg"
          alt="terms"
        />
      </div>
      <p
        className={
          theme.palette.mode === "light"
            ? LightStyles.text_about
            : DarkStyles.text_about
        }
      >
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
        درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </p>

      <h1
        className={
          theme.palette.mode === "light"
            ? LightStyles.title_h1_terms
            : DarkStyles.title_h1_terms
        }
      >
        <TouchIcon /> <span>{fa["The second paragraph is to respect the rights of customers"]}</span>
      </h1>
      <p
        className={
          theme.palette.mode === "light"
            ? LightStyles.text_about
            : DarkStyles.text_about
        }
      >
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد.
      </p>
    </Box>
  );
}
