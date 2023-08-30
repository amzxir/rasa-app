import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function Pays() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmodeˇ
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="52" height="52" rx="26" fill="#113D8D" />
      <g clipPath="url(#clip0_367_3180)">
        <path
          d="M26 16C24.0222 16 22.0888 16.5865 20.4443 17.6853C18.7998 18.7841 17.5181 20.3459 16.7612 22.1732C16.0043 24.0004 15.8063 26.0111 16.1922 27.9509C16.578 29.8907 17.5304 31.6725 18.9289 33.0711C20.3275 34.4696 22.1093 35.422 24.0491 35.8079C25.9889 36.1937 27.9996 35.9957 29.8268 35.2388C31.6541 34.4819 33.2159 33.2002 34.3147 31.5557C35.4135 29.9112 36 27.9778 36 26C35.9971 23.3487 34.9426 20.8068 33.0679 18.9321C31.1932 17.0574 28.6513 16.0029 26 16V16ZM26 34.3333C24.3518 34.3333 22.7407 33.8446 21.3703 32.9289C19.9998 32.0132 18.9317 30.7117 18.301 29.189C17.6703 27.6663 17.5053 25.9908 17.8268 24.3742C18.1483 22.7577 18.942 21.2729 20.1074 20.1074C21.2729 18.942 22.7577 18.1483 24.3743 17.8268C25.9908 17.5052 27.6663 17.6703 29.189 18.301C30.7118 18.9317 32.0132 19.9998 32.9289 21.3702C33.8446 22.7407 34.3333 24.3518 34.3333 26C34.3309 28.2094 33.4522 30.3276 31.8899 31.8899C30.3276 33.4522 28.2094 34.3309 26 34.3333Z"
          fill="white"
        />
        <path
          d="M25.9999 21.833C25.1758 21.833 24.3702 22.0774 23.685 22.5352C22.9998 22.9931 22.4658 23.6438 22.1504 24.4052C21.8351 25.1665 21.7525 26.0043 21.9133 26.8126C22.0741 27.6208 22.4709 28.3632 23.0536 28.946C23.6364 29.5287 24.3788 29.9255 25.187 30.0863C25.9953 30.2471 26.8331 30.1645 27.5944 29.8492C28.3558 29.5338 29.0065 28.9998 29.4644 28.3146C29.9222 27.6293 30.1666 26.8238 30.1666 25.9997C30.1653 24.895 29.7259 23.836 28.9447 23.0549C28.1636 22.2737 27.1046 21.8343 25.9999 21.833ZM25.9999 28.4997C25.5055 28.4997 25.0221 28.3531 24.611 28.0783C24.1999 27.8036 23.8794 27.4132 23.6902 26.9564C23.501 26.4996 23.4515 25.9969 23.548 25.5119C23.6444 25.027 23.8825 24.5815 24.2322 24.2319C24.5818 23.8823 25.0272 23.6442 25.5122 23.5477C25.9971 23.4512 26.4998 23.5008 26.9566 23.69C27.4134 23.8792 27.8039 24.1996 28.0786 24.6107C28.3533 25.0219 28.4999 25.5052 28.4999 25.9997C28.4999 26.6627 28.2365 27.2986 27.7677 27.7674C27.2988 28.2363 26.663 28.4997 25.9999 28.4997Z"
          fill="white"
        />
        <path
          d="M26.0001 26.8337C26.4603 26.8337 26.8334 26.4606 26.8334 26.0003C26.8334 25.5401 26.4603 25.167 26.0001 25.167C25.5398 25.167 25.1667 25.5401 25.1667 26.0003C25.1667 26.4606 25.5398 26.8337 26.0001 26.8337Z"
          fill="#374957"
        />
      </g>
      <defs>
        <clipPath id="clip0_367_3180">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(16 16)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
