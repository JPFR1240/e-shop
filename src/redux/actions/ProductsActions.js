import { useState } from "react";
import Swal from "sweetalert2";
import { getProductsbyId } from "../../helpers/getProductsbyId";
import { types } from "../types/types";
import { endLoading, startLoading } from "./uiActions";

export const addProduct = (product) => (
  Swal.fire("Proceso exitoso", "El producto se agregó al carrito", "success"),
  {
    type: types.addProduct,
    payload: {
      product,
    },
  }
);

export const LoadProducts = () => {
  const [state, setState] = useState({ data: [] });

  return async (dispatch) => {
    dispatch(startLoading());
    await getProductsbyId().then((product) => {
      setState({
        data: product,
      });
    });
    dispatch(endLoading());
  };
};

/* Acciones del producto donde se podra añadir uno y visualizar todos */
