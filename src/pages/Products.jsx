// import React, { useEffect, useState } from "react";
import { useContextStatement } from "../Context/ContextStatement";
import Card from "./Card";
import Spinner from "../components/Spinner";

const Products = () => {
  const {
    state: { products },
  } = useContextStatement();
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   setProducts(productList);
  // }, []);
  //   console.log(state);
  return (
    <>
      {products.length > 0 ? (
        <div className="flex flex-wrap gap-6">
          {products?.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Products;
