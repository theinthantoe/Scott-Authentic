import React, { useState, useEffect } from "react";
import { useContextStatement } from "../Context/ContextStatement";
import { useNavigate } from "react-router-dom";
import CartDetail from "../components/CartDetail";

const Cart = () => {
  const navigate = useNavigate();
  const {
    state: { cart },
    dispatch,
  } = useContextStatement();
  const checkoutHandler = () => {
    dispatch({ type: "EMPTY_CART" });
    navigate("/success");
  };
  const [total, setTotal] = useState(0);
  const increasePrice = (price) => {
    setTotal(total + price);
  };
  const decreasePrice = (price) => {
    setTotal(total - price);
  };
  useEffect(() => {
    setTotal(cart.reduce((intial, current) => intial + current.price, 0));
  }, []);

  return (
    <>
      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <CartDetail
              key={item.id}
              item={item}
              increasePrice={increasePrice}
              decreasePrice={decreasePrice}
            />
          ))}
          <div className="bg-white border p-5 w-60 shadow-lg">
            <h1 className="text-3xl">Total - {total.toFixed(2)}</h1>
            <button
              onClick={checkoutHandler}
              className="bg-para px-5 py-2 mt-5 rounded transition transform hover:scale-105"
            >
              Check Out
            </button>
          </div>
          <button
            className="bg-warning px-5 py-2 mt-5 rounded transition transform hover:scale-105"
            onClick={() => dispatch({ type: "EMPTY_CART" })}
          >
            Empty Card
          </button>
        </div>
      ) : (
        <h1>Empty cart</h1>
      )}
    </>
  );
};

export default Cart;
