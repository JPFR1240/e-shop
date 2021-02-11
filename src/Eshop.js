import React from "react";
import { Details } from "./pages/Details";
import { Navbar } from "./components/views/Navbar";
import { Products } from "./pages/Products";
import AppRouters from "./router/AppRouters";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const Eshop = () => {
  return (
    <Provider store= {store}>
      <div className="text-center">
        <h1>My shop</h1>
      </div>
      <AppRouters />
    </Provider>
  );
};
