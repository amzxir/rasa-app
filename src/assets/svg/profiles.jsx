import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function Profile() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  return (
    <svg
      width="16"
      height="21"
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.84455 20.1623C4.15273 20.1623 1 19.5878 1 17.287C1 14.9862 4.13273 12.8623 7.84455 12.8623C11.5364 12.8623 14.6891 14.9657 14.6891 17.2664C14.6891 19.5663 11.5564 20.1623 7.84455 20.1623Z"
        stroke={theme.palette.mode === "light" ? "#212121" : "#ffffff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.8373 9.67403C10.26 9.67403 12.2237 7.71039 12.2237 5.28766C12.2237 2.86494 10.26 0.900391 7.8373 0.900391C5.41457 0.900391 3.45002 2.86494 3.45002 5.28766C3.44184 7.70221 5.39184 9.66585 7.80639 9.67403C7.8173 9.67403 7.8273 9.67403 7.8373 9.67403Z"
        stroke={theme.palette.mode === "light" ? "#212121" : "#ffffff"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
