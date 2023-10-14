import React, { useContext, useState } from "react";
import { Box, IconButton, Modal, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FadeTransform } from "react-animation-components";
import ColorModeContext from "../../../../context/color-mode-context";
import LightStyles from "../../../../assets/sass/light/chortkeh/chortkeh.module.scss";
import DarkStyles from "../../../../assets/sass/dark/chortkeh/chortkeh.module.scss";
import fa from "../../../../lang/fa.json";
import BagAddIcon from "../../../../assets/svg/bag-add";
import BoxIcon from "../../../../assets/svg/box-green";
import CardIcon from "../../../../assets/svg/shopping-cart-add";
import ResizeIcon from "../../../../assets/svg/resize";
import StatsIcon from "../../../../assets/svg/stats";
import EditIcon from "../../../../assets/svg/edits";
import DeleteIcon from "../../../../assets/svg/delets";


export default function Item() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode

    // start fetch data and function modal
    const [isOpen, setIsOpen] = useState(false)
    // end fetch data and function modal 

    // start function and state modal
    const [edit, setEdit] = useState(false);
    const handleOpen = () => setEdit(true);
    const handleClose = () => setEdit(false);
    // end function and state modal

    // start function and state modal
    const [create, setcreate] = useState(false);
    const handleOpenCreate = () => setcreate(true);
    const handleClosecreate = () => setcreate(false);
    // end function and state modal
    return (
        <Box>
            <div className={theme.palette.mode === "light" ? LightStyles.content_item : DarkStyles.content_item}>
                <div className={theme.palette.mode === "light" ? LightStyles.card_item : DarkStyles.card_item}>
                    <div className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}>
                        <p>نام متریال</p>
                        <h1>ماده قالبگیری ایکس لایت</h1>
                    </div>
                    <div className={theme.palette.mode === "light" ? LightStyles.details : DarkStyles.details}>
                        <div className={theme.palette.mode === "light" ? LightStyles.items_pro : DarkStyles.items_pro}>
                            <div className={theme.palette.mode === "light" ? LightStyles.svg : DarkStyles.svg}><BagAddIcon /></div>
                            <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>قیمت کل</p>
                            <p className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}>235/000 </p>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.items_pro : DarkStyles.items_pro}>
                            <div className={theme.palette.mode === "light" ? LightStyles.svg : DarkStyles.svg}><BoxIcon /></div>
                            <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>حجم کل</p>
                            <p style={{ color: '#0E9F2E' }} className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}>10 (بسته)</p>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.items_pro : DarkStyles.items_pro}>
                            <div className={theme.palette.mode === "light" ? LightStyles.svg : DarkStyles.svg}><CardIcon /></div>
                            <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>قیمت واحد</p>
                            <p className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}>235/000</p>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.items_pro : DarkStyles.items_pro}>
                            <div className={theme.palette.mode === "light" ? LightStyles.svg : DarkStyles.svg}><ResizeIcon /></div>
                            <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>میزان استفاده</p>
                            <p className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}>0.01</p>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.items_pro : DarkStyles.items_pro}>
                            <div className={theme.palette.mode === "light" ? LightStyles.svg : DarkStyles.svg}><StatsIcon /></div>
                            <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>هزینه ی مصرفی</p>
                            <p className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}>387</p>
                        </div>
                    </div>
                    <div className={theme.palette.mode === "light" ? LightStyles.btn_action : DarkStyles.btn_action}>
                        <IconButton onClick={handleOpen}>
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => setIsOpen(!isOpen)}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </div>
                <hr />
                <div className={theme.palette.mode === "light" ? LightStyles.card_item : DarkStyles.card_item}>
                    <div className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}>
                        <p>نام متریال</p>
                        <h1>ماده قالبگیری ایکس لایت</h1>
                    </div>
                    <div className={theme.palette.mode === "light" ? LightStyles.details : DarkStyles.details}>
                        <div className={theme.palette.mode === "light" ? LightStyles.items_pro : DarkStyles.items_pro}>
                            <div className={theme.palette.mode === "light" ? LightStyles.svg : DarkStyles.svg}><BagAddIcon /></div>
                            <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>قیمت کل</p>
                            <p className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}>235/000 </p>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.items_pro : DarkStyles.items_pro}>
                            <div className={theme.palette.mode === "light" ? LightStyles.svg : DarkStyles.svg}><BoxIcon /></div>
                            <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>حجم کل</p>
                            <p style={{ color: '#0E9F2E' }} className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}>10 (بسته)</p>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.items_pro : DarkStyles.items_pro}>
                            <div className={theme.palette.mode === "light" ? LightStyles.svg : DarkStyles.svg}><CardIcon /></div>
                            <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>قیمت واحد</p>
                            <p className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}>235/000</p>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.items_pro : DarkStyles.items_pro}>
                            <div className={theme.palette.mode === "light" ? LightStyles.svg : DarkStyles.svg}><ResizeIcon /></div>
                            <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>میزان استفاده</p>
                            <p className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}>0.01</p>
                        </div>
                        <div className={theme.palette.mode === "light" ? LightStyles.items_pro : DarkStyles.items_pro}>
                            <div className={theme.palette.mode === "light" ? LightStyles.svg : DarkStyles.svg}><StatsIcon /></div>
                            <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>هزینه ی مصرفی</p>
                            <p className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}>387</p>
                        </div>
                    </div>
                    <div className={theme.palette.mode === "light" ? LightStyles.btn_action : DarkStyles.btn_action}>
                        <IconButton onClick={handleOpen}>
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => setIsOpen(!isOpen)}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
            <div className={theme.palette.mode === "light" ? LightStyles.total : DarkStyles.total}>
                <div className={theme.palette.mode === "light" ? LightStyles.price : DarkStyles.price}>
                    <p>جمع کل :</p>
                    <p>120/000 {fa["Toman"]}</p>
                </div>
                <button onClick={handleOpenCreate} className={theme.palette.mode === "light" ? LightStyles.btn : DarkStyles.btn}><span>اضافه کردن</span></button>
            </div>

            <div onClick={() => setIsOpen(false)} className={isOpen === true ? theme.palette.mode === "light" ? LightStyles.fade_open : DarkStyles.fade_open : theme.palette.mode === "light" ? LightStyles.fade_close : DarkStyles.fade_close}>
            </div>
            <div className={isOpen === true ? theme.palette.mode === "light" ? LightStyles.card_delete_open : DarkStyles.card_delete_open : theme.palette.mode === "light" ? LightStyles.card_delete_close : DarkStyles.card_delete_close}>
                <h1 className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>آیا از حذف این ماده مصرفی از خدمت اطمینان دارید ؟</h1>
                <hr />
                <div className={theme.palette.mode === "light" ? LightStyles.d_flex_btn : DarkStyles.d_flex_btn}>
                    <button className={theme.palette.mode === "light" ? LightStyles.confirm : DarkStyles.confirm}>{fa["yes"]}</button>
                    <button onClick={() => setIsOpen(false)} className={theme.palette.mode === "light" ? LightStyles.cancell : DarkStyles.cancell}>{fa["no"]}</button>
                </div>
            </div>

            <Modal
                open={edit}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className={theme.palette.mode === "light" ? LightStyles.component_edit : DarkStyles.component_edit}>
                    <h1>ویرایش کردن متریال به این خدمت</h1>
                    <hr />
                    <Grid xs={12} item sx={{ pt: '0 !important', width: '100%' }}>
                        <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                            <label htmlFor="">نام محصول مورد نظر خود را وارد کنید :</label>
                            <input style={{ background:theme.palette.mode === "light" ? '#F7F7F7' : '#212121' }} placeholder="نام محصول" type="text" />
                        </div>
                    </Grid>
                    <Grid item xs={12} sx={{ pt: '0 !important', width: '100%' }}>
                        <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                            <select style={{ background:theme.palette.mode === "light" ? '#F7F7F7' : '#212121' }}>
                                <option>ویژگی محصول</option>
                            </select>
                        </div>
                    </Grid>
                    <Grid xs={12} item sx={{ pt: '0 !important', width: '100%' }}>
                        <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                            <label htmlFor="">از هر بسته I چه میزان در این خدمت استفاده میشود :</label>
                            <input style={{ background:theme.palette.mode === "light" ? '#F7F7F7' : '#212121' }} placeholder="نام محصول" type="text" />
                        </div>
                    </Grid>
                    <div className={theme.palette.mode === "light" ? LightStyles.flex : DarkStyles.flex}>
                        <button className={theme.palette.mode === "light" ? LightStyles.btn_confirm : DarkStyles.btn_confirm}><span>ثبت و ویرایش متریال</span></button>
                        <button onClick={handleClose} className={theme.palette.mode === "light" ? LightStyles.btn_cancell : DarkStyles.btn_cancell}><span>{fa["cancell"]}</span></button>
                    </div>
                </div>
            </Modal>

            <Modal
                open={create}
                onClose={handleClosecreate}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className={theme.palette.mode === "light" ? LightStyles.component_edit : DarkStyles.component_edit}>
                    <h1>اضافه کردن متریال به این خدمت</h1>
                    <hr />
                    <Grid xs={12} item sx={{ pt: '0 !important', width: '100%' }}>
                        <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                            <label htmlFor="">نام محصول مورد نظر خود را وارد کنید :</label>
                            <input style={{ background:theme.palette.mode === "light" ? '#F7F7F7' : '#212121' }} placeholder="نام محصول" type="text" />
                        </div>
                    </Grid>
                    <Grid item xs={12} sx={{ pt: '0 !important', width: '100%' }}>
                        <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                            <select style={{ background:theme.palette.mode === "light" ? '#F7F7F7' : '#212121' }}>
                                <option>ویژگی محصول</option>
                            </select>
                        </div>
                    </Grid>
                    <Grid xs={12} item sx={{ pt: '0 !important', width: '100%' }}>
                        <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                            <label htmlFor="">از هر بسته I چه میزان در این خدمت استفاده میشود :</label>
                            <input style={{ background:theme.palette.mode === "light" ? '#F7F7F7' : '#212121' }} placeholder="نام محصول" type="text" />
                        </div>
                    </Grid>
                    <div className={theme.palette.mode === "light" ? LightStyles.flex : DarkStyles.flex}>
                        <button className={theme.palette.mode === "light" ? LightStyles.btn_confirm : DarkStyles.btn_confirm}><span>ثبت و افزودن متریال</span></button>
                        <button onClick={handleClosecreate} className={theme.palette.mode === "light" ? LightStyles.btn_cancell : DarkStyles.btn_cancell}><span>{fa["cancell"]}</span></button>
                    </div>
                </div>
            </Modal>
        </Box>
    )
}

