import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function Negative() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmodeˇ
  return (
    <svg
      width="14"
      height="2"
      viewBox="0 0 14 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0.7C0 0.313401 0.313401 0 0.7 0H13.3C13.6866 0 14 0.313401 14 0.7V1.3C14 1.6866 13.6866 2 13.3 2H0.7C0.313401 2 0 1.6866 0 1.3V0.7Z"
        fill={theme.palette.mode === "light" ? "#113D8D" : "#ffffff"}
      />
    </svg>
  );
}
