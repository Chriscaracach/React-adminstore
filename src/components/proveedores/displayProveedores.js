import React from "react";
//Importamos elementos de Firebase
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, firestore } from "../../firebase";
//Componentes
import Loader from "../loader";

//Componente Item
const Item = ({
  keyid,
  id,
  proveedor,
  direccion,
  telefono,
  mail,
  listaprecios,
}) => {
  //Referencia a la Base de datos
  let refProveedores = firestore.collection(
    `usuario/${auth.currentUser.uid}/proveedores`
  );
  //Función para borrar item de la lista
  const borrarProveedor = (id) => {
    refProveedores.doc(id).delete();
  };
  return (
    <tr>
      <th>{id}</th>
      <th>{proveedor}</th>
      <th>{direccion}</th>
      <th>{telefono}</th>
      <th>{mail}</th>
      <th>
        <button
          className="btn"
          onClick={() => {
            borrarProveedor(keyid); /*Función para borrar item*/
          }}
        >
          <i className="bi bi-trash h3"></i>
        </button>
      </th>
      <th>
        {listaprecios ? (
          <>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#modalDescripcion"
            >
              +
            </button>

            {/*Modal*/}
            <div
              className="modal fade"
              id="modalDescripcion"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Info
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">{listaprecios}</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
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

//Componente Display
const Displayproveedores = () => {
  //Referencia a la base de datos
  let refProveedores = firestore.collection(
    `usuario/${auth.currentUser.uid}/proveedores`
  );
  //Guardamos elementos de la base de datos en un array
  let [Proveedores] = useCollectionData(refProveedores, { idField: "id" });
  return (
    <div className="container text-center my-2 p-2 rounded">
      {
        /*Operador ternario para mostrar Loader o la tabla*/
        Proveedores ? (
          <div className="table-responsive">
            <table className="table table-hover table-sm align-middle">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Proveedor</th>
                  <th scope="col">Dirección</th>
                  <th scope="col">Teléfono</th>
                  <th scope="col">E-mail</th>
                  <th scope="col">Eliminar</th>
                  <th scope="col">Info</th>
                </tr>
              </thead>
              <tbody>
                {/*Mapeo del array con los elementos obtenidos de la base de datos*/}
                {Proveedores &&
                  Proveedores.map((item, i) => {
                    return (
                      <Item
                        keyid={item.id}
                        key={item.id}
                        id={i}
                        proveedor={item.proveedor}
                        direccion={item.direccion}
                        telefono={item.telefono}
                        mail={item.mail}
                        listaprecios={item.listaprecios}
                      ></Item>
                    );
                  })}
              </tbody>
            </table>
          </div>
        ) : (
          <>
            <Loader></Loader>
          </>
        )
      }
    </div>
  );
};

export default Displayproveedores;
