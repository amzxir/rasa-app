import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function Person() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 36 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.19998 5.34938C8.69061 5.34938 9.84936 4.14 9.84936 2.7C9.84936 1.26 8.69061 0 7.19998 0C5.70936 0 4.50054 1.20937 4.50054 2.64937C4.50054 4.08938 5.70936 5.34938 7.19998 5.34938ZM28.7494 5.34938C30.24 5.34938 31.3987 4.14 31.3987 2.7C31.3987 1.26 30.2906 0 28.7494 0C27.2587 0 26.0494 1.20937 26.0494 2.64937C26.0494 4.08938 27.3094 5.34938 28.7494 5.34938ZM33.9469 14.5294L32.9062 10.0221C32.6461 8.89706 31.8589 7.94756 30.7969 7.49756C29.7562 7.04756 28.6537 7.11788 27.6401 7.68038C26.3677 8.433 25.4115 9.621 24.9334 11.0205L24.3005 12.9263L23.4512 13.5028L23.3494 8.1C23.3494 7.60781 22.9415 7.2 22.4494 7.2H13.5C13.0078 7.2 12.6 7.60781 12.6 8.1V13.4494L11.6932 12.8728L11.0604 10.9671C10.5893 9.56081 9.63279 8.37956 8.35367 7.62694C7.38336 7.06444 6.23698 6.99412 5.19692 7.44413C4.13492 7.89412 3.34742 8.84363 3.08754 9.96863L2.05423 14.4759C1.79408 15.6009 2.09642 16.7963 2.86254 17.6681L6.64536 21.9364L7.21461 27.1468C7.31248 28.1138 8.08873 28.8 8.99998 28.8C9.07029 28.8 9.12654 28.793 9.19686 28.7859C10.188 28.6805 10.8984 27.7948 10.7859 26.8031L10.2234 21.5859C10.139 20.8547 9.82967 20.1729 9.34479 19.6172L6.90523 16.8609L7.89636 12.9021L8.28313 14.0484C8.50813 14.7516 8.95082 15.3703 9.66126 15.8839L12.53 17.712C12.7901 17.8737 13.2118 17.9722 13.5003 17.9933H22.4497C22.738 17.9722 23.1596 17.8737 23.42 17.712L26.2888 15.8839C26.9986 15.3706 27.4419 14.7589 27.6669 14.0484L28.0536 12.9021L29.0453 16.8609L26.6057 19.6172C26.1206 20.1727 25.8115 20.8547 25.7271 21.5859L25.1646 26.8031C25.0521 27.7943 25.7693 28.6808 26.7537 28.7859C26.8706 28.7944 26.9269 28.8 26.9494 28.8C27.8561 28.8 28.5862 28.1183 28.7353 27.1969L29.3045 21.9864L33.1369 17.7188C33.9019 16.8469 34.2056 15.6544 33.9469 14.5294ZM2.60211 20.1431L0.127106 26.3306C-0.238519 27.252 0.211481 28.2994 1.13286 28.6723C2.07504 29.0379 3.10836 28.5739 3.47398 27.6666L5.02761 23.778L4.91511 22.7514L2.60211 20.1431ZM35.8706 26.3306L33.4462 20.1431L31.1327 22.752L31.0202 23.7786L32.5738 27.6671C32.805 28.3725 33.48 28.8 34.1494 28.8C34.3742 28.8 34.5992 28.7578 34.817 28.6734C35.7862 28.2994 36.2362 27.2531 35.8706 26.3306Z"
        fill={theme.palette.mode === "light" ? "#9E9E9E" : "#ffffff"}
      />
    </svg>
  );
}