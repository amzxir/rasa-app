import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function ArrowSmallLeft() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4583 7.79161H6.375L8.70542 5.4612C8.77181 5.39535 8.8245 5.31701 8.86046 5.23069C8.89643 5.14437 8.91494 5.05179 8.91494 4.95828C8.91494 4.86478 8.89643 4.77219 8.86046 4.68588C8.8245 4.59956 8.77181 4.52122 8.70542 4.45537C8.5727 4.32344 8.39317 4.24939 8.20604 4.24939C8.01891 4.24939 7.83938 4.32344 7.70667 4.45537L4.66792 7.5012C4.40188 7.76565 4.25158 8.12483 4.25 8.49995C4.25345 8.8726 4.4036 9.22889 4.66792 9.49161L7.70667 12.5374C7.77271 12.603 7.85102 12.6549 7.93714 12.6903C8.02325 12.7256 8.11547 12.7436 8.20855 12.7433C8.30162 12.7429 8.39371 12.7243 8.47957 12.6883C8.56543 12.6524 8.64338 12.5999 8.70896 12.5339C8.77454 12.4679 8.82647 12.3895 8.86178 12.3034C8.89709 12.2173 8.9151 12.1251 8.91477 12.032C8.91444 11.9389 8.89578 11.8469 8.85986 11.761C8.82394 11.6751 8.77146 11.5972 8.70542 11.5316L6.375 9.20828H13.4583C13.6462 9.20828 13.8264 9.13365 13.9592 9.00081C14.092 8.86797 14.1667 8.68781 14.1667 8.49995C14.1667 8.31208 14.092 8.13192 13.9592 7.99908C13.8264 7.86624 13.6462 7.79161 13.4583 7.79161Z"
        fill={theme.palette.mode === "light" ? "#374957" : "#ffffff"}
        />
    </svg>
  );
}
