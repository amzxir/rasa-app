import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function HeartSingle() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmodeˇ
  return (
    <svg
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.35059 11.0314C0.0987576 7.12304 1.56176 2.65588 5.66492 1.33404C7.82326 0.637542 10.2056 1.04821 11.9999 2.39804C13.6974 1.08554 16.1673 0.642209 18.3233 1.33404C22.4264 2.65588 23.8988 7.12304 22.6481 11.0314C20.6998 17.2264 11.9999 21.998 11.9999 21.998C11.9999 21.998 3.36426 17.2987 1.35059 11.0314Z"
        stroke={theme.palette.mode === "light" ? "#113D8D" : "#ffffff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6667 5.31689C17.9151 5.72056 18.7971 6.83473 18.9032 8.14256"
        stroke={theme.palette.mode === "light" ? "#113D8D" : "#ffffff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
