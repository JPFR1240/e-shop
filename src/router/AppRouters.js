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
          <Route path="/details"  exact component={Details} />
        </Switch>
      </div>
    </Router>
  );
}
