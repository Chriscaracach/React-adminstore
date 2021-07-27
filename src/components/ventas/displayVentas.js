import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, firestore } from "../../firebase";
//import imgventas from "../../img/imgventas.png";
import Loader from "../loader";

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
  //Referencia a la base de datos
  const Ref = firestore.collection(`usuario/${auth.currentUser.uid}/ventas`);
  //Función para borrar item de la lista
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
            borrarVenta(keyid); /*Función para borrar item*/
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

            {/*Modal*/}
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
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

//Componente lista
const DisplayVentas = () => {
  //Referencia a la Base de datos
  const Ref = firestore.collection(`usuario/${auth.currentUser.uid}/ventas`);
  //Guardamos lo que obtenemos de la base de datos en un array
  let [Ventas] = useCollectionData(Ref, { idField: "id" });
  //Ordenamos según la fecha
  if (Ventas != null) {
    Ventas = Ventas.sort((a, b) => (a.fecha < b.fecha ? 1 : -1));
  }
  return (
    <div className="container text-center my-4">
      {Ventas ? (
        <>
          <h1 className="my-2">Lista de ventas</h1>
          <div className="table-responsive">
            <table className="table table-sm table-hover align-middle">
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
                {/*Mapeo del array con los elementos obtenidos de la base de datos*/}
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
        </>
      ) : (
        <>
          {/* <img
            src={imgventas}
            alt="No hay ventas cargadas"
            className="img-fluid w-50 h-50 m-auto"
          />
          <h3>No tenés ventas cargadas</h3> 
          NO FUNCIONÓ
          */}
          <Loader></Loader>
        </>
      )}
    </div>
  );
};

export default DisplayVentas;
