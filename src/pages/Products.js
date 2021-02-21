import React from "react";
import { useSelector } from "react-redux";
import { Spinner } from "../components/Spinner";
import { Card } from "../components/views/Card";
import { Navbar } from "../components/views/Navbar";
import { useFetchProducts } from "../hooks/useFetchProducts";

export const Products = () => {
  const { data: products } = useFetchProducts();
  const { loading } = useSelector((state) => state.ui);
  console.log(loading);
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <div className="row div-center">
        {products.map((product) => (
          <div className="col-12 col-sm-10 col-md-4 col-xl-3" key={product.id}>
            {!loading ? <Card product={product} /> : <Spinner />}
          </div>
        ))}
      </div>
    </div>
  );
};

/* Página donde se visualiza la lista de productos */
