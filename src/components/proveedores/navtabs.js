import React from "react";
import { Link } from "react-router-dom";

const Navtabs = () => {
  return (
    <div>
      <ul class="nav nav-tabs">
        <Link to="/listaproveedores">
          <li class="nav-item">
            <p className="nav-link">Proveedores</p>
          </li>
        </Link>
        <Link to="/comprasproveedores">
          <li class="nav-item">
            <p className="nav-link">Compras</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navtabs;
