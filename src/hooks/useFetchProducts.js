import { useEffect, useState } from "react";
import { getProducts } from "../helpers/getProducts";

export const useFetchProducts = () => {
  const [state, setstate] = useState({
    data: [],
  });

  useEffect(() => {
    getProducts().then((product) => {
      setstate({
        data: product,
      });
    });
  }, []);

  return state;
};
