import React from "react";
//Componentes
import Input from "./input";
import DisplayVentas from "./displayVentas";

const Ventas = () => {
  return (
    <div className="container  my-3 p-2" id="ventas__container">
      <div className="container w-75 h-100" id="ventas__input__container">
        <Input></Input>
      </div>
      <div className="container h-100" id="ventas__display__container">
        <DisplayVentas></DisplayVentas>
      </div>
    </div>
  );
};

export default Ventas;
