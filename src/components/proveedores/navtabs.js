import React from "react";
import { Link } from "react-router-dom";

const Navtabs = () => {
  return (
    <div>
      <ul className="nav nav-tabs navbar-light bg-info rounded">
        <li className="nav-item">
          <Link to="/listaproveedores" style={{ textDecoration: "none" }}>
            <p className="text-dark nav-link">Proveedores</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/comprasproveedores" style={{ textDecoration: "none" }}>
            <p className="text-dark nav-link">Compras</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navtabs;
