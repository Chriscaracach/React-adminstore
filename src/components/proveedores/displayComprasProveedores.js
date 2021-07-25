import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, firestore } from "../../firebase";

//Item
const Item = ({
  keyid,
  id,
  fecha,
  proveedor,
  monto,
  formapago,
  descripcion,
}) => {
  let refProveedores = firestore.collection(
    `usuario/${auth.currentUser.uid}/comprasproveedores`
  );
  //Función para borrar item de la lista
  const borrarCompraProveedor = (id) => {
    refProveedores.doc(id).delete();
  };
  return (
    <tr>
      <th>{id}</th>
      <th>{fecha}</th>
      <th>{proveedor}</th>
      <th>{monto}</th>
      <th>{formapago}</th>
      <th>
        <button
          className="btn"
          onClick={() => {
            borrarCompraProveedor(keyid); /*Función para borrar item*/
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
                  <div className="modal-body">{descripcion}</div>
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

const Displaycomprasproveedores = () => {
  let refComprasProveedores = firestore.collection(
    `usuario/${auth.currentUser.uid}/comprasproveedores`
  );
  let [ComprasProveedores] = useCollectionData(refComprasProveedores, {
    idField: "id",
  });
  return (
    <div className="container text-center my-4">
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fecha</th>
              <th scope="col">Proveedor</th>
              <th scope="col">Monto</th>
              <th scope="col">Forma de pago</th>
              <th scope="col">Eliminar</th>
              <th scope="col">Info</th>
            </tr>
          </thead>
          <tbody>
            {/*Mapeo del array con los elementos obtenidos de la base de datos*/}
            {ComprasProveedores &&
              ComprasProveedores.map((item, i) => {
                return (
                  <Item
                    keyid={item.id}
                    key={item.id}
                    id={i}
                    fecha={item.fecha}
                    proveedor={item.proveedor}
                    monto={item.monto}
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

export default Displaycomprasproveedores;
