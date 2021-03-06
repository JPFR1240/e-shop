import React from "react";
import AppRouters from "./router/AppRouters";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const Eshop = () => {
  return (
    <Provider store={store}>
      <div className="text-center py-3">
        <h1>My shop</h1>
      </div>
      <AppRouters />
    </Provider>
  );
};

