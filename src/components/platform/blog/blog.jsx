import React from "react";
import { FadeTransform } from "react-animation-components";


export default function Blog() {
  return (
    <FadeTransform in transformProps={{exitTransform: 'translateX(-100px)'}} fadeProps={{enterOpacity: 0.85,}}>
      <iframe
        src="https://blog.rasadent.com/"
        className="responsive-iframe"
        frameborder="0"
      ></iframe>
    </FadeTransform>
  );
}
