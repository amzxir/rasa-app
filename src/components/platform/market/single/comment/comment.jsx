import React, { useContext } from "react";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FadeTransform } from "react-animation-components";
import LightStyles from "../../../../../assets/sass/light/market/single.module.scss";
import DarkStyles from "../../../../../assets/sass/dark/market/single.module.scss";
import ColorModeContext from "../../../../../context/color-mode-context";
import fa from "../../../../../lang/fa.json";
import ComIcon from "../../../../../assets/svg/com";

export default function Comment() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  return (
    <FadeTransform in transformProps={{ exitTransform: 'translateX(-100px)' }}>
      <Box sx={{ mt: 3 }}>
        <div className={theme.palette.mode === "light" ? LightStyles.comment : DarkStyles.comment}>
          <Grid container spacing={2}>
            <Grid item className={theme.palette.mode === "light" ? LightStyles.comment_img : DarkStyles.comment_img} xs={2}>
              <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                <img src="/image/comment.png" alt="" />
              </div>
            </Grid>
            <Grid item className={theme.palette.mode === "light" ? LightStyles.comment_content : DarkStyles.comment_content} xs={10}>
              <div className={theme.palette.mode === "light" ? LightStyles.contents : DarkStyles.contents}>
                <div className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}>
                  <p className={theme.palette.mode === "light" ? LightStyles.names : DarkStyles.names}>پویا رستمی</p>
                  <div className={theme.palette.mode === "light" ? LightStyles.rating : DarkStyles.rating}>
                    <p className={theme.palette.mode === "light" ? LightStyles.date : DarkStyles.date}>6 ماه پیش</p>
                    <p className={theme.palette.mode === "light" ? LightStyles.rat : DarkStyles.rat}>729 <ComIcon /></p>
                  </div>
                </div>
                <p className={theme.palette.mode === "light" ? LightStyles.comment_des : DarkStyles.comment_des}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>
    </FadeTransform>
  );
}
