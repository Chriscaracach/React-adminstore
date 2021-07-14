import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, firestore } from "../../firebase";

//Componente Item
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
              <i className="bi bi-trash h1"></i>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

//TAREAS
//Hay que hacer el "fetch" a la DDBB con useEffect, así se carga a la primera, creo
//Hay que crear otra ruta para mostrar la lista de ventas ahí
//Embellecer

//Componente lista
const List = () => {
  const Ref = firestore.collection(`usuario/${auth.currentUser.uid}/ventas`);
  const [Ventas] = useCollectionData(Ref, { idField: "id" });

  return (
    <div className="container">
      <div className="text-center">
        <h1>Lista de ventas</h1>
        {Ventas &&
          Ventas.map((item) => {
            return (
              <li clasName="list-group-item">
                <Item
                  key={item.id}
                  fecha={item.fecha}
                  tipoproducto={item.producto}
                  precio={item.precio}
                  formapago={item.formapago}
                ></Item>
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default List;
