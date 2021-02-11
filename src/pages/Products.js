import React from "react";
import { Card } from "../components/views/Card";
import { Navbar } from "../components/views/Navbar";
import { getProducts } from "../helpers/getProducts";

export const Products = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="col">
        <Card />
      </div>
    </div>
  );
};
