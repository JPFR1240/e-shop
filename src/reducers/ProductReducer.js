import { types } from "../types/types";

const initialState = {
  products: [],
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addProduct:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

/* reducer del producto */
