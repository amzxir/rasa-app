import React, { useContext, useState, startTransition, useEffect } from "react";
import { Modal, IconButton, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import ColorModeContext from "../../../../context/color-mode-context";
import LightStyles from "../../../../assets/sass/light/market/landing.module.scss";
import DarkStyles from "../../../../assets/sass/dark/market/landing.module.scss";
import SearchIcon from "../../../../assets/svg/search";
import SearchsIcon from "../../../../assets/svg/searchs";
import ExitIcon from "../../../../assets/svg/exit";
import BexitIcon from "../../../../assets/svg/bexit";
import { NavLink } from "react-router-dom";
import fa from "../../../../lang/fa.json"
import FilterIcon from "../../../../assets/svg/filter";

export default function Search({ setIsOpen }) {
  // start function darkmode
  const theme = useTheme();
  const { colorMode, token } = useContext(ColorModeContext);
  // end function darkmode

  // start state modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // end state modal

  // start function for search

  let [filter, setFilter] = useState("");
  let [items, setItems] = useState([]);

  const handelResponsSearch = async () => {

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }

    const bodyParameters = {
      key: "value",
      product_name:filter,
    }

    try {
      const response = await axios.post('https://rasadent.reshe.ir/api/product_search_application', bodyParameters, config);
      // console.log(response.data.products);
      setItems(response.data.products)
    } catch (error) {
      console.error(error);
    }
  }

  const onChange = (e) => {
    setFilter(e.target.value);
    // startTransition(() => {
    //   setItems(
    //     e.target.value === ""
    //       ? []
    //       : items.filter((item) => item.fa_name.includes(e.target.value))
    //   );
    // });
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

  // start find url and equal path
  const url = window.location.pathname;
  let paths = window.location.pathname.split("/");
  let query = paths[3];
  // end find url and equal path
  return (
    <>
      <Grid container spacing={2} className={theme.palette.mode === "light" ? LightStyles.search : DarkStyles.search}>
        <Grid xs={url === `/shop/product-category/${query}` ? 10 : 12} className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
          <button onClick={handleOpen} className={theme.palette.mode === "light" ? LightStyles.input : DarkStyles.input}>
            {fa["Search for desired product..."]}
          </button>
          <SearchIcon />
        </Grid>
        {url === `/shop/product-category/${query}` ?
          <Grid sx={{ pr: 1 }} xs={2}>
            <button onClick={() => setIsOpen(true)} className={theme.palette.mode === "light" ? LightStyles.btn_fillter : DarkStyles.btn_fillter}>
              <FilterIcon />
            </button>
          </Grid>
          :
          null
        }
      </Grid>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div className={theme.palette.mode === "light" ? LightStyles.component_search : DarkStyles.component_search}>
          <div className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
            <IconButton onClick={handleClose} className={theme.palette.mode === "light" ? LightStyles.search_fillter : DarkStyles.search_fillter}>
              <ExitIcon />
            </IconButton>
            <input type="text" placeholder={fa["Search for your product..."]} value={filter} onChange={onChange} />
            <IconButton onClick={handelResponsSearch} className={theme.palette.mode === "light" ? LightStyles.search_icon : DarkStyles.search_icon}>
              <SearchsIcon />
            </IconButton>
          </div>
          <ul className={theme.palette.mode === "light" ? LightStyles.list_search : DarkStyles.list_search}>
            {items?.length === 0 || filter.length === 0 ? (
              <div className={theme.palette.mode === "light" ? LightStyles.page_404 : DarkStyles.page_404}>
                <div className={theme.palette.mode === "light" ? LightStyles.img_centers : DarkStyles.img_centers}>
                  <img src="/image/404.png" alt="" />
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
              items?.map((i) => {
                return (
                  <li key={i.id}>
                    <NavLink to={"/shop/single-product"} state={i.fa_name}>
                      <BexitIcon /> <span>{i.fa_name}</span>
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
