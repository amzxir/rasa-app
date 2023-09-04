import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function SendPro() {
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
      <rect width="52" height="52" rx="26" fill="#113D8D" />
      <path
        d="M27.1742 17.8955C26.4212 17.5902 25.5789 17.5902 24.8259 17.8955L23.0009 18.6355L30.9942 21.7438L33.8059 20.658C33.6907 20.5623 33.5614 20.485 33.4226 20.4288L27.1742 17.8955ZM34.3334 21.7938L26.6251 24.7721V26.6888C27.1311 26.1453 27.7438 25.7119 28.4249 25.4159C29.106 25.1198 29.8408 24.9673 30.5834 24.968C32.0392 24.968 33.3601 25.5421 34.3334 26.4763V21.793V21.7938ZM25.3751 24.7721V28.893C25.2365 29.3783 25.1663 29.8807 25.1667 30.3855C25.1667 30.903 25.2392 31.4038 25.3751 31.8771V33.8746C25.1873 33.8363 25.0035 33.7808 24.8259 33.7088L18.5776 31.1755C18.3084 31.0665 18.078 30.8796 17.9157 30.6388C17.7534 30.398 17.6667 30.1142 17.6667 29.8238V21.7946L25.3751 24.773V24.7721ZM18.1942 20.658L26.0001 23.6738L29.2642 22.4121L21.3117 19.3205L18.5776 20.4288C18.4359 20.4863 18.3076 20.5638 18.1942 20.658ZM30.5834 34.968C31.799 34.968 32.9648 34.4851 33.8243 33.6256C34.6839 32.766 35.1667 31.6002 35.1667 30.3846C35.1667 29.1691 34.6839 28.0033 33.8243 27.1437C32.9648 26.2842 31.799 25.8013 30.5834 25.8013C29.3678 25.8013 28.2021 26.2842 27.3425 27.1437C26.483 28.0033 26.0001 29.1691 26.0001 30.3846C26.0001 31.6002 26.483 32.766 27.3425 33.6256C28.2021 34.4851 29.3678 34.968 30.5834 34.968ZM32.7884 28.423C32.8665 28.3447 32.9726 28.3007 33.0831 28.3007C33.1937 28.3006 33.2998 28.3444 33.378 28.4226C33.4562 28.5007 33.5002 28.6067 33.5003 28.7173C33.5004 28.8278 33.4565 28.9339 33.3784 29.0121L30.0451 32.3455C30.0064 32.3843 29.9604 32.4151 29.9098 32.4361C29.8592 32.4571 29.8049 32.4679 29.7501 32.4679C29.6953 32.4679 29.641 32.4571 29.5904 32.4361C29.5398 32.4151 29.4938 32.3843 29.4551 32.3455L27.7884 30.6788C27.7497 30.6401 27.7191 30.5941 27.6981 30.5435C27.6772 30.4929 27.6665 30.4387 27.6665 30.3839C27.6666 30.3292 27.6774 30.275 27.6984 30.2244C27.7194 30.1739 27.7501 30.1279 27.7888 30.0892C27.8276 30.0505 27.8736 30.0199 27.9241 29.999C27.9747 29.978 28.029 29.9673 28.0837 29.9673C28.1385 29.9674 28.1927 29.9782 28.2432 29.9992C28.2938 30.0202 28.3397 30.0509 28.3784 30.0896L29.7501 31.4621L32.7884 28.423Z"
        fill="white"
      />
    </svg>
  );
}