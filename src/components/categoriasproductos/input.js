import React, { useState } from "react";
//Importamos elementos de Formik y Yup para formularios
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//Importamos elementos de Firebase
import { auth, firestore } from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

//Componente Input
const Input = () => {
  //Estado para manejar los mensajes de carga exitosa o fallida de datos
  const [cargaCategoriaExitosa, setCargaCategoriaExitosa] = useState(false);
  const [categoriaExiste, setCategoriaExiste] = useState(false);
  //Referencia a la base de datos
  const Ref = firestore.collection(
    `usuario/${auth.currentUser.uid}/categorias`
  );
  //Guardamos elementos de la Base de datos en un array
  let [Categorias] = useCollectionData(Ref, { idField: "id" });
  //Función para enviar a base de datos
  const enviarCategoria = (values) => {
    //Hacemos filter sobre Categorías para validar que el elemento no exista previamente
    let fil = Categorias.filter((item) => {
      return values.categoria === item.categoria;
    });
    if (fil.length === 0) {
      Ref.add({
        categoria: values.categoria,
      });
      //Mensajes de carga exitosa
      setCargaCategoriaExitosa(true);
      setTimeout(() => {
        setCargaCategoriaExitosa(false);
      }, 3000);
    } else {
      //Mensajes de categoría existente
      setCategoriaExiste(true);
      setTimeout(() => {
        setCategoriaExiste(false);
      }, 3000);
    }
  };
  return (
    <div>
      <Formik
        /*Valores iniciales del formulario*/
        initialValues={{
          categoria: "",
        }}
        /*Esquema de validaciones*/
        validationSchema={Yup.object({
          categoria: Yup.string().required("Campo incompleto"),
        })}
        /*Funcion que se ejecuta cuando se envía el formulario*/
        onSubmit={(values, { resetForm }) => {
          enviarCategoria(values);
          resetForm({ values: "" });
        }}
      >
        <Form>
          <div className="container my-4 text-center">
            <h3 className="my-2">Nueva categoría</h3>
            <div className="row my-2">
              <label htmlFor="categoria">Ingresá una nueva categoría</label>
              <Field name="categoria" type="text" />
              <ErrorMessage
                name="categoria"
                render={(msg) => <div className="errormessage">{msg}</div>}
              />
            </div>
            <div className="row my-4">
              <button className="btn btn-success" type="submit">
                Cargar
              </button>
            </div>
            <div className="container">
              {
                /*Mensajes de carga exitosa o fallida*/
                cargaCategoriaExitosa ? (
                  <div
                    className="alert alert-info d-flex align-items-center p-2 my-1"
                    role="alert"
                  >
                    <i className="bi bi-check-circle mx-1"></i>
                    <div>Categoría cargada exitosamente</div>
                  </div>
                ) : null
              }
              {categoriaExiste ? (
                <div
                  class="alert alert-danger d-flex align-items-center p-2 my-1"
                  role="alert"
                >
                  <i class="bi bi-x-circle mx-1"></i>
                  <div>La categoría ya existe</div>
                </div>
              ) : null}
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Input;
