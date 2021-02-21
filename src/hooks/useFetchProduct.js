import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../helpers/getProducts";
import { getProductsbyId } from "../helpers/getProductsbyId";
import { endLoading, startLoading } from "../redux/actions/uiActions";

export const useFetchProduct = (id) => {
  const [state, setstate] = useState({
    data: [],
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoading());
    getProductsbyId(id)
      .then((product) => {
        setstate({
          data: product,
        });
      })
      .then(dispatch(endLoading()));
  }, []);
  return state;
};

/* hook que ayuda en la obtención de la data de un producto y permite visualziarla en un array*/
