import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../context/color-mode-context";

export default function Notif() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmodeˇ
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <g>
              <g>
                <path
                  fill={theme.palette.mode === "light" ? "#374957" : "#ffffff"}
                  fillOpacity="0"
                  d="M0 0H24V24H0z"
                  transform="translate(-320 -276) translate(64) translate(0 264) translate(256 12)"
                />
                <path
                  fill={theme.palette.mode === "light" ? "#374957" : "#ffffff"}
                  d="M6.873 10.653c.085-1.278.598-2.448 1.443-3.292.957-.958 2.144-1.443 3.53-1.443 2.74 0 4.97 2.268 4.97 5.055 0 3.288.569 5.089 1.135 6.066H5.689c.582-.956 1.184-2.764 1.184-6.15v-.236zM19.92 16.89l-.105-.407-.049-.049c-.012-.01-1.105-1.135-1.186-5.551-.08-3.5-2.532-6.208-5.847-6.655V1.48h-2v2.758c-1.422.213-2.715.863-3.78 1.927-1.314 1.315-2.01 2.978-2.01 4.808v.337c0 2.057-.33 3.396-.577 4.216-.227.683-.527.995-.528.997l-.338.335.204 2.028h16.123l.101-1.597-.008-.399zM13.369 19.703c-.291.572-.903.957-1.523.957-.675 0-1.262-.363-1.531-.948l-.067-.146-1.813-.001.14.493c.466 1.489 1.75 2.45 3.27 2.45 1.584 0 2.837-.974 3.272-2.54l.117-.403h-1.796l-.07.138z"
                  transform="translate(-320 -276) translate(64) translate(0 264) translate(256 12)"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
