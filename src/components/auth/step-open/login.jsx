import React, { useContext } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LightStyles from "../../../assets/sass/light/auth.module.scss";
import DarkStyles from "../../../assets/sass/dark/auth.module.scss";
import Fingerprint from "../../../assets/svg/fingerprint";
import ColorModeContext from "../../../context/color-mode-context";
import fa from "../../../lang/fa.json"
import * as yup from "yup";

// regex error validation
const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{11}$/;

// validate form hook
const schema = yup.object().shape({
    mobile: yup.string().required('فیلد شماره موبایل اجباری است').matches(phoneRegExp , 'شماره موبایل را به درستی وارد کنید'),
});

export default function Login(props) {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  // start react hook form
  const { register, handleSubmit, formState:{ errors } } = useForm({
      resolver: yupResolver(schema),
  });
  // end react hook form
  // start function send mobile
  const handleSubmits = (data) => {
    props.nextStep(data);
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
        <h1>{fa["Login and Register"]}</h1>
        <p
          className={
            theme.palette.mode === "light"
              ? LightStyles.title_login_form
              : DarkStyles.title_login_form
          }
        >
          {fa["Enter your mobile"]}
        </p>
        <p
          className={
            theme.palette.mode === "light"
              ? LightStyles.title_login_form
              : DarkStyles.title_login_form
          }
        >
          {fa["The activation code will be sent to this number"]}
        </p>
      </div>
      <div
        className={
          theme.palette.mode === "light"
            ? LightStyles.form_auth
            : DarkStyles.form_auth
        }
      >
        <form onSubmit={handleSubmit(handleSubmits)}>          
          <div className="mb-3">
            <div
              className={
                theme.palette.mode === "light"
                  ? LightStyles.form_group
                  : DarkStyles.form_group
              }
            >
              <input type="number" inputMode="numeric" placeholder="+98" {...register("mobile")} />
              <Fingerprint />
            </div>
            <span className="error">{errors.mobile?.message}</span>
          </div>
          <button>{fa["Get code"]}</button>
        </form>
      </div>
    </Box>
  );
}
