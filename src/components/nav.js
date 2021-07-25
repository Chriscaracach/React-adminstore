import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

//Ésta función sirve para cerrar la sesión de la cuenta de Google
const desloguearGoogle = () => {
  auth.signOut();
};

const Nav = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand navbar-light bg-info">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <Link to="/">
                <li className="nav-item m-2">
                  <i className="bi bi-shop h1 nav-link"></i>
                </li>
              </Link>
              <Link to="input">
                <li className="nav-item m-2">
                  <i className="bi bi-clipboard-plus h1 nav-link"></i>
                </li>
              </Link>
              <Link to="list">
                <li className="nav-item m-2">
                  <i className="bi bi-list-ul h1 nav-link"></i>
                </li>
              </Link>
              <Link to="proveedores">
                <li className="nav-item m-2">
                  <i class="bi bi-layout-text-sidebar-reverse h1 nav-link"></i>
                </li>
              </Link>
              <li className="nav-item m-2">
                <button
                  className="btn nav-link"
                  onClick={desloguearGoogle} //Función para desloguearse
                >
                  <i className="bi bi-person-x h1"></i>
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
