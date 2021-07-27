import React from "react";
//Componentes
import Input from "./input";
import DisplayVentas from "./displayVentas";

const Ventas = () => {
  return (
    <div className="container d-flex my-3 p-2">
      <div className="container w-25 h-100">
        <Input></Input>
      </div>
      <div className="container w-75 h-100">
        <DisplayVentas></DisplayVentas>
      </div>
    </div>
  );
};

export default Ventas;
