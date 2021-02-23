import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { addProduct } from "../../redux/actions/ProductsActions";

export const Card = ({ product }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAdd = (product) => {
    dispatch(addProduct(product));
    /* Swal.fire("Proceso exitoso", "El producto se agregó al carrito", "success"); */
  };

  const handleImg = () => {
    console.log(product.id);
    history.push(`/details/${product.id}`);
  };

  return (
    <div className="card my-3 div-img d-flex">
      <div className="div-redirect card__side card__side--front" onClick={handleImg}>
        {/* <img src={product.image} className="card-img-top myimg" alt="..." /> */}
        <img src={product.image} className="card-img-top" alt="..." />
      </div>
      <div className="card-body bg card__side card__side--back">
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

/* Componente que genera y llena el card con los datos pasados por props */
