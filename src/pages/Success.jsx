import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="w-1/2 mx-auto bg-slate-300">
      <div className="flex flex-col items-center p-5">
        <h2>Order is successed</h2>
        <p>Thanks for Visiting</p>
        <button
          onClick={() => navigate("/")}
          className="bg-warning px-5 py-2 rounded mt-5 "
        >
          Let go! shopping
        </button>
      </div>
    </div>
  );
};

export default Success;
