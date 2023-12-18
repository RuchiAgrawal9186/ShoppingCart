import React from "react";
import ProductsPage from "../Pages/ProductsPage";
import { Routes, Route } from "react-router-dom";
import CartPage from "../Pages/CartPage";
import Thankyou from "../Pages/Thankyou";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductsPage></ProductsPage>} />
        <Route path="/cart" element={<CartPage></CartPage>} />
        <Route path="/thankyou" element={<Thankyou></Thankyou>} />
      </Routes>
    </>
  );
};

export default MainRoutes;
