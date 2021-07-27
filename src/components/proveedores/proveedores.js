import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Componentes
import Acciones from "./acciones";
import Navtabs from "./navtabs";
import Displayproveedores from "./displayProveedores";
import Displaycomprasproveedores from "./displayComprasProveedores";

//TAREAS
//Configurar acciones de botones
//
const Proveedores = () => {
  return (
    <BrowserRouter>
      <div className="container my-3 p-2" id="proveedores__container">
        <div
          className="container w-50 h-100 mb-2"
          id="proveedores__acciones__container"
        >
          <Acciones></Acciones>
        </div>
        <div className="container w-100" id="proveedores__display__container">
          {/*Nav tab*/}
          <Navtabs></Navtabs>

          {/*display*/}
          <Switch>
            <Route
              exact
              path="/listaproveedores"
              component={Displayproveedores}
            ></Route>
            <Route
              path="/comprasproveedores"
              component={Displaycomprasproveedores}
            ></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Proveedores;
