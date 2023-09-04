import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function Setting() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  return (
    <svg
      width="18"
      height="21"
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.9845 20.106C11.3195 20.106 16.6565 17.784 16.6565 11.379C16.6565 4.97498 16.9345 4.47398 16.3195 3.85798C15.7035 3.24198 12.4935 1.25098 8.9845 1.25098C5.4755 1.25098 2.2655 3.24198 1.6505 3.85798C1.0345 4.47398 1.3125 4.97498 1.3125 11.379C1.3125 17.784 6.6505 20.106 8.9845 20.106Z"
        stroke={theme.palette.mode === "light" ? "#212121" : "#ffffff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.38589 10.3751L8.27789 12.2701L12.1759 8.37012"
        stroke={theme.palette.mode === "light" ? "#212121" : "#ffffff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
