import React, { useContext, useState } from "react";
import { Box , Grid , Card , Modal } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FadeTransform } from "react-animation-components";
import { NavLink } from "react-router-dom";
import LightStyles from "../../../../assets/sass/light/order.module.scss";
import DarkStyles from "../../../../assets/sass/dark/order.module.scss";
import ColorModeContext from "../../../../context/color-mode-context";
import fa from "../../../../lang/fa.json";
import CloseBoxIcon from "../../../../assets/svg/close-box";
import CheckIcon from "../../../../assets/svg/check";
import CarIcon from "../../../../assets/svg/car";
import PersonIcon from "../../../../assets/svg/person";
import OpenBoxIcon from "../../../../assets/svg/open-box";
import CarBigIcon from "../../../../assets/svg/car-big";
import ArrowBtnIcon from "../../../../assets/svg/arrow-btn";

export default function Details({ fetchProduct , sendInvoice }) {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function

  // start fetch data invoice
  let fetchInvoice = fetchProduct;
  // start fetch data invoice

  // start function and state modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // end function and state modal


  return (
    <FadeTransform in transformProps={{exitTransform: 'translateX(-100px)'}}>
      <Box sx={{ mt: 5, mb: 5 }}>
          <Grid container>
            <Grid item key={fetchInvoice.id} style={{ marginBottom:'1rem' }} xs={12}>
                <Card sx={{ boxShadow:'none' , borderRadius:'15px' , p:2 }}>
                    <div className={theme.palette.mode === "light" ? LightStyles.delive : DarkStyles.delive}>
                        <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                            <h1>{fetchInvoice.name}</h1>
                            <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}><span>{fa["tracking code"]}</span><span>{fetchInvoice.trakingCode}</span></p>
                            <p className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}><span>{fa["tracking code"]}</span><span>{fetchInvoice.trakingCode}</span></p>
                            {fetchInvoice.delivery === true ?
                              <button onClick={handleOpen} className={theme.palette.mode === "light" ? LightStyles.btn_order : DarkStyles.btn_order}><span>{fa["Cancel the order"]}</span><span><ArrowBtnIcon/></span></button>
                              :
                              null
                            }

                            {fetchInvoice.cancelled === true ?
                              <button onClick={handleOpen} className={theme.palette.mode === "light" ? LightStyles.btn_order : DarkStyles.btn_order}><span>{fa["reorder"]}</span><span><ArrowBtnIcon/></span></button>
                              :
                              null
                            }
                           
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                            <img width="120" height="120" src={fetchInvoice.url_img} alt="" />
                        </div>
                    </div>
                </Card>
            </Grid>
          </Grid>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className={theme.palette.mode === "light" ? LightStyles.component_faq : DarkStyles.component_faq}>
              <div>
                <p className={theme.palette.mode === "light" ? LightStyles.text : DarkStyles.text}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                <p className={theme.palette.mode === "light" ? LightStyles.text : DarkStyles.text}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
              </div>

              <div className={theme.palette.mode === "light" ? LightStyles.flex : DarkStyles.flex}>
                <button className={theme.palette.mode === "light" ? LightStyles.btn_confirm : DarkStyles.btn_confirm}><span>{fa["submit"]}</span></button>
                <button onClick={handleClose} className={theme.palette.mode === "light" ? LightStyles.btn_cancell : DarkStyles.btn_cancell}><span>{fa["cancell"]}</span></button>
              </div>
            </div> 
          </Modal>

          <ul className="progressbar">
            <li className="active">
              <div><OpenBoxIcon/></div>
              <div className={theme.palette.mode === "light" ? LightStyles.check : DarkStyles.check}><CheckIcon/></div>
            </li>
            <li>
              <div><PersonIcon/></div>
              <div className={theme.palette.mode === "light" ? LightStyles.check : DarkStyles.check}><CheckIcon/></div>
            </li>
            <li>
              <div><CarIcon/></div>
              <div className={theme.palette.mode === "light" ? LightStyles.check : DarkStyles.check}><CheckIcon/></div>
            </li>
            <li>
              <div><CloseBoxIcon/></div>
              <div className={theme.palette.mode === "light" ? LightStyles.check : DarkStyles.check}><CheckIcon/></div>
            </li>
          </ul>
          <div className={theme.palette.mode === "light" ? LightStyles.content_send : DarkStyles.content_send}>
            <h1 className={theme.palette.mode === "light" ? LightStyles.title_send : DarkStyles.title_send}>{fa["Delivery to the customer"]}</h1>
          </div>
          <hr />
          <div className={theme.palette.mode === "light" ? LightStyles.content_title : DarkStyles.content_title}>
            <CarBigIcon/>
            <span>{fa["send normal"]}</span>
          </div>
          <ul className={theme.palette.mode === "light" ? LightStyles.details_send : DarkStyles.details_send}>
            <li className={theme.palette.mode === "light" ? LightStyles.details_items : DarkStyles.details_items}>
              <p>{fa["Order tracking code"]} : <span>1283881</span></p>
              <p>{fa["Order history submit"]} : <span>1402/2/3</span></p>
            </li>
            <li className={theme.palette.mode === "light" ? LightStyles.details_items : DarkStyles.details_items}>
              <p>{fa["Transferee"]} : <span>پویا رستمی</span></p>
              <p>{fa["Delivery time"]} : <span>1402/2/3</span></p>
            </li>
            <li className={theme.palette.mode === "light" ? LightStyles.details_items : DarkStyles.details_items}>
              <p>{fa["Product Price"]}</p>
              <p>{fa["Product Price"]} : <span>120/222/000</span></p>
            </li>
            <li className={theme.palette.mode === "light" ? LightStyles.details_items : DarkStyles.details_items}>
              <p>{fa["shipping costs"]} </p>
              <p>{fa["shipping cost"]} : <span>320/000</span></p>
            </li>
            <li className={theme.palette.mode === "light" ? LightStyles.details_items : DarkStyles.details_items}>
              <p>{fa["address"]} </p>
              <p style={{textAlign:"justify"}}>{fa["address"]} : <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</span></p>
            </li>
            
          </ul>

          <div className={theme.palette.mode === "light" ? LightStyles.detail_invoice : DarkStyles.detail_invoice}>
            <NavLink onClick={() => sendInvoice(fetchInvoice)} to={`/profile/order/invoice/${fetchInvoice.name}`} state={fa["details invoice"]} className={theme.palette.mode === "light" ? LightStyles.btn_collaps : DarkStyles.btn_collaps}><span>{fa["details invoice"]}</span></NavLink>
          </div>

  
      </Box>
    </FadeTransform>
  );
}
