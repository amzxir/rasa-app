import React, { useContext } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LightStyles from "../../../assets/sass/light/auth.module.scss";
import DarkStyles from "../../../assets/sass/dark/auth.module.scss";
import Fingerprint from "../../../assets/svg/fingerprint";
import ColorModeContext from "../../../context/color-mode-context";

export default function Login(props) {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  // start function send mobile
  const handleSubmit = () => {
    props.nextStep();
  };
  // end function send mobile
  return (
    <Box>
      <div
        className={
          theme.palette.mode === "light"
            ? LightStyles.content_form_login
            : DarkStyles.content_form_login
        }
      >
        <img src="image/identification.svg" alt="" />
        <h1>ورود و ثبت نام</h1>
        <p
          className={
            theme.palette.mode === "light"
              ? LightStyles.title_login_form
              : DarkStyles.title_login_form
          }
        >
          شماره همراه خود را وارد کنید
        </p>
        <p
          className={
            theme.palette.mode === "light"
              ? LightStyles.title_login_form
              : DarkStyles.title_login_form
          }
        >
          کد فعالسازی به این شماره ارسال خواهد شد
        </p>
      </div>
      <div
        className={
          theme.palette.mode === "light"
            ? LightStyles.form_auth
            : DarkStyles.form_auth
        }
      >
        <div
          className={
            theme.palette.mode === "light"
              ? LightStyles.form_group
              : DarkStyles.form_group
          }
        >
          <input type="number" placeholder="+98" />
          <Fingerprint />
        </div>
        <button onClick={handleSubmit}>دریافت کد</button>
      </div>
    </Box>
  );
}
