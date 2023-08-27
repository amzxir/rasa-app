import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function Delete() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmodeˇ
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.741 6.96191C13.741 13.6445 14.7029 16.6651 8.23301 16.6651C1.76238 16.6651 2.74413 13.6445 2.74413 6.96191"
        stroke={theme.palette.mode === "light" ? "#212121" : "#ffffff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9709 4.39975H1.51221"
        stroke={theme.palette.mode === "light" ? "#212121" : "#ffffff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0957 4.39981C11.0957 4.39981 11.5362 1.26172 8.24095 1.26172C4.9465 1.26172 5.38698 4.39981 5.38698 4.39981"
        stroke={theme.palette.mode === "light" ? "#212121" : "#ffffff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
