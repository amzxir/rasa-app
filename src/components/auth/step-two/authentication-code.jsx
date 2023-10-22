import React, { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify'
import axios from "axios";
import LightStyles from "../../../assets/sass/light/auth.module.scss";
import DarkStyles from "../../../assets/sass/dark/auth.module.scss";
import ArrowSmallLeftLight from "../../../assets/svg/arrow-small-left-light";
import ColorModeContext from "../../../context/color-mode-context";
import fa from "../../../lang/fa.json";
import Loading from "../../loading/loading";


export default function AuthenticationCode(props) {
  // start react router dom use navigate
  let navigate = useNavigate();
  // end react router dom use navigate

  // start function darkmode
  const theme = useTheme();
  const { colorMode, spinner, setSpinner } = useContext(ColorModeContext);
  // end function darkmode

  // start react hook form
  const { register, handleSubmit, formState: { errors } } = useForm();
  // end react hook form

  // start function and state in timer code
  const [timer, serTimer] = useState(60);
  useEffect(() => {
    const times = timer > 0 && setInterval(() => serTimer(timer - 1), 1000);
    return () => clearInterval(times);
  }, [timer]);
  // end function and state in timer code

  // start fetch data in first component (login)
  const mobile = props.data.mobile;
  // end fetch data in first component (login)

  // start function and state in otp input
  const [otp, setOpt] = useState(new Array(4).fill(""));

  const handelChnage = (element, index) => {
    if (isNaN(element.value)) return false;

    setOpt([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // focus next input

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  // end function and state in otp input

  // start function reset mobile
  const chnageMobile = () => {
    props.previousStep();
  };
  // end function reset mobile

  // start handel submit login
  const handelFinalSubmit = async () => {
    setSpinner(true)
    const verOtp = otp.join("");
    const verify = {
      mobile: props.data.mobile,
      code: verOtp,
    }
    // console.log(verOtp)
    try {
      const response = await axios.post("https://rasadent.reshe.ir/api/VerifyOtp", verify);
      console.log(response);

      if (response.data.msg === "data invalid") {
        setSpinner(false)
        toast.success(response.data.msg)
      } else if (response.data.token) {
        setSpinner(false)
        const getToken = response.data.token;
        localStorage.setItem("token", getToken);
        toast.success("به رسادنت خوش آمدید");
        navigate("/");

      }
      // console.log(response);

    } catch (error) {
      // console.error(error);
      setSpinner(false)
    }
  };
  // end handel submit login

  // start handel send agian code 
  const [limit, setLimit] = useState(true);

  const handelSendAgain = async () => {
    setSpinner(true)
    const mobile = props.data;
    try {
      const response = await axios.post("https://rasadent.com/api/SendOtp", mobile);
      if (response.data.status_code === 422) {
        toast.error(response.data.msg)
      } else if (response.data.status_code === 200) {
        toast.success(response.data.msg)
      }
      setSpinner(false)
      setLimit(false);
      // console.log(response);
    } catch (error) {
      setSpinner(false)
      // console.error(error);
    }
  }
  // end handel send agian code 

  // start function loading
  if (spinner) {
    return <Loading />
  }
  // end function loading

  return (
    // timer === 0 ? props.previousStep() && toast.error("زمان به ارسال رسید لطفا مجددا تلاش کنید") :
    <FadeTransform in transformProps={{ exitTransform: 'translateX(-100px)' }} fadeProps={{ enterOpacity: 0.85, }}>
      <Box className={theme.palette.mode === "light" ? LightStyles.form_code : DarkStyles.form_code}>
        <h1>{fa["Verification of identity code"]}</h1>
        <div className={theme.palette.mode === "light" ? LightStyles.timer : DarkStyles.timer}>
          <span>{timer}</span>
        </div>

        <p className={theme.palette.mode === "light" ? LightStyles.text_mobile : DarkStyles.text_mobile}>
          {fa["Code for the number"]} <span>{mobile}</span> {fa["has been sent"]}
        </p>
        <form onSubmit={handleSubmit(handelFinalSubmit)} className={theme.palette.mode === "light" ? LightStyles.send_code : DarkStyles.send_code}>
          <div className={theme.palette.mode === "light" ? LightStyles.form_flex : DarkStyles.form_flex}>
            {otp.map((data, index) => {
              return (
                <input
                  key={index}
                  value={data}
                  onFocus={(e) => e.target.select()}
                  onChange={(e) => handelChnage(e.target, index)}
                  className={
                    theme.palette.mode === "light"
                      ? LightStyles.form_controll
                      : DarkStyles.form_controll
                  }
                  name="otp"
                  maxLength="1"
                  type="number"
                  inputMode="numeric"
                />
              );
            })}
          </div>
          <button><span>{fa["login"]}</span><ArrowSmallLeftLight /></button>
        </form>

        <div className={theme.palette.mode === "light" ? LightStyles.re_send : DarkStyles.re_send}>
          <p className={theme.palette.mode === "light" ? LightStyles.text_two : DarkStyles.text_two}>
            {fa["I did not receive the code"]}
            <span onClick={limit === true ? handelSendAgain : null} className={theme.palette.mode === "light" ? LightStyles.text_one : DarkStyles.text_one}>
              {fa["Send agian"]}
            </span>
          </p>
          <p
            onClick={chnageMobile}
            className={theme.palette.mode === "light" ? LightStyles.text_there : DarkStyles.text_there}>
            {fa["Change number"]}
          </p>
        </div>
      </Box>
    </FadeTransform>
  );
}
