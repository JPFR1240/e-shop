import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../../actions/ProductsActions";
import { getProductsbyId } from "../../helpers/getProductsbyId";

export const Card = ({ product }) => {
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addProduct(product));
  };

  return (
    <div className="card my-3" style={{ maxWidth: "15rem" }}>
      <Link to={`/details/${product.id}`}>
        <img src={product.image} className="card-img-top" alt="..." />
      </Link>
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
