import { types } from "../types/types";

const initialState = {
  products: [],
  loading: false,
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addProduct:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case types.loading:
      return {
        ...state,
        loading: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

/* reducer del productos */
