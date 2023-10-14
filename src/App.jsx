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
import NotificationSingle from "./components/platform/market/notification/single";
import Wishlist from "./components/platform/market/wishlist/wishlist";
import HomeJet from "./components/platform/jet/home";
import JetText from "./components/platform/jet/jet-text";
import SingleShop from "./components/platform/market/single/single";
import Blog from "./components/platform/blog/blog";
import Club from "./components/platform/club/club";
import CardShop from "./components/platform/market/card/cards/card";
import ShoppingShop from "./components/platform/market/card/shopping/shopping";
import AddAddressShop from "./components/platform/market/card/address/add";
import NewAddressShop from "./components/platform/market/card/address/new";
import PayShop from "./components/platform/market/card/pay/pay";
import SuccessPayShop from "./components/platform/market/card/alert/success";
import ErrorPayShop from "./components/platform/market/card/alert/error";
import Profile from "./components/profile/profile";
import ProfileEdit from "./components/profile/profile-edit";
import Order from "./components/profile/order/order";
import OrderDetails from "./components/profile/order/details/details";
import ManageShop from "./components/profile/shop/manage";
import CreateProduct from "./components/profile/shop/product/create/create";
import ProductSpecial from "./components/platform/market/category/products";
import CategoryList from "./components/platform/market/category/category-list";
import NetworkStatus from "./components/network/network";
import Support from "./components/profile/support/support";
import ProductCategory from "./components/platform/market/category/product-category";
import Compare from "./components/platform/market/compare/compare";
import Invoice from "./components/profile/order/invoice/invoice";
import ProductShop from "./components/profile/shop/product/product";
import Personalization from "./components/profile/shop/personalization/personalization";
import Authentication from "./components/profile/shop/authentication/authentication";
import Information from "./components/profile/shop/bank/information";
import Documents from "./components/profile/shop/documents/documents";
import Orders from "./components/profile/shop/orders/orders";
import Chortkeh from "./components/platform/chortkeh/chortkeh";




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

  // start fetch product data 
  const [fetchProduct, setFetchProduct] = useState()

  const handelSendProduct = (i) => {
    setFetchProduct(i)
  }
  // end fetch product data 



  return (
    <ColorModeContext.Provider value={{ colorMode }}>
      <ThemeProvider theme={theme}>
        <Layouts>
          <NetworkStatus>
            <Routes>
              {/* routeing component layout */}
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/login" element={<Auth />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/terms" element={<Terms />}></Route>
              <Route path="/faq" element={<Faq />}></Route>
              {/* routeing component shop */}
              <Route exact path="/shop" element={<HomeShop sendProduct={handelSendProduct} />}></Route>
              <Route path="/shop/category-list" element={<CategoryList />}></Route>
              <Route path="/shop/compare" element={<Compare />}></Route>
              <Route path="/shop/products/:productName" element={<ProductSpecial fetchProduct={fetchProduct} />}></Route>
              <Route path="/shop/notification" element={<Notification sendNotif={handelSendProduct} />}></Route>
              <Route path="/shop/notification-single/:notifId" element={<NotificationSingle fetchNotif={fetchProduct} />}></Route>
              <Route path="/shop/product-category/:productName" element={<ProductCategory />}></Route>
              <Route path="/shop/wishlist" element={<Wishlist />}></Route>
              <Route path="/shop/single-product" element={<SingleShop />}></Route>
              <Route path="/shop/card" element={<CardShop />}></Route>
              <Route path="/shop/shopping" element={<ShoppingShop />}></Route>
              <Route path="/shop/add-address" element={<AddAddressShop />}></Route>
              <Route path="/shop/new-address" element={<NewAddressShop />}></Route>
              <Route path="/shop/invoice" element={<PayShop />}></Route>
              <Route path="/shop/pay/sucess" element={<SuccessPayShop />}></Route>
              <Route path="/shop/pay/error" element={<ErrorPayShop />}></Route>
              {/* routeing component jet */}
              <Route exact path="/jet" element={<HomeJet />}></Route>
              <Route path="/jet/send" element={<JetText />}></Route>
              {/* routeing component blog */}
              <Route path="/blog" element={<Blog />}></Route>
              {/* routeing component club */}
              <Route path="/club" element={<Club />}></Route>
              {/* routeing component chortkeh */}
              <Route path="/chortkeh" element={<Chortkeh />}></Route>
              {/* routing compoent profile */}
              <Route exact path="/profile" element={<Profile />}></Route>
              <Route path="/profile/edit" element={<ProfileEdit />}></Route>
              <Route path="/profile/support" element={<Support />}></Route>
              <Route path="/profile/order" element={<Order sendInvoice={handelSendProduct} />}></Route>
              <Route path="/profile/order/details/:invoice" element={<OrderDetails sendInvoice={handelSendProduct} fetchProduct={fetchProduct} />}></Route>
              <Route path="/profile/order/invoice/:details" element={<Invoice fetchProduct={fetchProduct} />}></Route>
              <Route path="/profile/shop/manage" element={<ManageShop />}></Route>
              <Route path="/profile/shop/personalization" element={<Personalization />}></Route>
              <Route path="/profile/shop/authentication" element={<Authentication />}></Route>
              <Route path="/profile/shop/bank-information" element={<Information />}></Route>
              <Route path="/profile/shop/documents" element={<Documents />}></Route>
              <Route path="/profile/shop/orders" element={<Orders />}></Route>
              <Route path="/profile/shop/products" element={<ProductShop />}></Route>
              <Route path="/profile/shop/manage/create-product" element={<CreateProduct />}></Route>
            </Routes>
          </NetworkStatus>
        </Layouts>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
