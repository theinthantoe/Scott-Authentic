import React from "react";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import CartDetail from "./components/CartDetail";
import Success from "./pages/Success";
// import Spinner from "./components/Spinner";

const App = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      {/* <Spinner /> */}
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/detail/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/:id" element={<CartDetail />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
};

export default App;
