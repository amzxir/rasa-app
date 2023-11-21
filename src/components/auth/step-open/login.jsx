import React, { useContext } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FadeTransform } from "react-animation-components";
import { toast } from 'react-toastify'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import * as yup from "yup";
import axios from "axios";
import LightStyles from "../../../assets/sass/light/auth.module.scss";
import DarkStyles from "../../../assets/sass/dark/auth.module.scss";
import Fingerprint from "../../../assets/svg/fingerprint";
import ColorModeContext from "../../../context/color-mode-context";
import fa from "../../../lang/fa.json"

// regex error validation
const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{11}$/;

// validate form hook
const schema = yup.object().shape({
  mobile: yup.string().required('فیلد شماره موبایل اجباری است').matches(phoneRegExp, 'شماره موبایل را به درستی وارد کنید'),
});

export default function Login(props) {
  // start function darkmode
  const theme = useTheme();
  const { colorMode, spinner, setSpinner , mobile } = useContext(ColorModeContext);
  // end function darkmode

  // start react hook form
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  // end react hook form
  
  // start function send mobile
  const handleSubmits = async (data) => {
    setSpinner(true)
    const mobile = data;
    try {
      const response = await axios.post("https://rasadent.reshe.ir/api/SendOtp", mobile);
      if (response.data.status_code === 422) {
        toast.error(response.data.msg)
      } else if (response.data.status_code === 200) {
        toast.success(response.data.msg)
      }
      setSpinner(false)
      localStorage.setItem("mobile", data.mobile);
      // console.log(response);
      props.nextStep(data);
    } catch (error) {
      setSpinner(false)
      // console.error(error);
    }
  };
  // end function send mobile

  return (
    <FadeTransform in transformProps={{ exitTransform: 'translateX(-100px)' }}>
      <Box>
        <div className={theme.palette.mode === "light" ? LightStyles.content_form_login : DarkStyles.content_form_login}>
          <LazyLoadImage effect="blur" src="/image/identification.svg" alt="" />
          <h1>{fa["Login and Register"]}</h1>
          <p className={theme.palette.mode === "light" ? LightStyles.title_login_form : DarkStyles.title_login_form}>
            {fa["Enter your mobile"]}
          </p>
          <p className={theme.palette.mode === "light" ? LightStyles.title_login_form : DarkStyles.title_login_form}>
            {fa["The activation code will be sent to this number"]}
          </p>
        </div>
        <div
          className={theme.palette.mode === "light" ? LightStyles.form_auth : DarkStyles.form_auth}>
          <form onSubmit={handleSubmit(handleSubmits)}>
            <div className="mb-3">
              <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                <input type="number" inputMode="numeric" placeholder="+98" {...register("mobile")} />
                <Fingerprint />
              </div>
              <span className="error">{errors.mobile?.message}</span>
            </div>
            <button disabled={spinner}>{fa["Get code"]}{spinner ? <div className="lds-dual-ring"></div> : ''}</button>
          </form>
        </div>
      </Box>
    </FadeTransform>
  );
}
