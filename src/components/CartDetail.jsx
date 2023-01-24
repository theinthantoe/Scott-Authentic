import React from "react";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useContextStatement } from "../Context/ContextStatement";

const CartDetail = ({ item, increasePrice, decreasePrice }) => {
  const { dispatch } = useContextStatement();
  const [qty, setQty] = useState(1);
  const increaseHandler = () => {
    setQty((prev) => prev + 1);
    increasePrice(item.price);
  };
  const decreaseHandler = () => {
    if (qty > 1) {
      setQty((prev) => prev - 1);
      decreasePrice(item.price);
    }
  };
  const deleteHandler = () => {
    decreasePrice(item.price * qty);
    dispatch({ type: "REMOVE_CART", payload: item });
  };

  return (
    <div className="flex  gap-3  items-center  p-5" key={item.id}>
      <img src={item.image} className="w-32 " alt="" />
      <div>
        <div className="">
          <h1>{item.title}</h1>
          <p>{item.price * qty}</p>
        </div>
        <div className="flex  items-center">
          <button
            onClick={increaseHandler}
            className="bg-para px-5 py-2 rounded-sm"
          >
            +
          </button>
          <small>{qty}</small>
          <button
            onClick={decreaseHandler}
            className="bg-warning px-5 py-2 rounded-sm"
          >
            -
          </button>
          <AiOutlineDelete
            onClick={deleteHandler}
            className="ml-5 text-3xl text-para"
          />
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
