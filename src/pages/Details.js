import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addProduct } from "../actions/ProductsActions";
import { Navbar } from "../components/views/Navbar";
import { getProducts } from "../helpers/getProducts";
import { getProductsbyId } from "../helpers/getProductsbyId";
import { useFetchProduct } from "../hooks/useFetchProduct";

export const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data: product } = useFetchProduct(id);
  const handleAdd = (product) => {
    dispatch(addProduct(product));
  };
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row">
        <img
          src={product.image}
          className="img col-4 img-fluid mx-5 my-3"
          alt="Product Image"
        />
        <div className="col-6">
          <h3 className="my-4">{product.title}</h3>
          <div className="my-4">{product.description}</div>
          <div className="my-4">{product.category}</div>
          <button
            type="button"
            className="btn btn-primary my-4"
            onClick={() => handleAdd(product)}
          >
            Add to car
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};
