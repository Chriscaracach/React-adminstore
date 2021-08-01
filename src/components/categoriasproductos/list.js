import React from "react";
//Importamos elementos de Firebase
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, firestore } from "../../firebase";
//Loader
import Loader from "../loader";

//Componente Item
const Item = ({ categoria, keyid }) => {
  //Referencia a la Base de datos
  let Ref = firestore.collection(`usuario/${auth.currentUser.uid}/categorias`);
  //Función para borrar la categoría
  const borrarCategoria = (id) => {
    Ref.doc(id).delete();
  };
  return (
    <span className="badge rounded-pill bg-info text-dark p-1 m-1">
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

//Componente List
const List = () => {
  //Referencia a la Base de datos
  let Ref = firestore.collection(`usuario/${auth.currentUser.uid}/categorias`);
  //Guardamos elementos obtenidos de la Base de datos en un array
  let [Categorias] = useCollectionData(Ref, { idField: "id" });

  return (
    <div className="container">
      <div className="text-center">
        <h3>Categorías</h3>
      </div>
      {
        /*Mapeo sobre Categorías*/
        Categorias ? (
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
        )
      }
    </div>
  );
};

export default List;
