import React from "react";
import styles from "../../assets/sass/light/splash.module.scss";
import { animated, useSpring } from "@react-spring/web";

export default function Splash() {
  const splashScreen = useSpring({
    delay: 1500,
    from: {
      opacity: 1,
      display: "block",
    },
    to: {
      opacity: 0,
      display: "none",
    },
  });
  return (
    <animated.div style={splashScreen} className={styles.bg_splash}>
      <div className={styles.img_center}>
        <img src="/image/logo-rasadent-app-1.png" alt="Rasadent" loading="lazy"/>
      </div>
    </animated.div>
  );
}
