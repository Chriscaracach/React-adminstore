import React from "react";
import { Link } from "react-router-dom";

const Navtabs = () => {
  return (
    <div>
      <ul className="nav nav-tabs">
        <Link to="/listaproveedores">
          <li className="nav-item">
            <p className="nav-link">Proveedores</p>
          </li>
        </Link>
        <Link to="/comprasproveedores">
          <li className="nav-item">
            <p className="nav-link">Compras</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navtabs;
