import React from "react";
import { FadeTransform } from "react-animation-components";

export default function Club() {
  return (
    <FadeTransform in transformProps={{exitTransform: 'translateX(-100px)'}} fadeProps={{enterOpacity: 0.85,}}>
      <iframe
        src="https://club.rasadent.com/"
        className="responsive-iframe"
        frameborder="0"
      ></iframe>
    </FadeTransform>
  );
}
