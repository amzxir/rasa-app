import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function Pins() {
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
        d="M11.5102 9.21047C11.5102 7.8292 10.391 6.70996 9.0097 6.70996C7.62944 6.70996 6.51021 7.8292 6.51021 9.21047C6.51021 10.5907 7.62944 11.71 9.0097 11.71C10.391 11.71 11.5102 10.5907 11.5102 9.21047Z"
        stroke={theme.palette.mode === "light" ? "#212121" : "#ffffff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99951 19.5C6.10148 19.5 1.5 14.4587 1.5 9.09864C1.5 4.90246 4.8571 1.5 8.99951 1.5C13.1419 1.5 16.5 4.90246 16.5 9.09864C16.5 14.4587 11.8985 19.5 8.99951 19.5Z"
        stroke={theme.palette.mode === "light" ? "#212121" : "#ffffff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
