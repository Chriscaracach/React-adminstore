import React from "react";

const Item = ({ id, fecha, tipoproducto, precio, formapago }) => {
  return (
    <li className="list-group-item">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-1">{id}</div>
          <div className="col-2">{fecha}</div>
          <div className="col-3">{tipoproducto}</div>
          <div className="col-2">${precio}</div>
          <div className="col-2">{formapago}</div>
          <div className="col-1">
            <button className="btn">
              <i class="bi bi-trash h1"></i>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

const List = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h1>Lista de ventas</h1>
      </div>
      <Item
        id="1"
        fecha="26/6/21"
        tipoproducto="funda"
        precio="156"
        formapago="credito"
      ></Item>
      <Item
        id="1"
        fecha="26/6/21"
        tipoproducto="funda"
        precio="156"
        formapago="credito"
      ></Item>
    </div>
  );
};

export default List;
