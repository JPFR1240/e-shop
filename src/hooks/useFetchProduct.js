import { useEffect, useState } from "react";
import { getProducts } from "../helpers/getProducts";
import { getProductsbyId } from "../helpers/getProductsbyId";

export const useFetchProduct = (id) => {
  const [state, setstate] = useState({
    data: [],
  });

  useEffect(() => {
    getProductsbyId(id).then((product) => {
      setstate({
        data: product,
      });
    });
  }, []);
  return state;
};
