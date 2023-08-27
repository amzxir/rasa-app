import React, { useMemo, useState, useEffect } from "react";
import Layouts from "./layouts/layouts";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";
import Terms from "./components/terms/terms";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ColorModeContext from "./context/color-mode-context";
import Faq from "./components/faq/faq";
import Auth from "./components/auth/auth";
import HomeShop from "./components/platform/market/landing/home";
import Notification from "./components/platform/market/notification/notification";
import Wishlist from "./components/platform/market/wishlist/wishlist";
import HomeJet from "./components/platform/jet/home";
import JetText from "./components/platform/jet/jet-text";
import JetImage from "./components/platform/jet/jet-image";
import JetVoice from "./components/platform/jet/jet-voice";
import SingleShop from "./components/platform/market/single/single";
import Blog from "./components/platform/blog/blog";
import Club from "./components/platform/club/club";
import CardShop from "./components/platform/market/card/card/card";
import ShoppingShop from "./components/platform/market/card/shopping/shopping";
import AddAddressShop from "./components/platform/market/card/address/add";
import NewAddressShop from "./components/platform/market/card/address/new";
import PayShop from "./components/platform/market/card/pay/pay";
import SuccessPayShop from "./components/platform/market/card/alert/success";
import ErrorPayShop from "./components/platform/market/card/alert/error";




export default function App() {
  // start function darkmode
  const storage = localStorage.theme !== "undefined" ? localStorage.theme : "light";
  const [storageTheme, setStorageTheme] = useState(storage);
  const [mode, setMode] = useState(storage);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  useEffect(() => {
    localStorage.setItem("theme", mode);
    setStorageTheme(mode);
  }, [theme, storageTheme, mode]);
  // end function darkmode

  return (
    <ColorModeContext.Provider value={{ colorMode }}>
      <ThemeProvider theme={theme}>
        <Layouts>
          <Routes>
            {/* routeing component layout */}
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/login" element={<Auth />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/terms" element={<Terms />}></Route>
            <Route path="/faq" element={<Faq />}></Route>
            {/* routeing component shop */}
            <Route exact path="/shop" element={<HomeShop />}></Route>
            <Route path="/shop/notification" element={<Notification />}></Route>
            <Route path="/shop/wishlist" element={<Wishlist />}></Route>
            <Route path="/shop/single-product" element={<SingleShop />}></Route>
            <Route path="/shop/card" element={<CardShop/>}></Route>
            <Route path="/shop/shopping" element={<ShoppingShop/>}></Route>
            <Route path="/shop/add-address" element={<AddAddressShop/>}></Route>
            <Route path="/shop/new-address" element={<NewAddressShop/>}></Route>
            <Route path="/shop/pay" element={<PayShop/>}></Route>
            <Route path="/shop/pay/sucess" element={<SuccessPayShop/>}></Route>
            <Route path="/shop/pay/error" element={<ErrorPayShop/>}></Route>
            {/* routeing component jet */}
            <Route exact path="/jet" element={<HomeJet />}></Route>
            <Route path="/jet/jet-text" element={<JetText />}></Route>
            <Route path="/jet/jet-image" element={<JetImage />}></Route>
            <Route path="/jet/jet-voice" element={<JetVoice />}></Route>
            {/* routeing component blog */}
            <Route path="/blog" element={<Blog />}></Route>
            {/* routeing component club */}
            <Route path="/club" element={<Club />}></Route>
          </Routes>
        </Layouts>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
