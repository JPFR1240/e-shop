import { types } from "../types/types";

export const addProduct = (added) => ({
  type: types.addProduct,
  payload: {
    added
  },
});

export const loading = ( load ) => ({
  type: types.showProducts,
  payload: {
    load
  },
});

/* Acciones del producto donde se podra añadir uno y visualizar todos */