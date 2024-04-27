import React, { useContext, useState, startTransition, useEffect } from "react";
import { Modal, IconButton, Grid, Skeleton, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import ColorModeContext from "../../../../context/color-mode-context";
import LightStyles from "../../../../assets/sass/light/market/landing.module.scss";
import DarkStyles from "../../../../assets/sass/dark/market/landing.module.scss";
import SearchIcon from "../../../../assets/svg/search";
import SearchsIcon from "../../../../assets/svg/searchs";
import ExitIcon from "../../../../assets/svg/exit";
import BexitIcon from "../../../../assets/svg/bexit";
import fa from "../../../../lang/fa.json"
import FilterIcon from "../../../../assets/svg/filter";

export default function Search({ setIsOpen }) {
  // start function darkmode
  const theme = useTheme();
  const { colorMode, token, spinner, setSpinner } = useContext(ColorModeContext);
  // end function darkmode

  // start react hook form
  const { register, handleSubmit, reset, formState: { errors } } = useForm({});
  // end react hook form

  // start state modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // end state modal

  // start function for search

  let [filter, setFilter] = useState("");
  let [items, setItems] = useState([]);

  const handelResponsSearch = async () => {
    setSpinner(true)
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }

    const bodyParameters = {
      "product_name": filter,
    }

    try {
      const response = await axios.post(`https://test.rasadent.com/api/product_search_application`, bodyParameters, config);
      setSpinner(false)
      // console.log(response.data.products)
      if (response.data.products && response.data.products.length === 0) {
        await setItems(null)
      } else {
        await setItems(response.data.products)
      }
    } catch (error) {
      setSpinner(false)
      console.error(error);
    }
  }

  const onChange = (e) => {
    setFilter(e.target.value);
    setProductSearch("");
  };
  // end function for search

  // start fetch data card search
  const [productSearch, setProductSearch] = useState();
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
            <form onSubmit={handleSubmit(handelResponsSearch)}>
              <input type="text" placeholder={fa["Search for your product..."]} value={filter} onChange={onChange} />
              <IconButton onClick={handelResponsSearch} className={theme.palette.mode === "light" ? LightStyles.search_icon : DarkStyles.search_icon}>
                <SearchsIcon />
              </IconButton>
            </form>
          </div>
          {spinner ? (
            <>
              <Stack sx={{ mt: 2, mb: 1 }} spacing={1}>
                <Skeleton variant="text" width={400} sx={{ fontSize: '1rem' }} />
              </Stack>
              <Stack sx={{ mt: 1, mb: 1 }} spacing={1}>
                <Skeleton variant="text" width={400} sx={{ fontSize: '1rem' }} />
              </Stack>
              <Stack sx={{ mt: 1, mb: 1 }} spacing={1}>
                <Skeleton variant="text" width={400} sx={{ fontSize: '1rem' }} />
              </Stack>
              <Stack sx={{ mt: 1, mb: 1 }} spacing={1}>
                <Skeleton variant="text" width={400} sx={{ fontSize: '1rem' }} />
              </Stack>
              <Stack sx={{ mt: 1, mb: 1 }} spacing={1}>
                <Skeleton variant="text" width={400} sx={{ fontSize: '1rem' }} />
              </Stack>
              <Stack sx={{ mt: 1, mb: 1 }} spacing={1}>
                <Skeleton variant="text" width={400} sx={{ fontSize: '1rem' }} />
              </Stack>
              <Stack sx={{ mt: 1, mb: 1 }} spacing={1}>
                <Skeleton variant="text" width={400} sx={{ fontSize: '1rem' }} />
              </Stack>
              <Stack sx={{ mt: 1, mb: 1 }} spacing={1}>
                <Skeleton variant="text" width={400} sx={{ fontSize: '1rem' }} />
              </Stack>
            </>
          ) : (
            <ul className={theme.palette.mode === "light" ? LightStyles.list_search : DarkStyles.list_search}>
              {


                items?.map((i) => {
                  return (
                    <li key={i.id}>
                      <NavLink to={`/shop/single-product/${i.id}`} state={i.fa_name}>
                        <BexitIcon /> <span>{i.fa_name}</span>
                      </NavLink>
                    </li>
                  );
                })
              }
              {
                items === undefined && <div className={theme.palette.mode === "light" ? LightStyles.page_404 : DarkStyles.page_404}>
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
              }
              {
                items === null && <div className={theme.palette.mode === "light" ? LightStyles.page_404 : DarkStyles.page_404}>
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
              }
            </ul>
          )}

        </div>
      </Modal>
    </>
  );
}
