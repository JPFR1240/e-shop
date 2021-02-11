import { types } from "../types/types";

export const addProduct = (product) => ({
  type: types.addProduct,
  payload: {
    product
  },
});

export const showProducts = ({ products }) => ({
  type: types.showProducts,
  payload: {
    products,
  },
});
