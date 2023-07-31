import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function Navigation() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5304 3.54969C15.8232 3.84258 15.8232 4.31745 15.5304 4.61035L9.01036 11.1303C8.53325 11.6075 8.53325 12.3926 9.01036 12.8697L15.5304 19.3897C15.8232 19.6826 15.8232 20.1575 15.5304 20.4503C15.2375 20.7432 14.7626 20.7432 14.4697 20.4503L7.9497 13.9303C6.8868 12.8675 6.8868 11.1326 7.9497 10.0697L14.4697 3.54969C14.7626 3.25679 15.2375 3.25679 15.5304 3.54969Z"
        fill={theme.palette.mode === "light" ? "#14130E" : "#ffffff"}

      />
    </svg>
  );
}
