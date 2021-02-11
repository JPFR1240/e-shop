import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../actions/ProductsActions";
import { getProductsbyId } from "../../helpers/getProductsbyId";

export const Card = ({ product }) => {
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    console.log(`Agregado el producto N°` + product.id);
    dispatch( addProduct(product) )
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <div className="row">
          <span className="col">Price: {product.price}</span>
          <a
            href="#"
            className="btn btn-primary col"
            onClick={() => handleAdd(product)}
          >
            Add to car
          </a>
        </div>
      </div>
    </div>
  );
};
