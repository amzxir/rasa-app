import React, { useContext, useState } from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import LightStyles from "../../../assets/sass/light/jet/image.module.scss";
import DarkStyles from "../../../assets/sass/dark/jet/image.module.scss";
import ColorModeContext from "../../../context/color-mode-context";
import SendIcon from "../../../assets/svg/send";
import PlusIcon from "../../../assets/svg/plus";
import fa from "../../../lang/fa.json";

export default function JetImage() {
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
        <div>
          <img src="/image/cn34ua9oi.png" alt="" />
        </div>
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
                state={fa["Send text to register the order"]}
              >
                {fa["Send text"]}
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
                to={"/jet/jet-voice"}
                state={fa["Send voice to register the order"]}
              >
                {fa["Voice online"]}
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
            {fa["Upload your photo"]}
          </label>
          <input
            type="file"
            id="upload"
            className="d-none"
            placeholder={fa["Note your text"]}
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
