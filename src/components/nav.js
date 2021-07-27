import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-dark bg-success">
        <div className="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <Link to="/" style={{ textDecoration: "none" }}>
                <li className="nav-item nav-link mt-1">
                  <p className="lead">
                    <i className="bi bi-shop mx-2"></i>Inicio
                  </p>
                </li>
              </Link>
              <Link to="ventas" style={{ textDecoration: "none" }}>
                <li className="nav-item nav-link mt-1">
                  <p className="lead">
                    <i className="bi bi-clipboard-plus mx-2"></i>Ventas
                  </p>
                </li>
              </Link>
              <Link to="proveedores" style={{ textDecoration: "none" }}>
                <li className="nav-item nav-link mt-1">
                  <p className="lead">
                    <i class="bi bi-people mx-2"></i>Proveedores
                  </p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
