import { types } from "../types/types";

const initialState = {
  products: [],
};
/* const initialState = [{
  add: false,
  product: {
    id: '',
    title: 'asd',
    price: 0,
    description: '',
    category: '',
    image: ''
  }
}] */
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
