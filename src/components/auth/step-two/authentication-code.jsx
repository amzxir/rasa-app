import React, { useContext } from "react";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LightStyles from "../../../assets/sass/light/auth.module.scss";
import DarkStyles from "../../../assets/sass/dark/auth.module.scss";
import ArrowSmallLeftLight from "../../../assets/svg/arrow-small-left-light";
import ColorModeContext from "../../../context/color-mode-context";
import { useNavigate } from "react-router-dom";

export default function AuthenticationCode(props) {
  let navigate = useNavigate();
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  // start function reset mobile
  const chnageMobile = () => {
    props.previousStep();
  };
  // end function reset mobile
  const handelFinalSubmit = () => {
    navigate("/")
  };
  return (
    <Box
      className={
        theme.palette.mode === "light"
          ? LightStyles.form_code
          : DarkStyles.form_code
      }
    >
      <h1>تایید کد هویت</h1>

      <div
        className={
          theme.palette.mode === "light" ? LightStyles.timer : DarkStyles.timer
        }
      >
        <span>24</span>
      </div>

      <p
        className={
          theme.palette.mode === "light"
            ? LightStyles.text_mobile
            : DarkStyles.text_mobile
        }
      >
        کد برای شماره <span>09199954356</span> ارسال گردید
      </p>

      <div
        className={
          theme.palette.mode === "light"
            ? LightStyles.send_code
            : DarkStyles.send_code
        }
      >
        <Grid container sx={{ pr: 5, pl: 5 }} spacing={2}>
          <Grid item xs={3}>
            <input
              className={
                theme.palette.mode === "light"
                  ? LightStyles.form_controll
                  : DarkStyles.form_controll
              }
              type="number"
            />
          </Grid>
          <Grid item xs={3}>
            <input
              className={
                theme.palette.mode === "light"
                  ? LightStyles.form_controll
                  : DarkStyles.form_controll
              }
              type="number"
            />
          </Grid>
          <Grid item xs={3}>
            <input
              className={
                theme.palette.mode === "light"
                  ? LightStyles.form_controll
                  : DarkStyles.form_controll
              }
              type="number"
            />
          </Grid>
          <Grid item xs={3}>
            <input
              className={
                theme.palette.mode === "light"
                  ? LightStyles.form_controll
                  : DarkStyles.form_controll
              }
              type="number"
            />
          </Grid>
        </Grid>
        <button onClick={handelFinalSubmit}>
          <span>ورود</span>
          <ArrowSmallLeftLight />
        </button>
      </div>
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
          کد دریافت نکردم
          <span
            className={
              theme.palette.mode === "light"
                ? LightStyles.text_one
                : DarkStyles.text_one
            }
          >
            ارسال مجدد
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
          تغییر شماره
        </p>
      </div>
    </Box>
  );
}
