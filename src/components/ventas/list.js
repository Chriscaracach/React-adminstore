import React, { useState, useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, firestore } from "../../firebase";

//Componente Item
const Item = ({
  keyid,
  id,
  fecha,
  tipoproducto,
  precio,
  formapago,
  descripcion,
}) => {
  const Ref = firestore.collection(`usuario/${auth.currentUser.uid}/ventas`);
  const borrarVenta = (id) => {
    Ref.doc(id).delete();
  };
  return (
    <tr>
      <th>{id}</th>
      <th>{fecha}</th>
      <th>{tipoproducto}</th>
      <th>${precio}</th>
      <th>{formapago}</th>
      <th>
        <button
          className="btn"
          onClick={() => {
            borrarVenta(keyid);
          }}
        >
          <i className="bi bi-trash h3"></i>
        </button>
      </th>
      <th>
        {descripcion ? (
          <>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Info
            </button>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Info
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">{descripcion}</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </th>
    </tr>
  );
};

//TAREAS
//Configurar boton eliminar, revisar diseño, tamaño
//Mejorar formato de fecha
//Mejorar columnas, revisar responsive
//Embellecer

//Componente lista
const List = () => {
  //Referencia a la Base de datos
  const Ref = firestore.collection(`usuario/${auth.currentUser.uid}/ventas`);
  //Guardamos lo que obtenemos de la base de datos en un array
  let [Ventas] = useCollectionData(Ref, { idField: "id" });
  //Ordenamos según la fecha
  if (Ventas != null) {
    Ventas = Ventas.sort((a, b) => (a.fecha < b.fecha ? 1 : -1));
  }
  useEffect(() => {}, []);
  return (
    <div className="container text-center my-4">
      <h1 className="my-2">Lista de ventas</h1>
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fecha</th>
              <th scope="col">Tipo</th>
              <th scope="col">Precio</th>
              <th scope="col">Pago</th>
              <th scope="col">Eliminar</th>
              <th scope="col">Info</th>
            </tr>
          </thead>
          <tbody>
            {Ventas &&
              Ventas.map((item, i) => {
                return (
                  <Item
                    keyid={item.id}
                    key={item.id}
                    id={i}
                    fecha={item.fecha}
                    tipoproducto={item.producto}
                    precio={item.precio}
                    formapago={item.formapago}
                    descripcion={item.descripcion}
                  ></Item>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
