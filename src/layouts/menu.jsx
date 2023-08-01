import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LightStyles from "../assets/sass/light/menu.module.scss";
import DarkStyles from "../assets/sass/dark/menu.module.scss";
import HomeIcon from "../assets/svg/home";
import UserIcon from "../assets/svg/user";
import CommentsIcon from "../assets/svg/comments";
import ShoppingCartIcon from "../assets/svg/shopping-cart";
import ShopIcon from "../assets/svg/shop";
import ColorModeContext from "../context/color-mode-context";

export default function Menu() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  return (
    <div
      className={
        theme.palette.mode === "light"
          ? LightStyles.menu_bar
          : DarkStyles.menu_bar
      }
    >
      <Container
        className={
          theme.palette.mode === "light" ? LightStyles.flex : DarkStyles.flex
        }
        sx={{ p: 2 }}
        maxWidth="sm"
      >
        <NavLink
          to={"/"}
          className={
            theme.palette.mode === "light" ? LightStyles.pr_1 : DarkStyles.pr_1
          }
        >
          <HomeIcon />
        </NavLink>
        <NavLink
          className={
            theme.palette.mode === "light" ? LightStyles.pl_3 : DarkStyles.pl_3
          }
        >
          <ShoppingCartIcon />
        </NavLink>
        <NavLink
          to={"/shop"}
          className={
            theme.palette.mode === "light"
              ? LightStyles.shop_box
              : DarkStyles.shop_box
          }
        >
          <span>
            <ShopIcon />
            <span
              className={
                theme.palette.mode === "light"
                  ? LightStyles.bage
                  : DarkStyles.bage
              }
            >
              4
            </span>
          </span>
        </NavLink>
        <NavLink
          className={
            theme.palette.mode === "light" ? LightStyles.pr_3 : DarkStyles.pr_3
          }
        >
          <CommentsIcon />
        </NavLink>
        <NavLink
          className={
            theme.palette.mode === "light" ? LightStyles.pl_1 : DarkStyles.pl_1
          }
        >
          <UserIcon />
        </NavLink>
      </Container>
    </div>
  );
}
