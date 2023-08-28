import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function Pin() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="52" height="52" rx="26" fill="#113D8D" fill-opacity="0.08" />
      <rect x="8" y="8" width="36" height="36" rx="18" fill="#113D8D" />
      <path
        fillrRule="evenodd"
        clipRule="evenodd"
        d="M18.9167 24.598C18.9167 20.7647 22.1199 17.6665 25.9946 17.6665C29.8801 17.6665 33.0834 20.7647 33.0834 24.598C33.0834 26.5296 32.3809 28.3229 31.2246 29.8428C29.949 31.5194 28.3768 32.9802 26.6071 34.1269C26.2021 34.3919 25.8366 34.4119 25.3921 34.1269C23.6123 32.9802 22.0401 31.5194 20.7754 29.8428C19.6183 28.3229 18.9167 26.5296 18.9167 24.598ZM23.6619 24.8138C23.6619 26.0979 24.7097 27.1079 25.9946 27.1079C27.2802 27.1079 28.3382 26.0979 28.3382 24.8138C28.3382 23.5397 27.2802 22.4805 25.9946 22.4805C24.7097 22.4805 23.6619 23.5397 23.6619 24.8138Z"
        fill="white"
      />
    </svg>
  );
}
