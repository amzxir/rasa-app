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
      <div
        className={
          theme.palette.mode === "light"
            ? LightStyles.search
            : DarkStyles.search
        }
      >
        <div
          className={
            theme.palette.mode === "light"
              ? LightStyles.form_group
              : DarkStyles.form_group
          }
        >
          <button
            onClick={handleOpen}
            className={
              theme.palette.mode === "light"
                ? LightStyles.input
                : DarkStyles.input
            }
          >
            جستجو کالای مورد نظر ...
          </button>
          <SearchIcon />
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className={
            theme.palette.mode === "light"
              ? LightStyles.component_search
              : DarkStyles.component_search
          }
        >
          <div
            className={
              theme.palette.mode === "light"
                ? LightStyles.form_group
                : DarkStyles.form_group
            }
          >
            <IconButton
              className={
                theme.palette.mode === "light"
                  ? LightStyles.search_fillter
                  : DarkStyles.search_fillter
              }
            >
              <FilltersIcon />
            </IconButton>
            <input
              type="text"
              placeholder="محصول خود را جستجو کنید ..."
              value={filter}
              onChange={onChange}
            />
            <IconButton
              className={
                theme.palette.mode === "light"
                  ? LightStyles.search_icon
                  : DarkStyles.search_icon
              }
            >
              <SearchsIcon />
            </IconButton>
          </div>
          <ul
            className={
              theme.palette.mode === "light"
                ? LightStyles.list_search
                : DarkStyles.list_search
            }
          >
            {items.length === 0 &&
            filter !== "" &&
            productSearch.length === 0 ? (
              <div
                className={
                  theme.palette.mode === "light"
                    ? LightStyles.page_404
                    : DarkStyles.page_404
                }
              >
                <div
                  className={
                    theme.palette.mode === "light"
                      ? LightStyles.img_center
                      : DarkStyles.img_center
                  }
                >
                  <img src="image/404.png" alt="" />
                </div>
                <div
                  className={
                    theme.palette.mode === "light"
                      ? LightStyles.content
                      : DarkStyles.content
                  }
                >
                  <p
                    className={
                      theme.palette.mode === "light"
                        ? LightStyles.title
                        : DarkStyles.title
                    }
                  >
                    یافت نشد 🙄
                  </p>
                  <p
                    className={
                      theme.palette.mode === "light"
                        ? LightStyles.text
                        : DarkStyles.text
                    }
                  >
                    با عرض پوزش، کلمه کلیدی که وارد کردید یافت نشد، لطفاً دوباره
                    بررسی کنید یا با کلمه کلیدی دیگری جستجو کنید.
                  </p>
                </div>
              </div>
            ) : (
              items.map((i) => {
                return (
                  <li key={i.id} onClick={() => cardSearch(i)}>
                    <BexitIcon /> <span>{i.name}</span>
                  </li>
                );
              })
            )}
          </ul>

          <Grid container spacing={2}>
            {productSearch.length === 0 || filter.length === 0 ? null : (
              <Grid item xs={6}>
                <div
                  className={
                    theme.palette.mode === "light"
                      ? LightStyles.card_product
                      : DarkStyles.card_product
                  }
                >
                  <div
                    className={
                      theme.palette.mode === "light"
                        ? LightStyles.card_img
                        : DarkStyles.card_img
                    }
                  >
                    <NavLink
                      to={"/shop/single-product"}
                      className={
                        theme.palette.mode === "light"
                          ? LightStyles.img_center
                          : DarkStyles.img_center
                      }
                    >
                      <img src="image/product-1.png" alt="" />
                    </NavLink>
                    <div
                      className={
                        theme.palette.mode === "light"
                          ? LightStyles.icon_wishlist
                          : DarkStyles.icon_wishlist
                      }
                    >
                      <HeartIcon />
                    </div>
                  </div>
                  <div
                    className={
                      theme.palette.mode === "light"
                        ? LightStyles.shop
                        : DarkStyles.shop
                    }
                  >
                    <span>{productSearch.category}</span>
                  </div>
                  <div
                    className={
                      theme.palette.mode === "light"
                        ? LightStyles.product_details
                        : DarkStyles.product_details
                    }
                  >
                    <NavLink
                      to={"/shop/single-product"}
                      className={
                        theme.palette.mode === "light"
                          ? LightStyles.name_product
                          : DarkStyles.name_product
                      }
                    >
                      {productSearch.name}
                    </NavLink>
                    <p
                      className={
                        theme.palette.mode === "light"
                          ? LightStyles.price_product
                          : DarkStyles.price_product
                      }
                    >
                      {productSearch.price} تومان
                    </p>
                  </div>
                </div>
              </Grid>
            )}
          </Grid>
        </div>
      </Modal>
    </>
  );
}
