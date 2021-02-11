import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Details } from "../pages/Details";
import { Products } from "../pages/Products";

export default function AppRouters() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/details/:id"  exact component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

/* Solo se usan 2 rutas, la raíz con la lista completa de productos y la específica con los detalles de éste */