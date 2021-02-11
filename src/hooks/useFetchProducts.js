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

/* Hook que ayuda en la obtención de la data de todos los productos y facilita su visualización */