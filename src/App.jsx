import React, { useMemo, useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ToastContainer, toast } from 'react-toastify';
import Layouts from "./layouts/layouts";
import Home from "./components/home/home";
import About from "./components/about/about";
import Terms from "./components/terms/terms";
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
import HomeForm from "./components/platform/form/home/home";
import Form from "./components/platform/form/form/form";
import Alert from "./components/platform/form/alert/alert";
import Download from "./components/platform/form/download/download";
import 'react-toastify/dist/ReactToastify.css';
import Protected from "./protected";
import AddToHomeScreen from './add-to-home-screen/AddToHomeScreen';
import './modifiedStyling.scss';






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

  // start fetch and function product card
  const [cardProduct , setCardProduct] = useState([]);

  const handlerCard = (i , id) => {
    const arr = [...cardProduct];
    const newColors = cardProduct.some(item => item.id === id);
    if(newColors !== true){
      arr.push(i)
      setCardProduct(arr)
      toast.success('به سبد خرید اضافه شد')
    } else {
      toast.error('در سبد خرید وجود دارد')
    }
  }

  // end fetch and function product card

  // start fetch data token in authentication
  const token = localStorage.getItem("token");
  const mobile = localStorage.getItem("mobile");
  const location = useLocation();
  // end fetch data token in authentication

  // start fetch state product in localStorage
  // end fetch state product in localStorage

  // start state loading 
  const [spinner, setSpinner] = useState(false);
  // end state loading 

  return (
    <ColorModeContext.Provider value={{ colorMode, token, spinner, setSpinner , mobile , handlerCard , cardProduct , setCardProduct }}>
      <ThemeProvider theme={theme}>
        <Layouts>
          <NetworkStatus>
            <Routes key={location.key} location={location}>
              {/* routeing component layout */}
              <Route path="/login" element={<Auth />}></Route>
              <Route element={<Protected />}>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/terms" element={<Terms />}></Route>
                <Route path="/faq" element={<Faq />}></Route>
                {/* routeing component shop */}
                <Route exact path="/shop" element={<HomeShop sendProduct={handelSendProduct} />}></Route>
                <Route path="/shop/category-list" element={<CategoryList />}></Route>
                <Route path="/shop/compare" element={<Compare />}></Route>
                <Route path="/shop/products/:productName" element={<ProductSpecial fetchProduct={fetchProduct} sendProduct={handelSendProduct} />}></Route>
                <Route path="/shop/notification" element={<Notification sendNotif={handelSendProduct} />}></Route>
                <Route path="/shop/notification-single/:notifId" element={<NotificationSingle fetchNotif={fetchProduct} />}></Route>
                <Route path="/shop/product-category/:productName" element={<ProductCategory sendProduct={handelSendProduct} />}></Route>
                <Route path="/shop/wishlist" element={<Wishlist sendProduct={handelSendProduct} />}></Route>
                <Route path="/shop/single-product/:id" element={<SingleShop fetchProduct={fetchProduct} />}></Route>
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
                {/* routeing component form */}
                <Route path="/form" element={<HomeForm />}></Route>
                <Route path="/form/create" element={<Form />}></Route>
                <Route path="/form/create/alert" element={<Alert />}></Route>
                <Route path="/form/create/download" element={<Download />}></Route>
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
              </Route>
            </Routes>
          </NetworkStatus>
          <ToastContainer
            position="top-right"
            rtl={true}
            theme="colored"
            style={{ zIndex: '100000' }}
          />

        </Layouts>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
