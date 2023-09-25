import React, { useContext, useState, startTransition } from "react";
import { Modal, IconButton, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../../../context/color-mode-context";
import LightStyles from "../../../../assets/sass/light/market/landing.module.scss";
import DarkStyles from "../../../../assets/sass/dark/market/landing.module.scss";
import SearchIcon from "../../../../assets/svg/search";
import SearchsIcon from "../../../../assets/svg/searchs";
import FilltersIcon from "../../../../assets/svg/fillters";
import BexitIcon from "../../../../assets/svg/bexit";
import { NavLink } from "react-router-dom";
import HeartIcon from "../../../../assets/svg/heart";
import fa from "../../../../lang/fa.json"
import CategoryIcon from "../../../../assets/svg/Category";

export default function Search() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  // start state modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // end state modal

  // start function for search
  let unfilteredItem = new Array(2500).fill(null).map((v, i) => ({
    id: i,
    name: `محصول شماره ${i}`,
    category: `دسته بندی ${i}`,
    price: `${i}000`,
  }));

  let [filter, setFilter] = useState("");
  let [items, setItems] = useState([]);

  const onChange = (e) => {
    setFilter(e.target.value);
    startTransition(() => {
      setItems(
        e.target.value === ""
          ? []
          : unfilteredItem.filter((item) => item.name.includes(e.target.value))
      );
    });
    setProductSearch("");
  };
  // end function for search

  // start fetch data card search
  const [productSearch, setProductSearch] = useState([]);
  const cardSearch = (i) => {
    console.log(i);
    setProductSearch(i);
    setItems([]);
  };
  // end fetch data card search
  return (
    <>
      <Grid container spacing={2} className={theme.palette.mode === "light" ? LightStyles.search : DarkStyles.search}>
        <Grid xs={12} className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
          <button onClick={handleOpen} className={theme.palette.mode === "light" ? LightStyles.input : DarkStyles.input}>
            {fa["Search for desired product..."]}
          </button>
          <SearchIcon />
        </Grid>
      </Grid>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div className={theme.palette.mode === "light" ? LightStyles.component_search : DarkStyles.component_search}>
          <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
            {/* <IconButton className={theme.palette.mode === "light" ? LightStyles.search_fillter : DarkStyles.search_fillter}>
              <FilltersIcon />
            </IconButton> */}
            <input type="text" placeholder={fa["Search for your product..."]} value={filter} onChange={onChange}/>
            <IconButton className={theme.palette.mode === "light" ? LightStyles.search_icon : DarkStyles.search_icon}>
              <SearchsIcon />
            </IconButton>
          </div>
          <ul className={theme.palette.mode === "light" ? LightStyles.list_search : DarkStyles.list_search}>
            {items.length === 0 && filter !== "" &&
            productSearch.length === 0 ? (
              <div className={theme.palette.mode === "light" ? LightStyles.page_404 : DarkStyles.page_404}>
                <div className={theme.palette.mode === "light" ? LightStyles.img_center : DarkStyles.img_center}>
                  <img src="image/404.png" alt="" />
                </div>
                <div className={theme.palette.mode === "light" ? LightStyles.content : DarkStyles.content}>
                  <p className={theme.palette.mode === "light" ? LightStyles.title : DarkStyles.title}>
                    {fa["Not found"]}
                  </p>
                  <p className={theme.palette.mode === "light" ? LightStyles.text : DarkStyles.text}>
                    {fa["Sorry, the keyword you entered was not found, please try again Check or search with another keyword."]}
                  </p>
                </div>
              </div>
              ) : (
              items.map((i) => {
                return (
                  <li key={i.id}>
                    <NavLink to={"/shop/single-product"} state={"کامپوزیت سارمکو"}>
                      <BexitIcon /> <span>{i.name}</span>
                    </NavLink>
                  </li>
                );
              })
            )}
          </ul>

        </div>
      </Modal>
    </>
  );
}
