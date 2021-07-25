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
      <div className="container d-flex my-3 p-2">
        <div className="container w-25 h-100">
          <Acciones></Acciones>
        </div>
        <div className="container w-75 h-100">
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
