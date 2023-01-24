import React from "react";
import { SiShopify } from "react-icons/si";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useContextStatement } from "../Context/ContextStatement";
const Navbar = () => {
  const {
    search,
    setSearch,
    state: { cart },
  } = useContextStatement();
  // console.log(search);
  return (
    <nav className="flex items-center justify-between bg-primary shadow-lg my-5 px-3 py-2 rounded">
      <Link to={"/"}>
        <div className="flex gap-2 items-center">
          <SiShopify size={40} className="text-warning" />
          <h1 className="text-3xl text-header  font-bold">Scott Authentic</h1>
        </div>
      </Link>
      <div className="flex gap-3 items-center">
        <Link to={"/cart"}>
          <div className="flex gap-2 items-center">
            <HiOutlineShoppingCart className="text-warning text-xl" />
            <small>{cart.length}</small>
          </div>
        </Link>
        <div className="flex gap-2 items-center border  rounded px-3">
          <AiOutlineSearch className="text-xl text-warning" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="outline-none "
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
