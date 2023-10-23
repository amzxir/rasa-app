import React, { useContext } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FadeTransform } from "react-animation-components";
import LightStyles from "../../../../../assets/sass/light/market/single.module.scss";
import DarkStyles from "../../../../../assets/sass/dark/market/single.module.scss";
import ColorModeContext from "../../../../../context/color-mode-context";
import fa from "../../../../../lang/fa.json";

export default function Description({ des }) {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode

  // start change string to element jsx
  const htmlRemoveRegex = /(<([^>]+)>)/gi;
  const description = des.replace(htmlRemoveRegex, '');
  // end change string to element jsx

  return (
    <FadeTransform in transformProps={{ exitTransform: 'translateX(-100px)' }}>
      <Box sx={{ mt: 3 }}>
        <div className={theme.palette.mode === "light" ? LightStyles.comment : DarkStyles.comment}>
          <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["Description"]}</p>
          <p>{description}</p>
        </div>
      </Box>
    </FadeTransform>
  );
}
