import React, { useState, useEffect , useContext} from "react";
import { useTheme } from "@mui/material/styles";
import LightStyles from "../../assets/sass/light/network.module.scss";
import DarkStyles from "../../assets/sass/dark/network.module.scss";
import fa from "../../lang/fa.json";
import ColorModeContext from "../../context/color-mode-context";

export default function Network(props) {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  // state variable holds the state of the internet connection
  const [isOnline, setOnline] = useState(true);

  // On initization set the isOnline state.
  useEffect(() => {
    setOnline(navigator.onLine);
  }, []);

  // event listeners to update the state
  window.addEventListener("online", () => {
    setOnline(true);
  });

  window.addEventListener("offline", () => {
    setOnline(false);
  });
  if (isOnline) {
    return props.children;
  } else {
    return (
        <div className={theme.palette.mode === "light" ? LightStyles.internet : DarkStyles.internet}>
            <p>{fa["Internet is not available"]}</p>
        </div>
    )
  }
}
