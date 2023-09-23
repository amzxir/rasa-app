import React , { useContext } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LightStyles from "../../../../../assets/sass/light/market/single.module.scss";
import DarkStyles from "../../../../../assets/sass/dark/market/single.module.scss";
import ColorModeContext from "../../../../../context/color-mode-context";
import fa from "../../../../../lang/fa.json";

export default function Specifications() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  return (
    <Box sx={{ mt:3 }}>
        <div className={theme.palette.mode === "light" ? LightStyles.physical_characteristics : DarkStyles.physical_characteristics}>
            <h1 className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["Physical characteristics"]}</h1>
            <div className={theme.palette.mode === "light" ? LightStyles.option : DarkStyles.option}>
              <p className={theme.palette.mode === "light" ? LightStyles.option_title : DarkStyles.option_title}>محتویات بسته</p>
              <p className={theme.palette.mode === "light" ? LightStyles.option_content : DarkStyles.option_content}>یک عدد سرنگ 4 گرمی</p>
            </div>
            <div className={theme.palette.mode === "light" ? LightStyles.option : DarkStyles.option}>
              <p className={theme.palette.mode === "light" ? LightStyles.option_title : DarkStyles.option_title}>رنگ</p>
              <p className={theme.palette.mode === "light" ? LightStyles.option_content : DarkStyles.option_content}>A1، A2، A3</p>
            </div>
        </div>
        <div className={theme.palette.mode === "light" ? LightStyles.line : DarkStyles.line}>
          <svg xmlns="http://www.w3.org/2000/svg" width="302" height="6" viewBox="0 0 302 6" fill="none">
            <path d="M301.387 3L298.5 0.113249L295.613 3L298.5 5.88675L301.387 3ZM0.113251 3L3 5.88675L5.88675 3L3 0.113249L0.113251 3ZM298.5 2.5H297.502V3.5H298.5V2.5ZM295.505 2.5H293.508V3.5L295.505 3.5V2.5ZM291.512 2.5H289.515V3.5H291.512V2.5ZM287.519 2.5L285.522 2.5V3.5L287.519 3.5V2.5ZM283.525 2.5L281.529 2.5V3.5L283.525 3.5V2.5ZM279.532 2.5L277.535 2.5V3.5L279.532 3.5V2.5ZM275.539 2.5L273.542 2.5V3.5L275.539 3.5V2.5ZM271.546 2.5L269.549 2.5V3.5H271.546V2.5ZM267.552 2.5L265.556 2.5V3.5L267.552 3.5V2.5ZM263.559 2.5H261.562V3.5H263.559V2.5ZM259.566 2.5H257.569V3.5H259.566V2.5ZM255.573 2.5H253.576V3.5H255.573V2.5ZM251.579 2.5L249.583 2.5V3.5L251.579 3.5V2.5ZM247.586 2.5L245.59 2.5V3.5H247.586V2.5ZM243.593 2.5L241.596 2.5V3.5L243.593 3.5V2.5ZM239.6 2.5L237.603 2.5V3.5L239.6 3.5V2.5ZM235.606 2.5L233.61 2.5V3.5L235.606 3.5V2.5ZM231.613 2.5L229.617 2.5V3.5L231.613 3.5V2.5ZM227.62 2.5H225.623V3.5H227.62V2.5ZM223.627 2.5H221.63V3.5H223.627V2.5ZM219.633 2.5H217.637V3.5H219.633V2.5ZM215.64 2.5H213.644V3.5L215.64 3.5V2.5ZM211.647 2.5H209.65V3.5H211.647V2.5ZM207.654 2.5L205.657 2.5V3.5L207.654 3.5V2.5ZM203.661 2.5L201.664 2.5V3.5L203.661 3.5V2.5ZM199.667 2.5L197.671 2.5V3.5L199.667 3.5V2.5ZM195.674 2.5L193.677 2.5V3.5L195.674 3.5V2.5ZM191.681 2.5H189.684V3.5H191.681V2.5ZM187.688 2.5L185.691 2.5V3.5L187.688 3.5V2.5ZM183.694 2.5H181.698V3.5H183.694V2.5ZM179.701 2.5H177.704V3.5H179.701V2.5ZM175.708 2.5H173.711V3.5H175.708V2.5ZM171.715 2.5L169.718 2.5V3.5L171.715 3.5V2.5ZM167.721 2.5L165.725 2.5V3.5H167.721V2.5ZM163.728 2.5L161.731 2.5V3.5L163.728 3.5V2.5ZM159.735 2.5L157.738 2.5V3.5L159.735 3.5V2.5ZM155.742 2.5L153.745 2.5V3.5L155.742 3.5V2.5ZM151.748 2.5L149.752 2.5V3.5L151.748 3.5V2.5ZM147.755 2.5H145.758V3.5H147.755V2.5ZM143.762 2.5H141.765V3.5H143.762V2.5ZM139.769 2.5H137.772V3.5H139.769V2.5ZM135.775 2.5H133.779V3.5L135.775 3.5V2.5ZM131.782 2.5H129.785V3.5H131.782V2.5ZM127.789 2.5L125.792 2.5V3.5L127.789 3.5V2.5ZM123.796 2.5L121.799 2.5V3.5L123.796 3.5V2.5ZM119.802 2.5L117.806 2.5V3.5L119.802 3.5V2.5ZM115.809 2.5L113.812 2.5V3.5L115.809 3.5V2.5ZM111.816 2.5H109.819V3.5H111.816V2.5ZM107.823 2.5H105.826V3.5L107.823 3.5V2.5ZM103.829 2.5H101.833V3.5H103.829V2.5ZM99.836 2.5H97.8394V3.5H99.836V2.5ZM95.8427 2.5H93.8461V3.5H95.8427V2.5ZM91.8495 2.5L89.8529 2.5V3.5L91.8495 3.5V2.5ZM87.8562 2.5L85.8596 2.5V3.5L87.8562 3.5V2.5ZM83.863 2.5L81.8663 2.5V3.5L83.863 3.5V2.5ZM79.8697 2.5L77.8731 2.5V3.5L79.8697 3.5V2.5ZM75.8764 2.5L73.8799 2.5V3.5H75.8764V2.5ZM71.8832 2.5L69.8866 2.5V3.5L71.8832 3.5V2.5ZM67.89 2.5H65.8933V3.5H67.89V2.5ZM63.8967 2.5H61.9001V3.5H63.8967V2.5ZM59.9034 2.5H57.9068V3.5H59.9034V2.5ZM55.9102 2.5L53.9136 2.5V3.5L55.9102 3.5V2.5ZM51.9169 2.5H49.9203V3.5H51.9169V2.5ZM47.9237 2.5L45.927 2.5V3.5L47.9237 3.5V2.5ZM43.9304 2.5L41.9338 2.5V3.5L43.9304 3.5V2.5ZM39.9372 2.5L37.9406 2.5V3.5L39.9372 3.5V2.5ZM35.944 2.5L33.9474 2.5V3.5L35.944 3.5V2.5ZM31.9507 2.5H29.9541V3.5H31.9507V2.5ZM27.9575 2.5H25.9609V3.5L27.9575 3.5V2.5ZM23.9643 2.5H21.9677V3.5H23.9643V2.5ZM19.9711 2.5H17.9745V3.5H19.9711V2.5ZM15.9778 2.5H13.9812V3.5H15.9778V2.5ZM11.9846 2.5L9.98801 2.5V3.5L11.9846 3.5V2.5ZM7.99139 2.5L5.99478 2.5V3.5L7.99139 3.5V2.5ZM3.99817 2.5L3 2.5V3.5L3.99817 3.5V2.5Z" fill="#C7C7C7"/>
          </svg>
        </div>
        <div className={theme.palette.mode === "light" ? LightStyles.other_features : DarkStyles.other_features}>
            <h1 className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>{fa["Physical characteristics"]}</h1>
            <div className={theme.palette.mode === "light" ? LightStyles.option : DarkStyles.option}>
              <p className={theme.palette.mode === "light" ? LightStyles.option_title : DarkStyles.option_title}>محتویات بسته</p>
              <p className={theme.palette.mode === "light" ? LightStyles.option_content : DarkStyles.option_content}>یک عدد سرنگ 4 گرمی</p>
            </div>
            <div className={theme.palette.mode === "light" ? LightStyles.option : DarkStyles.option}>
              <p className={theme.palette.mode === "light" ? LightStyles.option_title : DarkStyles.option_title}>رنگ</p>
              <p className={theme.palette.mode === "light" ? LightStyles.option_content : DarkStyles.option_content}>A1، A2، A3</p>
            </div>
        </div>
    </Box>
  );
}
