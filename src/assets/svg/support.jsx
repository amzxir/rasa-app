import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function Support() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.2502 10.5C19.2502 17.437 16.9372 19.75 10.0002 19.75C3.0632 19.75 0.750198 17.437 0.750198 10.5C0.750198 3.563 3.0632 1.25 10.0002 1.25C16.9372 1.25 19.2502 3.563 19.2502 10.5Z"
        stroke={theme.palette.mode === "light" ? "#212121" : "#ffffff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0002 14.3955V10.5005"
        stroke={theme.palette.mode === "light" ? "#212121" : "#ffffff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0045 7H9.9955"
        stroke={theme.palette.mode === "light" ? "#212121" : "#ffffff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
