import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { addProduct } from "../../redux/actions/ProductsActions";

export const Card = ({ product }) => {
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addProduct(product));
    Swal.fire('Proceso exitoso', 'El producto se agregó al carrito','success');
  };

  return (
    <div className="card my-3 div-img d-flex align-items-center" style={{ maxWidth: "15rem" }}>
      <Link to={`/details/${product.id}`}>
        <img src={product.image} className="card-img-top myimg" alt="..." />
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

/* Componente que genera y llena el card con los datos pasados por props */