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

export default function App() {
  // start function darkmode
  const storage = typeof window !== "undifine" ? localStorage.theme : "light";
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
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/login" element={<Auth />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/terms" element={<Terms />}></Route>
            <Route path="/faq" element={<Faq />}></Route>
            <Route exact path="/shop" element={<HomeShop />}></Route>
            <Route path="/shop/notification" element={<Notification />}></Route>
            <Route path="/shop/wishlist" element={<Wishlist />}></Route>
            <Route path="/shop/single-product" element={<SingleShop />}></Route>
            <Route exact path="/jet" element={<HomeJet />}></Route>
            <Route path="/jet/jet-text" element={<JetText />}></Route>
            <Route path="/jet/jet-image" element={<JetImage />}></Route>
            <Route path="/jet/jet-voice" element={<JetVoice />}></Route>
          </Routes>
        </Layouts>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
