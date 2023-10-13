import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function Edits() {
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
        d="M13.3352 19.5078H19.7122"
        stroke={theme.palette.mode === "light" ? "#252525" : "#fff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0578 4.85877V4.85877C14.7138 3.85077 12.8078 4.12277 11.7998 5.46577C11.7998 5.46577 6.78679 12.1438 5.04779 14.4608C3.30879 16.7788 4.95379 19.6508 4.95379 19.6508C4.95379 19.6508 8.19779 20.3968 9.91179 18.1118C11.6268 15.8278 16.6638 9.11677 16.6638 9.11677C17.6718 7.77377 17.4008 5.86677 16.0578 4.85877Z"
        stroke={theme.palette.mode === "light" ? "#252525" : "#fff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5041 7.21094L15.3681 10.8619"
        stroke={theme.palette.mode === "light" ? "#252525" : "#fff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
