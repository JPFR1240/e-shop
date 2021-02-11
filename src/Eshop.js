import React from "react";
import { Details } from "./pages/Details";
import { Navbar } from "./components/views/Navbar";
import { Products } from "./pages/Products";
import AppRouters from "./router/AppRouters";

export const Eshop = () => {
  return (
    <div>
      <div className="text-center">
        <h1>My shop</h1>
      </div>
      <AppRouters />
    </div>
  );
};
