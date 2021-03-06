import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navtabs = () => {
  //States para manejar la classname "active" de las pestañas
  const [activeProveedores, setActiveProveedores] = useState(true);
  const [activeCompras, setActiveCompras] = useState(false);
  //Funciones para manejar el estado
  const handleActiveProveedores = () => {
    setActiveCompras(!activeCompras);
    setActiveProveedores(!activeProveedores);
  };
  const handleActiveCompras = () => {
    setActiveProveedores(!activeProveedores);
    setActiveCompras(!activeCompras);
  };

  return (
    <div>
      <ul className="nav nav-tabs navbar-light rounded">
        <li className="nav-item">
          <Link
            to="/listaproveedores"
            style={{ textDecoration: "none" }}
            onClick={handleActiveProveedores}
          >
            <p
              className={
                /*Clases condicionales*/
                "text-dark nav-link " + (activeProveedores ? "active" : null)
              }
            >
              Proveedores
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/comprasproveedores"
            style={{ textDecoration: "none" }}
            onClick={handleActiveCompras}
          >
            <p
              className={
                /*Clases condicionales*/
                "text-dark nav-link " + (activeCompras ? "active" : null)
              }
            >
              Compras
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navtabs;
