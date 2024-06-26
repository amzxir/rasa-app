import React, { useContext, useState } from "react";
import { Box, TextField, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import axios from "axios";
import * as yup from "yup";
import ColorModeContext from "../../../../../context/color-mode-context";
import LightStyles from "../../../../../assets/sass/light/market/new-address.module.scss";
import DarkStyles from "../../../../../assets/sass/dark/market/new-address.module.scss";
import fa from "../../../../../lang/fa.json";

// regex error validation
const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{11}$/;

// validate form hook
const schema = yup.object().shape({
  mobile: yup.string().required('فیلد شماره موبایل اجباری است').matches(phoneRegExp, 'شماره موبایل را به درستی وارد کنید'),
  user: yup.string().required('فیلد نام تحویل گیرنده اجباری است'),
  address: yup.string().required('فیلد نشانی پستی اجباری است'),
  post_code: yup.string().required('فیلد کد پستی اجباری است'),
  state: yup.string().required('فیلد استان اجباری است'),
  city: yup.string().required('فیلد شهر اجباری است'),


});


export default function New() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode, token } = useContext(ColorModeContext);
  // end function darkmode

  // start react hook form
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  // end react hook form

  // start function create address 

  // const [address, setAddress] = useState([], () => {
  //   const localData = localStorage.getItem('address');
  //   return localData ? JSON.parse(localData) : [];
  // });




  const handelCreateAddress = async (data) => {

    // const getAddress = [...address];

    const user_id = localStorage.getItem("user_id");

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }

    const bodyParameters = {
      key: "value",
      user_id: user_id,
      receiver_name: data.user,
      city: data.city,
      province: data.state,
      receiver_mobile: data.mobile,
      adress: data.address,
      postalcode: data.post_code,
    }

    try {
      const response = await axios.post("https://rasadent.com/api/CreateAdress", bodyParameters, config);
      // console.log(response);

      if (response.data.status_code === 200) {
        var a = [];
        // Parse the serialized data back into an aray of objects
        a = JSON.parse(localStorage.getItem('address')) || [];
        // Push the new data (whether it be an object or anything else) onto the array
        a.push(response.data.adress);
        // Re-serialize the array back into a string and store it in localStorage
        localStorage.setItem('address', JSON.stringify(a));
        toast.success("آدرس با موفقیت ثبت شد");
        reset();
      }

    } catch (error) {
      console.error(error);
    }
  }




  // end function create address 

  return (
    <FadeTransform in transformProps={{ exitTransform: 'translateX(-100px)' }} >
      <Box sx={{ mt: 5, mb: 5 }}>
        <form onSubmit={handleSubmit(handelCreateAddress)}>
          <Grid container>
            <Grid sx={{ mb: 2 }} item xs={12}>
              <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                <input className={theme.palette.mode === "light" ? LightStyles.form_control : DarkStyles.form_control} {...register("user")} type="text" placeholder="نام تحویل گیرنده" />
                <span className="error">{errors.user?.message}</span>
              </div>
            </Grid>
            <Grid sx={{ mb: 2 }} item xs={12}>
              <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                <input className={theme.palette.mode === "light" ? LightStyles.form_control : DarkStyles.form_control} {...register("mobile")} type="number" placeholder="موبایل تحویل گیرنده" />
                <span className="error">{errors.mobile?.message}</span>
              </div>
            </Grid>
            <Grid sx={{ mb: 2 }} item xs={12}>
              <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                <input className={theme.palette.mode === "light" ? LightStyles.form_control : DarkStyles.form_control} {...register("state")} type="text" placeholder={fa["state"]} />
                <span className="error">{errors.state?.message}</span>
              </div>
            </Grid>
            <Grid sx={{ mb: 2 }} item xs={12}>
              <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                <input className={theme.palette.mode === "light" ? LightStyles.form_control : DarkStyles.form_control} {...register("city")} type="text" placeholder={fa["city"]} />
                <span className="error">{errors.city?.message}</span>
              </div>
            </Grid>
            <Grid sx={{ mb: 2 }} item xs={12}>
              <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                <input className={theme.palette.mode === "light" ? LightStyles.form_control : DarkStyles.form_control} {...register("post_code")} type="text" placeholder={fa["Posti Code"]} />
                <span className="error">{errors.post_code?.message}</span>
              </div>
            </Grid>
            <Grid sx={{ mb: 2 }} item xs={12}>
              <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                <input className={theme.palette.mode === "light" ? LightStyles.form_control : DarkStyles.form_control} {...register("address")} type="text" placeholder={fa["Postal address"]} />
                <span className="error">{errors.address?.message}</span>
              </div>
            </Grid>
          </Grid>
          <button className={theme.palette.mode === "light" ? LightStyles.btn_address : DarkStyles.btn_address}><span>{fa["add new address"]}</span></button>
        </form>
      </Box>
    </FadeTransform>
  );
}
