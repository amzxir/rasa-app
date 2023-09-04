import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function Faqs() {
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
        d="M13.4709 7.90335V5.75435C13.4399 3.23535 11.3719 1.21935 8.8539 1.25035C6.3869 1.28135 4.3919 3.26735 4.3499 5.73435V7.90335"
        stroke={theme.palette.mode === "light" ? "#212121" : "#ffffff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.91029 12.6562V14.8772"
        stroke={theme.palette.mode === "light" ? "#212121" : "#ffffff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.9103 7.32422C3.1653 7.32422 1.2503 8.89222 1.2503 13.5952C1.2503 18.2992 3.1653 19.8672 8.9103 19.8672C14.6553 19.8672 16.5713 18.2992 16.5713 13.5952C16.5713 8.89222 14.6553 7.32422 8.9103 7.32422Z"
        stroke={theme.palette.mode === "light" ? "#212121" : "#ffffff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
