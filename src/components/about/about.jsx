import React from "react";
import { Box, Grid, Avatar } from "@mui/material";
import styles from "../../assets/sass/about.module.scss";

export default function About() {
  return (
    <Box sx={{ mt: 5, mb: 5 }}>
      <p className={styles.text_about}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
        درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </p>
      <div className={styles.content}>
        <h1 className={styles.title_h1}>سخن مدیر عامل</h1>
        <Grid container spacing={2}>
          <Grid item xs={3} className={styles.p_0}>
            <img
              className={styles.avatar}
              alt="Remy Sharp"
              src="/image/user.png"
            />
          </Grid>
          <Grid item xs={9} className={styles.p_0}>
            <p className={styles.col6_2_name}>سعید رضا ملکی</p>
            <p className={styles.col6_2_side}>مدیر عامل شرکت رسادنت</p>
          </Grid>
        </Grid>
      </div>
      <p className={styles.text_about}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد.
      </p>
      {/* <h1 className={styles.honors_of_rasadnet}>افتخارات رسادنت</h1>
      <Grid container sx={{ mt:2 }} spacing={2}>
        <Grid item xs={3}>
          <div>xs=8</div>
        </Grid>
      </Grid> */}
    </Box>
  );
}
