import React from "react";
import { Navbar } from "../components/views/Navbar";
import { getProducts } from "../helpers/getProducts";
import { getProductsbyId } from "../helpers/getProductsbyId";

export const Details = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row">
        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" className="img col-6 img-fluid" alt="Product Image" />
        <div className="col-6">
            <h3 className="my-4">Title</h3>
            <div className="my-4">Description</div>
            <div className="my-4">Category</div>
            <button type="button" className="btn btn-primary my-4" onClick={() => getProducts()}>Add to car</button>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
};
