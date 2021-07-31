import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, firestore } from "../../firebase";
import Loader from "../loader";

const Item = ({ categoria, keyid }) => {
  let Ref = firestore.collection(`usuario/${auth.currentUser.uid}/categorias`);
  const borrarCategoria = (id) => {
    Ref.doc(id).delete();
  };
  return (
    <span class="badge rounded-pill bg-info text-dark p-1 m-1">
      <div className="ms-2">
        {categoria}
        <button
          className="btn btn-sm"
          onClick={() => {
            borrarCategoria(keyid); /*Función para borrar item*/
          }}
        >
          <i class="bi bi-x-circle-fill"></i>
        </button>
      </div>
    </span>
  );
};

const List = () => {
  let Ref = firestore.collection(`usuario/${auth.currentUser.uid}/categorias`);
  let [Categorias] = useCollectionData(Ref, { idField: "id" });

  return (
    <div className="container">
      <div className="text-center">
        <h3>Categorías</h3>
      </div>

      {Categorias ? (
        Categorias &&
        Categorias.map((item) => {
          return (
            <Item
              categoria={item.categoria}
              keyid={item.id}
              key={item.id}
            ></Item>
          );
        })
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
};

export default List;
