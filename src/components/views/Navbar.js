import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const { products: addedProducts } = useSelector((state) => state.Car);
  console.log(addedProducts);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      {/* <Link className="navbar-brand" to="/">
        Asociaciones
      </Link> */}
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav mx-2">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/"
          >
            Productos
          </NavLink>
        </ul>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end">
        <ul className="navbar-nav mx-2">
          {/* <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to=""
          > */}
          <div className="dropdown">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Added{" "}
              <span className="badge bg-secondary">{addedProducts.length}</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {addedProducts.map((oneProduct) => {
                <li>{oneProduct.added.title}-{oneProduct.added.price}</li>;
              })}
            </ul>
          </div>
          {/* </NavLink> */}
        </ul>
      </div>
    </nav>
  );
};
