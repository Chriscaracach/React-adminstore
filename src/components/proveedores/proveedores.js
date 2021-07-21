import React from "react";
import { Route, Switch } from "react-router-dom";

//Componentes
import Acciones from "./acciones";
import Navtabs from "./navtabs";
import Displayproveedores from "./displayProveedores";
import Displaycomprasproveedores from "./displayComprasProveedores";

const Proveedores = () => {
  return (
    <div className="container d-flex my-3">
      <div className="container w-25 h-100">
        <Acciones></Acciones>
      </div>
      <div className="container w-75 h-100">
        {/*Nav tab*/}
        <Navtabs></Navtabs>

        {/*display*/}
        <Switch>
          <Route
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
  );
};

export default Proveedores;
