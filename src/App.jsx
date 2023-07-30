import React from "react";
import Layouts from "./layouts/layouts";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";
import Terms from "./components/terms/terms";

export default function App() {
  return (
    <Layouts>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/terms" element={<Terms/>}></Route>
      </Routes>
    </Layouts>
  );
}
