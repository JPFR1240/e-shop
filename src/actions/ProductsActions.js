import { types } from "../types/types";

export const addProduct = (added) => ({
  type: types.addProduct,
  payload: {
    added
  },
});

export const showProducts = ({ products }) => ({
  type: types.showProducts,
  payload: {
    products,
  },
});
