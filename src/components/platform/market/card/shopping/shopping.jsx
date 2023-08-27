import React, { useContext } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../../../../context/color-mode-context";
import LightStyles from "../../../../../assets/sass/light/market/shopping.module.scss";
import DarkStyles from "../../../../../assets/sass/dark/market/shopping.module.scss";
import fa from "../../../../../lang/fa.json";

export default function Shopping() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  return (
    <Box sx={{ mt: 5, mb: 5 }}>
      <div>shooping</div>
    </Box>
  );
}
