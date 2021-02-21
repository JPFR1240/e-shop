import Swal from "sweetalert2";
import { types } from "../types/types";

export const addProduct = (added) => (
  Swal.fire("Proceso exitoso", "El producto se agregó al carrito", "success"),
  {
  type: types.addProduct,
  payload: {
    added,
  },
});


/* Acciones del producto donde se podra añadir uno y visualizar todos */