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

/* hook que ayuda en la obtención de la data de un producto y permite visualziarla en un array*/