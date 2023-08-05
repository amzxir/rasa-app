import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function Exit() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmodeˇ
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <path fill="none" d="M1 1h24v24H1z" />
        <path
          fill={theme.palette.mode === "light" ? "#374957" : "#ffffff"}
          d="M18.657 8.757 14.414 13l4.243 4.243-1.414 1.414L13 14.414l-4.243 4.243-1.414-1.414L11.586 13 7.343 8.757l1.414-1.414L13 11.586l4.243-4.243z"
        />
      </g>
    </svg>
  );
}
