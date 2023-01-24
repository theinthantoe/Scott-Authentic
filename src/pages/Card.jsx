import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContextStatement } from "../Context/ContextStatement";
const Card = ({ product }) => {
  const { dispatch } = useContextStatement();
  return (
    <div className="w-72 border p-5 mx-auto shadow-md rounded transition transform hover:scale-105 ">
      <img src={product?.image} alt="" className="h-[200px] mx-auto" />
      <h1 className=" font-bold text-header my-3">
        {product?.title?.substring(0, 25)}
      </h1>
      <div className="flex items-center gap-1 my-3">
        <AiOutlineStar className="text-xl text-warning" />
        <small className="text-para">{product?.rating?.rate}</small>
      </div>
      <p className="text-xl text-para py-3">Price - {product?.price}</p>
      <div>
        <button
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          className="bg-warning text-btext px-5 py-2 rounded mr-5 transform transition  hover:scale-90"
        >
          Add To Cart
        </button>
        <Link to={`/detail/${product.id}`}>
          <button className="bg-para text-btext px-5 py-2 rounded transition transform hover:scale-90 ">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
