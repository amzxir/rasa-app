import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function Compare() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmodeˇ
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.06982 15.8298L9.56166 11.2926L13.5447 14.4193L16.9618 10.0093"
        stroke={theme.palette.mode === "light" ? "#113D8D" : "#3383F9"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.945 1.2417C22.184 1.2417 23.1873 2.24503 23.1873 3.48403C23.1873 4.72187 22.184 5.72637 20.945 5.72637C19.706 5.72637 18.7026 4.72187 18.7026 3.48403C18.7026 2.24503 19.706 1.2417 20.945 1.2417Z"
        stroke={theme.palette.mode === "light" ? "#113D8D" : "#3383F9"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.2147 9.31401C22.3698 10.3582 22.441 11.5342 22.441 12.8537C22.441 20.948 19.7437 23.6453 11.6493 23.6453C3.55617 23.6453 0.857666 20.948 0.857666 12.8537C0.857666 4.76051 3.55617 2.06201 11.6493 2.06201C12.9443 2.06201 14.1005 2.13085 15.1295 2.28018"
        stroke={theme.palette.mode === "light" ? "#113D8D" : "#3383F9"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
