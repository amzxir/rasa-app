import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function Comments() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_20_218)">
        <path
          d="M22 14.6666V19.2499C22 19.9792 21.7103 20.6787 21.1945 21.1944C20.6788 21.7102 19.9793 21.9999 19.25 21.9999H14.6667C13.3807 21.9986 12.1176 21.6591 11.0043 21.0155C9.89089 20.372 8.96633 19.4469 8.32333 18.3332C9.01438 18.3283 9.70308 18.2521 10.3785 18.1059C10.8929 18.7491 11.5454 19.2683 12.2877 19.625C13.03 19.9817 13.8431 20.1668 14.6667 20.1666H19.25C19.4931 20.1666 19.7263 20.07 19.8982 19.8981C20.0701 19.7262 20.1667 19.493 20.1667 19.2499V14.6666C20.1665 13.8427 19.9808 13.0294 19.6234 12.2871C19.2661 11.5448 18.7462 10.8924 18.1023 10.3784C18.2498 9.7031 18.3272 9.01441 18.3333 8.32323C19.447 8.96623 20.3721 9.89079 21.0156 11.0042C21.6592 12.1175 21.9987 13.3806 22 14.6666ZM16.4789 8.84665C16.5646 7.66565 16.3952 6.48004 15.9819 5.37037C15.5687 4.2607 14.9215 3.25299 14.0842 2.4157C13.2469 1.57841 12.2392 0.93117 11.1295 0.517959C10.0199 0.104748 8.83425 -0.0647504 7.65325 0.0209815C5.56042 0.259986 3.62718 1.25589 2.21758 2.82116C0.807974 4.38643 0.0192749 6.41306 0 8.5194L0 13.1394C0 15.4604 1.38142 16.4999 2.75 16.4999H7.975C10.0822 16.4818 12.1101 15.6936 13.6765 14.2839C15.2429 12.8742 16.2396 10.9403 16.4789 8.84665ZM12.7875 3.71332C13.4383 4.36553 13.9414 5.14991 14.2627 6.0134C14.5841 6.87689 14.7162 7.79934 14.6502 8.71832C14.4545 10.3534 13.668 11.8605 12.4386 12.956C11.2091 14.0515 9.62169 14.6599 7.975 14.6666H2.75C1.89933 14.6666 1.83333 13.4978 1.83333 13.1394V8.5194C1.84098 6.87341 2.44993 5.28696 3.54559 4.0586C4.64125 2.83025 6.14808 2.04468 7.7825 1.84973C7.93467 1.83873 8.08683 1.83323 8.239 1.83323C9.0835 1.83244 9.91987 1.99808 10.7003 2.32068C11.4808 2.64327 12.19 3.1165 12.7875 3.71332Z"
          fill={theme.palette.mode === "light" ? "#374957" : "#ffffff"}
          />
      </g>
      <defs>
        <clipPath id="clip0_20_218">
          <rect width="22" height="22" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
