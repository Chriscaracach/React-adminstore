import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const desloguearGoogle = () => {
  auth.signOut();
};

const Nav = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="1">
            Adminstore
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <Link to="/">
                <li className="nav-item">
                  <a className="nav-link mx-2" aria-current="page" href="a">
                    <i class="bi bi-shop h1"></i>
                  </a>
                </li>
              </Link>
              <Link to="ventas">
                <li className="nav-item">
                  <a className="nav-link mx-2" href="a">
                    <i class="bi bi-clipboard-plus h1"></i>
                  </a>
                </li>
              </Link>
              <li className="nav-item">
                <a className="nav-link mx-2" href="a">
                  <i class="bi bi-wallet2 h1"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="a">
                  <i class="bi bi-list-ol h1"></i>
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="btn nav-link mx-2"
                  onClick={desloguearGoogle}
                >
                  Cerrar sesión
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
