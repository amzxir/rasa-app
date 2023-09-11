import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function Pencil() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_387_4800)">
        <path
          d="M14.2832 0.717227C13.8583 0.292975 13.2824 0.0546875 12.682 0.0546875C12.0815 0.0546875 11.5056 0.292975 11.0807 0.717227L0.91572 10.8822C0.624627 11.1717 0.393822 11.516 0.236657 11.8952C0.0794915 12.2745 -0.000912905 12.6811 9.5194e-05 13.0916V14.3747C9.5194e-05 14.5405 0.0659432 14.6995 0.183153 14.8167C0.300364 14.9339 0.459335 14.9997 0.625095 14.9997H1.90822C2.3187 15.0009 2.72533 14.9206 3.10457 14.7636C3.48381 14.6065 3.82813 14.3758 4.11759 14.0847L14.2832 3.9191C14.7073 3.49422 14.9454 2.91846 14.9454 2.31816C14.9454 1.71787 14.7073 1.14211 14.2832 0.717227ZM3.23384 13.201C2.88135 13.5511 2.40507 13.7483 1.90822 13.7497H1.2501V13.0916C1.24946 12.8453 1.29769 12.6013 1.39199 12.3738C1.48629 12.1462 1.62479 11.9396 1.79947 11.766L9.51385 4.0516L10.9513 5.4891L3.23384 13.201ZM13.3988 3.03535L11.8326 4.60223L10.3951 3.16785L11.962 1.60098C12.0564 1.50679 12.1684 1.43213 12.2916 1.38123C12.4149 1.33034 12.5469 1.30422 12.6803 1.30437C12.8136 1.30451 12.9456 1.33092 13.0687 1.38208C13.1919 1.43324 13.3037 1.50815 13.3979 1.60254C13.4921 1.69693 13.5668 1.80894 13.6177 1.93219C13.6685 2.05543 13.6947 2.18749 13.6945 2.32083C13.6944 2.45417 13.668 2.58618 13.6168 2.70931C13.5656 2.83244 13.4907 2.94429 13.3963 3.03848L13.3988 3.03535Z"
          fill={theme.palette.mode === "light" ? "#374957" : "#ffffff"}
        />
      </g>
      <defs>
        <clipPath id="clip0_387_4800">
          <rect width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}