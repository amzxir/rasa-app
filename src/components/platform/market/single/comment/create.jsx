import React, { useContext } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FadeTransform } from "react-animation-components";
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import LightStyles from "../../../../../assets/sass/light/market/single.module.scss";
import DarkStyles from "../../../../../assets/sass/dark/market/single.module.scss";
import ColorModeContext from "../../../../../context/color-mode-context";
import fa from "../../../../../lang/fa.json";
import * as yup from "yup";

const schema = yup.object().shape({
  commnet: yup.string().required('فیلد کامنت اجباری است').min(10 , 'کمتر از 10 کلمه نباشد'),
});

export default function Create({ id }) {
  // start function darkmode
  const theme = useTheme();
  const { colorMode , token } = useContext(ColorModeContext);
  // end function darkmode

  // start react hook form
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  // end react hook form

  // start function create comment

  const handelCreateCommnet = async (data) => {

    const mobile = localStorage.getItem("mobile");
    const commnet = data.commnet

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    const bodyParameters = {
      key: "value",
      product_id:id,
      mobile:mobile,
      comment:commnet,
    }

    try {
      const response = await axios.post("https://rasadent.reshe.ir/api/CreateComment" , bodyParameters , config);
      if(response.data.msg){
        toast.error(response.data.msg)
      } else if (response.data.status_code === 200) (
        toast.success('پیام با موفقیت ارسال شد')
      )
      // console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  // end function create comment


  return (
    <FadeTransform in transformProps={{ exitTransform: 'translateX(-100px)' }}>
      <Box sx={{ mt: 3 }}>
        <form onSubmit={handleSubmit(handelCreateCommnet)}>
          <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
            <select>
              <option>{fa["Do you recommend buying this product?"]}</option>
              <option value="1">{fa["yes"]}</option>
              <option value="2">{fa["no"]}</option>
            </select>
          </div>
          <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
            <textarea placeholder={fa["Enter your text..."]} type="text" {...register("commnet")}></textarea>
            <span className="error">{errors.commnet?.message}</span>
          </div>
          <button className={theme.palette.mode === "light" ? LightStyles.btn_send : DarkStyles.btn_send}>
            <span>{fa["submit comment"]}</span>
          </button>
        </form>
      </Box>
    </FadeTransform>
  );
}
