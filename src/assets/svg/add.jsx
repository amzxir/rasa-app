import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function Add() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 6H9"
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 9V3"
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
