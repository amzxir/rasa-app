import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function Pluss() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmodeˇ
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 6.7C14 6.3134 13.6866 6 13.3 6H8.7C8.3134 6 8 5.6866 8 5.3V0.7C8 0.3134 7.6866 0 7.3 0H6.7C6.3134 0 6 0.313401 6 0.7V5.3C6 5.6866 5.6866 6 5.3 6H0.7C0.3134 6 0 6.3134 0 6.7V7.3C0 7.6866 0.313401 8 0.7 8H5.3C5.6866 8 6 8.3134 6 8.7V13.3C6 13.6866 6.3134 14 6.7 14H7.3C7.6866 14 8 13.6866 8 13.3V8.7C8 8.3134 8.3134 8 8.7 8H13.3C13.6866 8 14 7.6866 14 7.3V6.7Z"
        fill={theme.palette.mode === "light" ? "#113D8D" : "#ffffff"}
      />
    </svg>
  );
}
