import React, { useContext, useState , useRef, useEffect } from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { set, useForm } from "react-hook-form";
import LightStyles from "../../../assets/sass/light/jet/text.module.scss";
import DarkStyles from "../../../assets/sass/dark/jet/text.module.scss";
import ColorModeContext from "../../../context/color-mode-context";
import SendIcon from "../../../assets/svg/send";
import PlusIcon from "../../../assets/svg/plus";
import fa from "../../../lang/fa.json";


export default function JetText() {
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

  // start send chat
  const [input, setInput] = useState();

  const [message , setMessage] = useState([]);

  const handelChange = (e) => {
    setInput(e.target.value)
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    const id = message.length + 1;
    setMessage((prev) => [
      ...prev,
      {
        id: id,
        message: input,
        complete: false,
      },
    ]);
    setInput("");
  }
  // end send chat

  // start function and state scroll bottom in message
  const bottomRef = useRef(null);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [message]);
  // end function and state scroll bottom in message


  return (
    <Box sx={{ mt: 5, mb: 5 }} className={theme.palette.mode === "light" ? LightStyles.jet_text : DarkStyles.jet_text}>

      <div className={theme.palette.mode === "light" ? LightStyles.chat_left : DarkStyles.chat_left}>
        <p>
        سلام ، پویا رستمی هستم
        <br />
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
        </p>
       <span className={theme.palette.mode === "light" ? LightStyles.date : DarkStyles.date}>1402/2/4</span>
      </div>

      {message.map((m) => {
          return (
          <div className={theme.palette.mode === "light" ? LightStyles.chat_right : DarkStyles.chat_right}>
            <p>{m.message}</p>
            <span className={theme.palette.mode === "light" ? LightStyles.date : DarkStyles.date}>1402/2/4</span>
          </div>
          );
      })}

      <div className={theme.palette.mode === "light" ? LightStyles.send : DarkStyles.send}>
        <form onSubmit={handelSubmit} className={theme.palette.mode === "light" ? LightStyles.form_group : DarkStyles.form_group}>
          <IconButton onClick={handleClick} className={theme.palette.mode === "light" ? LightStyles.btn_item : DarkStyles.btn_item}>
            <PlusIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem className={theme.palette.mode === "light" ? LightStyles.item_menu : DarkStyles.item_menu}>
              <p>
                {fa["Image online"]}
              </p>
            </MenuItem>
            <MenuItem className={theme.palette.mode === "light" ? LightStyles.item_menu : DarkStyles.item_menu}>
              <p>
                {fa["Voice online"]}
              </p>
            </MenuItem>
          </Menu>
          <input type="text" placeholder={fa["Note your text"]} value={input} onChange={handelChange} />
          <IconButton onClick={handelSubmit} className={theme.palette.mode === "light" ? LightStyles.btn_send : DarkStyles.btn_send}>
            <SendIcon />
          </IconButton>
        </form>
      </div>
      <div ref={bottomRef} />
    </Box>
  );
}
