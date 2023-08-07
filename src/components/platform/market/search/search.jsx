import React, { useContext, useState } from "react";
import { Box, Modal } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../../../context/color-mode-context";
import LightStyles from "../../../../assets/sass/light/market/landing.module.scss";
import DarkStyles from "../../../../assets/sass/dark/market/landing.module.scss";
import SearchIcon from "../../../../assets/svg/search";

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: "440px",
  width:"100%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


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
  return (
    <>    
      <div
        className={
          theme.palette.mode === "light" ? LightStyles.search : DarkStyles.search
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
        <Box sx={style}>

        </Box>
      </Modal>
    </>
  );
}
