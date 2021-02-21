import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../helpers/getProducts";
import { endLoading, startLoading } from "../redux/actions/uiActions";

export const useFetchProducts = () => {
  const [state, setstate] = useState({
    data: [],
  });
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(startLoading());
    getProducts()
      .then((product) => {
        setstate({
          data: product,
        });
      })
      .then(dispatch(endLoading()));
  }, []);
  return state;
};

/* Hook que ayuda en la obtención de la data de todos los productos y facilita su visualización */
