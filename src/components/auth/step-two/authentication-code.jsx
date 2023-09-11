import React, { useContext, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import LightStyles from "../../../assets/sass/light/auth.module.scss";
import DarkStyles from "../../../assets/sass/dark/auth.module.scss";
import ArrowSmallLeftLight from "../../../assets/svg/arrow-small-left-light";
import ColorModeContext from "../../../context/color-mode-context";
import fa from "../../../lang/fa.json";

export default function AuthenticationCode(props) {
  let navigate = useNavigate();

  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode

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
  const handelFinalSubmit = () => {
    navigate("/");
  };
  // end handel submit login

  return (
    <Box
      className={
        theme.palette.mode === "light"
          ? LightStyles.form_code
          : DarkStyles.form_code
      }
    >
      <h1>{fa["Verification of identity code"]}</h1>

      <div
        className={
          theme.palette.mode === "light" ? LightStyles.timer : DarkStyles.timer
        }
      >
        <span>{timer}</span>
      </div>

      <p
        className={
          theme.palette.mode === "light"
            ? LightStyles.text_mobile
            : DarkStyles.text_mobile
        }
      >
        {fa["Code for the number"]} <span>{mobile}</span> {fa["has been sent"]}
      </p>

      <form onSubmit={handelFinalSubmit} className={theme.palette.mode === "light" ? LightStyles.send_code : DarkStyles.send_code}>
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
                  type="text"
                />
            );
          })}
        </div>
        <button><span>{fa["login"]}</span><ArrowSmallLeftLight /></button>
      </form>
     
      <div
        className={
          theme.palette.mode === "light"
            ? LightStyles.re_send
            : DarkStyles.re_send
        }
      >
        <p
          className={
            theme.palette.mode === "light"
              ? LightStyles.text_two
              : DarkStyles.text_two
          }
        >
          {fa["I did not receive the code"]}
          <span
            className={
              theme.palette.mode === "light"
                ? LightStyles.text_one
                : DarkStyles.text_one
            }
          >
            {fa["Send agian"]}
          </span>
        </p>
        <p
          onClick={chnageMobile}
          className={
            theme.palette.mode === "light"
              ? LightStyles.text_there
              : DarkStyles.text_there
          }
        >
          {fa["Change number"]}
        </p>
      </div>
    </Box>
  );
}
