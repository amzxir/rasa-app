import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function CloseBox() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmodeˇ
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.1135 0.412156C15.7581 -0.137385 14.2419 -0.137385 12.8865 0.412156L9.6015 1.74416L23.9895 7.33916L29.0505 5.38466C28.8431 5.21249 28.6103 5.07335 28.3605 4.97216L17.1135 0.412156ZM30 7.42916L16.125 12.7902V29.1747C16.461 29.1072 16.791 29.0067 17.1135 28.8762L28.3605 24.3162C28.8449 24.1199 29.2598 23.7835 29.5519 23.3501C29.844 22.9166 30 22.4058 30 21.8832V7.43066V7.42916ZM13.875 29.1747V12.7902L0 7.42916V21.8847C0.000295528 22.4071 0.156471 22.9175 0.44854 23.3507C0.74061 23.7839 1.15529 24.12 1.6395 24.3162L12.8865 28.8762C13.209 29.0067 13.539 29.1057 13.875 29.1762V29.1747ZM0.9495 5.38466L15 10.8132L20.8755 8.54216L6.561 2.97716L1.6395 4.97216C1.3845 5.07566 1.1535 5.21516 0.9495 5.38466Z"
        fill={theme.palette.mode === "light" ? "#9E9E9E" : "#ffffff"}

      />
    </svg>
  );
}
