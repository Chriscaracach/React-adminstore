import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="1">
            Adminstore
          </a>
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
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <Link to="/">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="a">
                    Inicio
                  </a>
                </li>
              </Link>
              <Link to="ventas">
                <li class="nav-item">
                  <a class="nav-link" href="a">
                    Ventas
                  </a>
                </li>
              </Link>
              <li class="nav-item">
                <a class="nav-link" href="a">
                  Compras
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="a">
                  Inventario
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="a">
                  Cerrar sesión
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
