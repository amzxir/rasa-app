import React, { useContext, useState } from "react";
import { Box, Card, Grid, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import LightStyles from "../../../../assets/sass/light/manage-shop.module.scss";
import DarkStyles from "../../../../assets/sass/dark/manage-shop.module.scss";
import fa from "../../../../lang/fa.json";
import ColorModeContext from "../../../../context/color-mode-context";
import SearchIcon from "../../../../assets/svg/search";
import EditsIcon from "../../../../assets/svg/edits";
import DeletsIcon from "../../../../assets/svg/delets";
import HomesIcon from "../../../../assets/svg/homes";
import ChartsIcon from "../../../../assets/svg/charts";
import WalletsIcon from "../../../../assets/svg/wallets";
import BagsIcon from "../../../../assets/svg/bags";
import Modal from '@mui/material/Modal';
import CreateProduct from "./create/create";



export default function productShop() {
    // start function darkmode
    const theme = useTheme();
    const { colorMode } = useContext(ColorModeContext);
    // end function darkmode
    // start fetch data your product
    const YourProduct = [
        { id: 1, img: '/image/order.png', name: 'کامپوزیت سارمکو 1', count: 45, status: 'درانتظار تایید', price: '120/000', path_edit: '#', path_see: '#' },
        { id: 2, img: '/image/order.png', name: 'کامپوزیت سارمکو 2', count: 45, status: 'درانتظار تایید', price: '140/000', path_edit: '#', path_see: '#' },
        { id: 3, img: '/image/order.png', name: 'کامپوزیت سارمکو 3', count: 45, status: 'درانتظار تایید', price: '150/000', path_edit: '#', path_see: '#' },
    ]
    const [product, setProduct] = useState(YourProduct);
    // end fetch data your product

    // start fetch data and function modal
    const [isOpen, setIsOpen] = useState(false)
    // end fetch data and function modal 

    // start state modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
        setIsOpen(false)
    }
    const handleClose = () => setOpen(false);
    // end state modal

    // start fetch data and function modal
    const [isProduct, setIsProduct] = useState(false)
    // end fetch data and function modal 

    return (
        <Box sx={{ mt: 5, mb: 5 }}>
            <Grid sx={{ mb: 2 }} container>
                <Grid item xs={12}>
                    <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
                        <input className={theme.palette.mode === "light" ? LightStyles.search : DarkStyles.search} placeholder="محصول خود را جستجو کنید ..." type="text" />
                        <IconButton className={theme.palette.mode === "light" ? LightStyles.position_svg_search : DarkStyles.position_svg_search}>
                            <SearchIcon />
                        </IconButton>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <button  onClick={() => setIsProduct(!isProduct)} className={theme.palette.mode === "light" ? LightStyles.btn_create_product : DarkStyles.btn_create_product}><span>افزودن محصول</span></button>
                    <CreateProduct isProduct={isProduct} setIsProduct={setIsProduct}/>
                </Grid>
            </Grid>
            {product.map((i, index) => {
                return (
                    <>
                        <Card key={i.id} className={theme.palette.mode === "light" ? LightStyles.card_product : DarkStyles.card_product}>
                            <div className={theme.palette.mode === "light" ? LightStyles.name_product : DarkStyles.name_product}>
                                <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>نام محصول</p>
                                <p className={theme.palette.mode === "light" ? LightStyles.name : DarkStyles.name}>هیپو کلریت سدیم _ برنامد</p>
                                <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                                    <div className={theme.palette.mode === "light" ? LightStyles.details_product : DarkStyles.details_product}>
                                        <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>وضعیت محصول</p>
                                        <p style={{ background: '#17A50026', color: '000' }} className={theme.palette.mode === "light" ? LightStyles.status : DarkStyles.status}>تایید شده</p>
                                    </div>
                                    <div className={theme.palette.mode === "light" ? LightStyles.details_product : DarkStyles.details_product}>
                                        <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>زمان ایجاد</p>
                                        <p className={theme.palette.mode === "light" ? LightStyles.date : DarkStyles.date}>1402/4/5</p>
                                    </div>
                                </div>
                                <div className={theme.palette.mode === "light" ? LightStyles.action_card : DarkStyles.action_card}>
                                    <IconButton onClick={() => setIsOpen(index)}>
                                        <EditsIcon />
                                    </IconButton>
                                    <IconButton>
                                        <DeletsIcon />
                                    </IconButton>
                                </div>
                            </div>
                        </Card>
                        <div onClick={() => setIsOpen(false)} className={isOpen === index ? theme.palette.mode === "light" ? LightStyles.fade_open : DarkStyles.fade_open : theme.palette.mode === "light" ? LightStyles.fade_close : DarkStyles.fade_close}>
                        </div>
                        <div className={isOpen === index ? theme.palette.mode === "light" ? LightStyles.card_delete_open : DarkStyles.card_delete_open : theme.palette.mode === "light" ? LightStyles.card_delete_close : DarkStyles.card_delete_close}>
                            <h1 className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>ویرایش محصول هیپو کلریت سدیم _ برنامد</h1>
                            <hr />
                            <Card className={theme.palette.mode === "light" ? LightStyles.card_pro : DarkStyles.card_pro}>
                                <div className={theme.palette.mode === "light" ? LightStyles.items : DarkStyles.items}>
                                    <div className={theme.palette.mode === "light" ? LightStyles.svg_edit : DarkStyles.svg_edit}><HomesIcon /></div>
                                    <p className={theme.palette.mode === "light" ? LightStyles.title_edit : DarkStyles.title_edit}>خصوصیت</p>
                                    <p className={theme.palette.mode === "light" ? LightStyles.name_edit : DarkStyles.name_edit}>مقدار</p>
                                </div>
                                <div className={theme.palette.mode === "light" ? LightStyles.items : DarkStyles.items}>
                                    <div className={theme.palette.mode === "light" ? LightStyles.svg_edit : DarkStyles.svg_edit}><ChartsIcon /></div>
                                    <p className={theme.palette.mode === "light" ? LightStyles.title_edit : DarkStyles.title_edit}>مقدار</p>
                                    <p style={{ color: '#008C1F' }} className={theme.palette.mode === "light" ? LightStyles.name_edit : DarkStyles.name_edit}>سرنگ 3 میلی لیتر</p>
                                </div>
                                <div className={theme.palette.mode === "light" ? LightStyles.items : DarkStyles.items}>
                                    <div className={theme.palette.mode === "light" ? LightStyles.svg_edit : DarkStyles.svg_edit}><WalletsIcon /></div>
                                    <p className={theme.palette.mode === "light" ? LightStyles.title_edit : DarkStyles.title_edit}>موجودی</p>
                                    <p className={theme.palette.mode === "light" ? LightStyles.name_edit : DarkStyles.name_edit}>10</p>
                                </div>
                                <div className={theme.palette.mode === "light" ? LightStyles.items : DarkStyles.items}>
                                    <div className={theme.palette.mode === "light" ? LightStyles.svg_edit : DarkStyles.svg_edit}><BagsIcon /></div>
                                    <p className={theme.palette.mode === "light" ? LightStyles.title_edit : DarkStyles.title_edit}>قیمت</p>
                                    <p style={{ color: '#008C1F' }} className={theme.palette.mode === "light" ? LightStyles.name_edit : DarkStyles.name_edit}>150/000</p>
                                </div>
                                <div className={theme.palette.mode === "light" ? LightStyles.items : DarkStyles.items}>
                                    <IconButton onClick={handleOpen} className={theme.palette.mode === "light" ? LightStyles.svg_edit : DarkStyles.svg_edit}><EditsIcon /></IconButton>
                                    <IconButton className={theme.palette.mode === "light" ? LightStyles.svg_edit : DarkStyles.svg_edit}><DeletsIcon /></IconButton>
                                </div>
                            </Card>
                        </div>
                        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                            <div className={theme.palette.mode === "light" ? LightStyles.component_edit : DarkStyles.component_edit}>
                                <h1>به روزرسانی موجودی و قیمت برای مقدار سرنگ 3 میلی لیتر</h1>
                                <hr />
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <div className={theme.palette.mode === "light" ? LightStyles.form_group_edit : DarkStyles.form_group_edit}>
                                            <input placeholder="موجودی جدید" type="text" />
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className={theme.palette.mode === "light" ? LightStyles.form_group_edit : DarkStyles.form_group_edit}>
                                            <input placeholder="قیمت جدید" type="text" />
                                        </div>
                                    </Grid>
                                </Grid>
                                <div className={theme.palette.mode === "light" ? LightStyles.d_flex_btn : DarkStyles.d_flex_btn}>
                                    <button className={theme.palette.mode === "light" ? LightStyles.confirm : DarkStyles.confirm}>آپدیت جزئیات</button>
                                    <button onClick={handleClose} className={theme.palette.mode === "light" ? LightStyles.cancell : DarkStyles.cancell}>لغو</button>
                                </div>

                            </div>

                        </Modal>
                    </>

                )
            })}

        </Box>
    );
}
