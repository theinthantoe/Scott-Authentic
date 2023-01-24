import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getData } from "../Api";
import { AiOutlineStar } from "react-icons/ai";
import { useContextStatement } from "../Context/ContextStatement";
import Spinner from "../components/Spinner";

const ProductDetails = () => {
  const { dispatch } = useContextStatement();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const getProductDetails = async () => {
    setProduct(await getData(`/products/${id}`));
  };
  const getCategory = async () => {
    const data = await getData(`/products/category/${product.category}`);
    const filterData = data?.filter((item) => item.id !== product.id);
    setProducts(filterData);
  };
  useEffect(() => {
    getProductDetails();
    getCategory();
  }, [product, setProduct, products]);
  return (
    <>
      {product && products.length > 0 ? (
        <div>
          <div className="flex gap-3 ">
            <img
              src={product.image}
              className="w-72 border-2 shadow-lg px-10 py-5"
              alt=""
            />
            <div className="w-94 ">
              <h1 className="text-2xl text-bold text-header my-2">
                {product?.title}
              </h1>
              <h2 className="text-xl text-bold text-header my-2">
                {product?.category}
              </h2>
              <p className="text-xl text-para my-2">{product?.description}</p>
              <div className="flex items-center gap-1 my-2">
                <AiOutlineStar className="text-xl text-warning " />
                <small className="text-para">{product?.rating?.rate}</small>
              </div>
              <h3 className="text-para my-2">Price {product.price}</h3>
              <button
                onClick={() =>
                  dispatch({ type: "ADD_TO_CART", payload: product })
                }
                className="w-40 py-2 bg-warning rounded text-btntext transform transition hover:scale-90"
              >
                Add To Cart
              </button>
              <Link to={"/success"}>
                <button className="w-40 py-2 bg-para ml-3 rounded text-btntext transform transition hover:scale-90">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
          <div className="my-20">
            <h1 className="text-2xl text-para font-bold">Product List</h1>
            <div className="flex flex-wrap gap-7 my-10">
              {products.map((item) => (
                <div key={item.id}>
                  <img
                    src={item.image}
                    alt=""
                    className="w-[200px] border-2 rounded p-5 shadow-lg  "
                  />
                  <p className="text-para text-xl mt-1">Price - {item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default ProductDetails;
