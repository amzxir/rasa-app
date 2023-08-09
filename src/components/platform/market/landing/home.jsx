import React, { useContext, Suspense, lazy, useState } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ColorModeContext from "../../../../context/color-mode-context";
import Search from "../search/search";

const Banner = lazy(() => import("./banner/banner"));
const Slide = lazy(() => import("./banner/slide"));
const ProductSlide = lazy(() => import("./product/product-slide"));

export default function LandingShop() {
  // start function darkmode
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  // end function darkmode

  // start fetch data bennr slide
  const bannerSlide = [
    { id: 1, name: "رسادنت", path_img: "image/slider1.png" },
    { id: 2, name: "رسادنت", path_img: "image/slider1.png" },
    { id: 3, name: "رسادنت", path_img: "image/slider1.png" },
    { id: 4, name: "رسادنت", path_img: "image/slider1.png" },
    { id: 5, name: "رسادنت", path_img: "image/slider1.png" },
  ];
  const [bannerData, setBannerData] = useState(bannerSlide);
  // end fetch data bennr slide

  // start fetch data title and product
  const product = [
    {
      id: 1,
      title: "پیشنهاد شگقت انگیز",
      path: null,
      product: [
        {
          id: 1,
          name: "کامپوزیت سارمکو",
          path:"/shop/single-product",
          path_img: "image/product-1.png",
          shop_name: "فروشگاه مانگو طب",
          price: "12000",
          rating: 3,
          comment: "12",
        },
        {
          id: 2,
          name: "باندینگ نسل 8 اف جی ام",
          path:"/shop/single-product",
          path_img: "image/product-2.png",
          shop_name: "فروشگاه طب",
          price: "7000",
          rating: 5,
          comment: "10",
        },
        {
          id: 3,
          name: "آلژینات بایر  کولزر",
          path:"/shop/single-product",
          path_img: "image/product-2.png",
          shop_name: "فروشگاه مانگو",
          price: "3000",
          rating: 3,
          comment: "2",
        },
        {
          id: 4,
          name: "آلژینات زرماخ",
          path:"/shop/single-product",
          path_img: "image/product-1.png",
          shop_name: "فروشگاه رسادنت",
          price: "34000",
          rating: 2,
          comment: "5",
        },
        {
          id: 5,
          name: "کامپوزیت سارمکو",
          path:"/shop/single-product",
          path_img: "image/product-2.png",
          shop_name: "فروشگاه مانگو طب",
          price: "56000",
          rating: 1,
          comment: "6",
        },
        {
          id: 6,
          name: "باندینگ نسل 8 اف جی ام",
          path:"/shop/single-product",
          path_img: "image/product-2.png",
          shop_name: "فروشگاه مانگو",
          price: "12000",
          rating: 5,
          comment: "4",
        },
        {
          id: 7,
          name: "آلژینات بایر  کولزر",
          path:"/shop/single-product",
          path_img: "image/product-2.png",
          shop_name: "فروشگاه طب",
          price: "50000",
          rating: 2,
          comment: "5",
        },
        {
          id: 8,
          name: "آلژینات زرماخ",
          path:"/shop/single-product",
          shop_name: "فروشگاه رسادنت",
          path_img: "image/product-1.png",
          price: "85000",
          rating: 5,
          comment: "54",
        },
        {
          id: 9,
          name: "آلژینات زرماخ",
          path:"/shop/single-product",
          path_img: "image/product-2.png",
          shop_name: "فروشگاه مانگو طب",
          price: "34000",
          rating: 5,
          comment: "45",
        },
        {
          id: 10,
          name: "کامپوزیت سارمکو",
          path:"/shop/single-product",
          path_img: "image/product-1.png",
          shop_name: "فروشگاه مانگو طب",
          price: "12300",
          rating: 5,
          comment: "4",
        },
      ],
    },
    {
      id: 2,
      title: "پرفروش ترین محصولات",
      path: null,
      product: [
        {
          id: 1,
          name: "کامپوزیت سارمکو",
          path:"/shop/single-product",
          path_img: "image/product-1.png",
          shop_name: "فروشگاه مانگو طب",
          price: "12000",
          rating: 3,
          comment: "12",
        },
        {
          id: 2,
          name: "باندینگ نسل 8 اف جی ام",
          path:"/shop/single-product",
          path_img: "image/product-2.png",
          shop_name: "فروشگاه طب",
          price: "7000",
          rating: 5,
          comment: "10",
        },
        {
          id: 3,
          name: "آلژینات بایر  کولزر",
          path:"/shop/single-product",
          path_img: "image/product-2.png",
          shop_name: "فروشگاه مانگو",
          price: "3000",
          rating: 3,
          comment: "2",
        },
        {
          id: 4,
          name: "آلژینات زرماخ",
          path:"/shop/single-product",
          path_img: "image/product-1.png",
          shop_name: "فروشگاه رسادنت",
          price: "34000",
          rating: 2,
          comment: "5",
        },
        {
          id: 5,
          name: "کامپوزیت سارمکو",
          path:"/shop/single-product",
          path_img: "image/product-2.png",
          shop_name: "فروشگاه مانگو طب",
          price: "56000",
          rating: 1,
          comment: "6",
        },
        {
          id: 6,
          name: "باندینگ نسل 8 اف جی ام",
          path:"/shop/single-product",
          path_img: "image/product-2.png",
          shop_name: "فروشگاه مانگو",
          price: "12000",
          rating: 5,
          comment: "4",
        },
      ],
    },
    {
      id: 3,
      title: "جدیدترین محصولات",
      path: null,
      product: [
        {
          id: 1,
          name: "کامپوزیت سارمکو",
          path:"/shop/single-product",
          path_img: "image/product-1.png",
          shop_name: "فروشگاه مانگو طب",
          price: "12000",
          rating: 3,
          comment: "12",
        },
        {
          id: 2,
          name: "باندینگ نسل 8 اف جی ام",
          path:"/shop/single-product",
          path_img: "image/product-2.png",
          shop_name: "فروشگاه طب",
          price: "7000",
          rating: 5,
          comment: "10",
        },
        {
          id: 3,
          name: "آلژینات بایر  کولزر",
          path:"/shop/single-product",
          path_img: "image/product-2.png",
          shop_name: "فروشگاه مانگو",
          price: "3000",
          rating: 3,
          comment: "2",
        },
      ],
    },
  ];
  const [productData, setProductData] = useState(product);
  // end fetch data title and product
  return (
    <Box sx={{ mt: 5, mb: 5 }}>
      <Search />

      <Suspense fallback={<div>Loading...</div>}>
        <Slide bannerData={bannerData} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <ProductSlide productData={productData} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Banner />
      </Suspense>
    </Box>
  );
}
