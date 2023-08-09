import React, { useContext, useState } from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import LightStyles from "../../../assets/sass/light/jet/voice.module.scss";
import DarkStyles from "../../../assets/sass/dark/jet/voice.module.scss";
import ColorModeContext from "../../../context/color-mode-context";
import SendIcon from "../../../assets/svg/send";
import PlusIcon from "../../../assets/svg/plus";

export default function JetVoice() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode
  // start function and state dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // end function and state dropdown
  return (
    <Box
      sx={{ mt: 5, mb: 5 }}
      className={
        theme.palette.mode === "light"
          ? LightStyles.jet_text
          : DarkStyles.jet_text
      }
    >
      <div
        className={
          theme.palette.mode === "light"
            ? LightStyles.chat_right
            : DarkStyles.chat_right
        }
      >
       <p>سلام ، پویا رستمی هستم</p>
       <span className={theme.palette.mode === "light" ? LightStyles.date : DarkStyles.date}>1402/2/4</span>
      </div>
      <div
        className={
          theme.palette.mode === "light"
            ? LightStyles.chat_left
            : DarkStyles.chat_left
        }
      >
        <p>
          سلام ، پویا رستمی هستم
          <br />
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
        <span className={theme.palette.mode === "light" ? LightStyles.date : DarkStyles.date}>1402/2/4</span>
      </div>
      <div
        className={
          theme.palette.mode === "light" ? LightStyles.send : DarkStyles.send
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
            onClick={handleClick}
            className={
              theme.palette.mode === "light"
                ? LightStyles.btn_item
                : DarkStyles.btn_item
            }
          >
            <PlusIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem
              className={
                theme.palette.mode === "light"
                  ? LightStyles.item_menu
                  : DarkStyles.item_menu
              }
            >
              <NavLink
                to={"/jet/jet-text"}
                state={"ارسال متن برای ثبت سفارش رساجت"}
              >
                ارسال متن
              </NavLink>
            </MenuItem>
            <MenuItem
              className={
                theme.palette.mode === "light"
                  ? LightStyles.item_menu
                  : DarkStyles.item_menu
              }
            >
              <NavLink
                to={"/jet/jet-image"}
                state={"ارسال عکس برای ثبت سفارش رساجت"}
              >
                آنلاین عکس بگیرید
              </NavLink>
            </MenuItem>
          </Menu>
          <label
            htmlFor="upload"
            className={
              theme.palette.mode === "light"
                ? LightStyles.input_upload
                : DarkStyles.input_upload
            }
          >
            ارسال صدا
          </label>
          <input
            type="file"
            id="upload"
            className="d-none"
            placeholder="متن خود را یاداشت کنید"
          />
          <IconButton
            className={
              theme.palette.mode === "light"
                ? LightStyles.btn_send
                : DarkStyles.btn_send
            }
          >
            <SendIcon />
          </IconButton>
        </div>
      </div>
    </Box>
  );
}
