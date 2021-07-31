import React from "react";
//Componentes
import Input from "./input";
import List from "./list";

const Categoriasproductos = () => {
  return (
    <div className="container my-3 p-2" id="categorias__container">
      <div className="container w-75" id="categorias__container__input">
        <Input></Input>
      </div>
      <div className="container w-100" id="categorias__container__list">
        <List></List>
      </div>
    </div>
  );
};

export default Categoriasproductos;
