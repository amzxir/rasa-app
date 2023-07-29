import React from "react";
import Layouts from "./layouts/layouts";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";

export default function App() {
  return (
    <Layouts>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Layouts>
  );
}
