import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function Bookmark() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmodeˇ
  return (
    <svg
      width="20"
      height="25"
      viewBox="0 0 20 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.96606 9.25374H13.9636"
        stroke={theme.palette.mode === "light" ? "#113D8D" : "#3383F9"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.96528 1.4165C2.51378 1.4165 1.25495 2.50384 1.25495 11.2503C1.25495 21.0422 1.07178 23.5832 2.93378 23.5832C4.79462 23.5832 7.83378 19.2852 9.96528 19.2852C12.0968 19.2852 15.1359 23.5832 16.9968 23.5832C18.8588 23.5832 18.6756 21.0422 18.6756 11.2503C18.6756 2.50384 17.4168 1.4165 9.96528 1.4165Z"
        stroke={theme.palette.mode === "light" ? "#113D8D" : "#3383F9"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
