import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card } from "../components/views/Card";
import { Navbar } from "../components/views/Navbar";
import { getProducts } from "../helpers/getProducts";
import { useFetchProducts } from "../hooks/useFetchProducts";

export const Products = () => {
  const { data: products } = useFetchProducts();

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row">
        {products.map((product) => (
          <div className="col-12 col-sm-10 col-md-4 col-xl-3">
            <Card
              product={product}
              key={product.id}
              /* title={product.title}
              price={product.price}
              image={product.image}
              key={product.id} */
            />
          </div>
        ))}
      </div>
    </div>
  );
};
