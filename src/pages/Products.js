import React from "react";
import { Card } from "../components/views/Card";
import { Navbar } from "../components/views/Navbar";
import { useFetchProducts } from "../hooks/useFetchProducts";

export const Products = () => {
  const { data: products } = useFetchProducts();

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row">
        {products.map((product) => (
          <div className="col-12 col-sm-10 col-md-4 col-xl-3">
            <Card product={product} key={product.id} />
          </div>
        ))}
      </div>
    </div>
  );
};
