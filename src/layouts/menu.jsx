import React from "react";
import { NavLink } from "react-router-dom";
import Container from "@mui/material/Container";
import styles from "../assets/sass/menu.module.scss";
import HomeIcon from "../assets/svg/home";
import UserIcon from "../assets/svg/user";
import CommentsIcon from "../assets/svg/comments";
import ShoppingCartIcon from "../assets/svg/shopping-cart";
import ShopIcon from "../assets/svg/shop";

export default function Menu() {
  return (
    <div className={styles.menu_bar}>
      <Container className={styles.flex} sx={{ p: 2 }} maxWidth="sm">
        <NavLink className={styles.pr_1}>
          <HomeIcon />
        </NavLink>
        <NavLink className={styles.pl_3}>
          <ShoppingCartIcon />
        </NavLink>
        <NavLink className={styles.shop_box}>
          <span>
            <ShopIcon />
            <span className={styles.bage}>4</span>
          </span>
        </NavLink>
        <NavLink className={styles.pr_3}>
          <CommentsIcon />
        </NavLink>
        <NavLink className={styles.pl_1}>
          <UserIcon />
        </NavLink>
      </Container>
    </div>
  );
}
