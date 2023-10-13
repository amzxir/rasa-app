import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function Layout() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_937_4828)">
        <path
          d="M1.66667 9.16667H10.8333C11.2754 9.16667 11.6993 8.99107 12.0118 8.67851C12.3244 8.36595 12.5 7.94203 12.5 7.5V1.66667C12.5 1.22464 12.3244 0.800716 12.0118 0.488155C11.6993 0.175595 11.2754 0 10.8333 0L1.66667 0C1.22464 0 0.800716 0.175595 0.488155 0.488155C0.175595 0.800716 0 1.22464 0 1.66667L0 7.5C0 7.94203 0.175595 8.36595 0.488155 8.67851C0.800716 8.99107 1.22464 9.16667 1.66667 9.16667ZM1.66667 1.66667H10.8333V7.5H1.66667V1.66667Z"
          fill={theme.palette.mode === "light" ? "#6D6D6D" : "#ffffff"}
        />
        <path
          d="M18.3335 0H15.8335C15.3914 0 14.9675 0.175595 14.6549 0.488155C14.3424 0.800716 14.1668 1.22464 14.1668 1.66667V7.5C14.1668 7.94203 14.3424 8.36595 14.6549 8.67851C14.9675 8.99107 15.3914 9.16667 15.8335 9.16667H18.3335C18.7755 9.16667 19.1994 8.99107 19.512 8.67851C19.8245 8.36595 20.0001 7.94203 20.0001 7.5V1.66667C20.0001 1.22464 19.8245 0.800716 19.512 0.488155C19.1994 0.175595 18.7755 0 18.3335 0V0ZM18.3335 7.5H15.8335V1.66667H18.3335V7.5Z"
          fill={theme.palette.mode === "light" ? "#6D6D6D" : "#ffffff"}
        />
        <path
          d="M4.16667 10.834H1.66667C1.22464 10.834 0.800716 11.0096 0.488155 11.3221C0.175595 11.6347 0 12.0586 0 12.5006L0 18.334C0 18.776 0.175595 19.1999 0.488155 19.5125C0.800716 19.825 1.22464 20.0006 1.66667 20.0006H4.16667C4.60869 20.0006 5.03262 19.825 5.34518 19.5125C5.65774 19.1999 5.83333 18.776 5.83333 18.334V12.5006C5.83333 12.0586 5.65774 11.6347 5.34518 11.3221C5.03262 11.0096 4.60869 10.834 4.16667 10.834ZM4.16667 18.334H1.66667V12.5006H4.16667V18.334Z"
          fill={theme.palette.mode === "light" ? "#6D6D6D" : "#ffffff"}
        />
        <path
          d="M18.3333 10.834H9.16667C8.72464 10.834 8.30072 11.0096 7.98816 11.3221C7.6756 11.6347 7.5 12.0586 7.5 12.5006V18.334C7.5 18.776 7.6756 19.1999 7.98816 19.5125C8.30072 19.825 8.72464 20.0006 9.16667 20.0006H18.3333C18.7754 20.0006 19.1993 19.825 19.5118 19.5125C19.8244 19.1999 20 18.776 20 18.334V12.5006C20 12.0586 19.8244 11.6347 19.5118 11.3221C19.1993 11.0096 18.7754 10.834 18.3333 10.834ZM18.3333 18.334H9.16667V12.5006H18.3333V18.334Z"
          fill={theme.palette.mode === "light" ? "#6D6D6D" : "#ffffff"}
        />
      </g>
      <defs>
        <clipPath id="clip0_937_4828">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
