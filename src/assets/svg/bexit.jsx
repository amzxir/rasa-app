import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function Bexit() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmodeˇ
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.7931 9.19385L9.20245 14.7845"
        stroke={theme.palette.mode === "light" ? "#757575" : "#ffffff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.7999 14.7919L9.19989 9.19189"
        stroke={theme.palette.mode === "light" ? "#757575" : "#ffffff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.20831 12.0002C1.20831 20.0933 3.90681 22.7918 12 22.7918C20.0931 22.7918 22.7916 20.0933 22.7916 12.0002C22.7916 3.907 20.0931 1.2085 12 1.2085C3.90681 1.2085 1.20831 3.907 1.20831 12.0002Z"
        stroke={theme.palette.mode === "light" ? "#757575" : "#ffffff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
