import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function AppsBars() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmodeˇ
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_320_1213)">
        <path
          d="M5.25 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3L0 5.25C0 6.04565 0.316071 6.80871 0.87868 7.37132C1.44129 7.93393 2.20435 8.25 3 8.25H5.25C6.04565 8.25 6.80871 7.93393 7.37132 7.37132C7.93393 6.80871 8.25 6.04565 8.25 5.25V3C8.25 2.20435 7.93393 1.44129 7.37132 0.87868C6.80871 0.316071 6.04565 0 5.25 0V0ZM6.75 5.25C6.75 5.64782 6.59196 6.02936 6.31066 6.31066C6.02936 6.59196 5.64782 6.75 5.25 6.75H3C2.60218 6.75 2.22064 6.59196 1.93934 6.31066C1.65804 6.02936 1.5 5.64782 1.5 5.25V3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H5.25C5.64782 1.5 6.02936 1.65804 6.31066 1.93934C6.59196 2.22064 6.75 2.60218 6.75 3V5.25Z"
          fill={theme.palette.mode === "light" ? "#374957" : "#ffffff"}
        />
        <path
          d="M5.25 9.75H3C2.20435 9.75 1.44129 10.0661 0.87868 10.6287C0.316071 11.1913 0 11.9544 0 12.75L0 15C0 15.7957 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H5.25C6.04565 18 6.80871 17.6839 7.37132 17.1213C7.93393 16.5587 8.25 15.7957 8.25 15V12.75C8.25 11.9544 7.93393 11.1913 7.37132 10.6287C6.80871 10.0661 6.04565 9.75 5.25 9.75ZM6.75 15C6.75 15.3978 6.59196 15.7794 6.31066 16.0607C6.02936 16.342 5.64782 16.5 5.25 16.5H3C2.60218 16.5 2.22064 16.342 1.93934 16.0607C1.65804 15.7794 1.5 15.3978 1.5 15V12.75C1.5 12.3522 1.65804 11.9706 1.93934 11.6893C2.22064 11.408 2.60218 11.25 3 11.25H5.25C5.64782 11.25 6.02936 11.408 6.31066 11.6893C6.59196 11.9706 6.75 12.3522 6.75 12.75V15Z"
          fill={theme.palette.mode === "light" ? "#374957" : "#ffffff"}
        />
        <path
          d="M15 9.75H12.75C11.9543 9.75 11.1913 10.0661 10.6287 10.6287C10.0661 11.1913 9.75 11.9544 9.75 12.75V15C9.75 15.7957 10.0661 16.5587 10.6287 17.1213C11.1913 17.6839 11.9543 18 12.75 18H15C15.7956 18 16.5587 17.6839 17.1213 17.1213C17.6839 16.5587 18 15.7957 18 15V12.75C18 11.9544 17.6839 11.1913 17.1213 10.6287C16.5587 10.0661 15.7956 9.75 15 9.75ZM16.5 15C16.5 15.3978 16.342 15.7794 16.0607 16.0607C15.7793 16.342 15.3978 16.5 15 16.5H12.75C12.3522 16.5 11.9706 16.342 11.6893 16.0607C11.408 15.7794 11.25 15.3978 11.25 15V12.75C11.25 12.3522 11.408 11.9706 11.6893 11.6893C11.9706 11.408 12.3522 11.25 12.75 11.25H15C15.3978 11.25 15.7793 11.408 16.0607 11.6893C16.342 11.9706 16.5 12.3522 16.5 12.75V15Z"
          fill={theme.palette.mode === "light" ? "#374957" : "#ffffff"}
        />
        <path
          d="M10.5 5.25H12.75V7.5C12.75 7.69891 12.829 7.88968 12.9697 8.03033C13.1103 8.17098 13.3011 8.25 13.5 8.25C13.6989 8.25 13.8897 8.17098 14.0303 8.03033C14.171 7.88968 14.25 7.69891 14.25 7.5V5.25H16.5C16.6989 5.25 16.8897 5.17098 17.0303 5.03033C17.171 4.88968 17.25 4.69891 17.25 4.5C17.25 4.30109 17.171 4.11032 17.0303 3.96967C16.8897 3.82902 16.6989 3.75 16.5 3.75H14.25V1.5C14.25 1.30109 14.171 1.11032 14.0303 0.96967C13.8897 0.829018 13.6989 0.75 13.5 0.75C13.3011 0.75 13.1103 0.829018 12.9697 0.96967C12.829 1.11032 12.75 1.30109 12.75 1.5V3.75H10.5C10.3011 3.75 10.1103 3.82902 9.96967 3.96967C9.82902 4.11032 9.75 4.30109 9.75 4.5C9.75 4.69891 9.82902 4.88968 9.96967 5.03033C10.1103 5.17098 10.3011 5.25 10.5 5.25Z"
          fill={theme.palette.mode === "light" ? "#374957" : "#ffffff"}
        />
      </g>
      <defs>
        <clipPath id="clip0_320_1213">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
