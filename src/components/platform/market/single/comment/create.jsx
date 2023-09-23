import React , { useContext } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LightStyles from "../../../../../assets/sass/light/market/single.module.scss";
import DarkStyles from "../../../../../assets/sass/dark/market/single.module.scss";
import ColorModeContext from "../../../../../context/color-mode-context";
import fa from "../../../../../lang/fa.json";

export default function Create() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  return (
    <Box sx={{ mt:3 }}>
        <form>
            <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
              <select>
                  <option>{fa["Do you recommend buying this product?"]}</option>
                  <option value="1">{fa["yes"]}</option>
                  <option value="2">{fa["no"]}</option>
              </select>
            </div>
            <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
              <textarea placeholder={fa["Enter your text..."]} type="text" ></textarea>
            </div>
            <button className={theme.palette.mode === "light" ? LightStyles.btn_send : DarkStyles.btn_send}>
              <span>{fa["submit comment"]}</span>
            </button>
        </form>
    </Box>
  );
}
