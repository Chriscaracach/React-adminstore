import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const desloguearGoogle = () => {
  auth.signOut();
};

const Nav = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <Link to="/">
                <li className="nav-item">
                  <a className="nav-link mx-2" aria-current="page" href="c">
                    <i className="bi bi-shop h1"></i>
                  </a>
                </li>
              </Link>
              <Link to="input">
                <li className="nav-item">
                  <a className="nav-link mx-2" href="b">
                    <i className="bi bi-clipboard-plus h1"></i>
                  </a>
                </li>
              </Link>
              <Link to="list">
                <li className="nav-item">
                  <a className="nav-link mx-2" href="d">
                    <i class="bi bi-list-ul h1"></i>
                  </a>
                </li>
              </Link>
              {/* <li className="nav-item">
                <a className="nav-link mx-2" href="b">
                  <i className="bi bi-wallet2 h1"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="n">
                  <i className="bi bi-list-ol h1"></i>
                </a>
              </li> */}
              <li className="nav-item">
                <button
                  className="btn nav-link mx-2"
                  onClick={desloguearGoogle}
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
