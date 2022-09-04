import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../Pages/Landing";
import ProductDetails from "../Pages/ProductDetails";
import ProductPresentation from "../Pages/ProductPresentation";

const Navigation = () => {
  return (
    <div className="container">
      <Routes>
        <Route index element={<Landing />} />
        <Route path="details">
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="present">
          <Route path=":id" element={<ProductPresentation />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Navigation;
