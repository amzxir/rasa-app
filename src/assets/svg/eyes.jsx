import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function Eyes() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  return (
    <svg
      width="21"
      height="17"
      viewBox="0 0 21 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.1643 8.55165C13.1643 10.2976 11.7483 11.7136 10.0023 11.7136C8.2563 11.7136 6.8403 10.2976 6.8403 8.55165C6.8403 6.80465 8.2563 5.38965 10.0023 5.38965C11.7483 5.38965 13.1643 6.80465 13.1643 8.55165Z"
        stroke={theme.palette.mode === "light" ? "#212121" : "#ffffff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.750298 8.552C0.750298 11.832 4.8923 15.854 10.0023 15.854C15.1113 15.854 19.2543 11.835 19.2543 8.552C19.2543 5.269 15.1113 1.25 10.0023 1.25C4.8923 1.25 0.750298 5.272 0.750298 8.552Z"
        stroke={theme.palette.mode === "light" ? "#212121" : "#ffffff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
